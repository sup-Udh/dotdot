import React, { useContext, useRef, useCallback } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'
import { useImmer } from 'use-immer'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import { SocketContext } from 'util/socketProvider'
import { VALID_USERNAME } from '../../../constants'
import useGlobalState from 'store/state'
import { EVENTS, Message, OutgoingMessage } from 'store/types'
import MessageComponent from '../Messages/Message'

import styles from './index.module.scss'
import { timedDiff } from './lib/timedDiff'
import PlayBackMessage from '../Messages/Message/PlayBackMessage'

export type TimedChange = [number, string | null, number]

type State = {
  message: string
  timedMessage: TimedChange[]
  lastKeyStroke: Date | null
  private: boolean
  to: string | null
  isCommand: boolean
  focused: boolean
}

type Props = {
  replyTo?: Message | null
  onFocus?: () => void
  onBlur?: () => void
  onCancelReply?: () => void
}

export default ({ onFocus, onBlur, replyTo, onCancelReply }: Props) => {
  const { state, dispatch } = useGlobalState()

  const [localState, setState] = useImmer<State>({
    message: '',
    timedMessage: [],
    lastKeyStroke: null,
    private: false,
    to: null,
    isCommand: false,
    focused: false,
  })
  const draftTimer = useRef<any>(null)
  const inputRef = useRef<any>(null)

  const { socket } = useContext(SocketContext)

  const askForHelp = () => {
    dispatch({
      type: 'system_message',
      payload: '/help',
    })
  }

  const onInputFocus = useCallback(() => {
    setState(draft => {
      draft.focused = true
    })
    onFocus && onFocus()
  }, [setState, onFocus])

  const onInputBlur = useCallback(() => {
    setState(draft => {
      draft.focused = false
    })
    onBlur && onBlur()
  }, [setState, onBlur])

  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault()

    if (localState.message.length < 1 || localState.message.trim().length < 1) {
      return
    }

    sendMessage(localState.message)

    setState((draft) => {
      draft.message = ''
      draft.timedMessage = []
      draft.lastKeyStroke = null
      draft.private = false
      draft.isCommand = false
    })

    // refocus the input
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    })

    onCancelReply && onCancelReply()
  }

  const sendMessage = (message: string, draft: boolean = false) => {
    if (!draft && (message.length < 1 || message.trim().length < 1)) {
      return
    }

    if (message === '/help') {
      return askForHelp()
    }

    let type = EVENTS.MESSAGE
    if (localState.isCommand) {
      type = EVENTS.COMMAND
    }

    const payload: OutgoingMessage = {
      content: message,
      attributes: {
        draft,
        private: localState.private,
        to: localState.to,
        replyToTimestamp: replyTo ? replyTo.timestamp.getTime() : null,
      },
    }

    socket?.emit(type, payload)
  }

  const onType = (e: React.ChangeEvent<any>) => {
    e.preventDefault()

    clearTimeout(draftTimer.current)

    const value: string = e.currentTarget.value

    // special messages
    let isCommand = false
    let isPM = false
    let to: string | null = null

    if (value[0] === '/') {
      isCommand = true
    } else if (value[0] === '@') {
      const words = value.split(' ')
      isPM = true
      if (
        words.length > 0 &&
        words[0][0] === '@' &&
        VALID_USERNAME.test(words[0].substr(1))
      ) {
        to = words[0].substr(1)
      }
    }

    setState((draft) => {
      // Timed messages
      const timedMessage = timedDiff(value, draft.message, draft.lastKeyStroke)
      if (timedMessage) {
        draft.timedMessage.push(...timedMessage)
      } else if (value.length > 0) {
        draft.timedMessage = [[0, value, 0]]
      } else {
        draft.timedMessage = []
      }

      draft.message = value
      draft.private = isPM
      draft.to = to
      draft.isCommand = isCommand
      draft.lastKeyStroke = new Date()
    })

    if (isPM || isCommand) {
      return
    }

    if (state.draftTimer > 0) {
      draftTimer.current = setTimeout(() => {
        sendMessage(value, true)
      }, state.draftTimer)
    }
  }

  let icon: IconProp = 'question-circle'
  if (localState.isCommand) {
    icon = 'code'
  } else if (localState.private) {
    icon = 'lock'
  }

  const onIconClick = () => {
    if (icon !== 'question-circle') {
      return
    }
    askForHelp()
  }

  return (
    <div className={ classNames(styles.area, 'container', {
      [styles.focused]: localState.focused
    })}>
      {replyTo && (
        <div
          className={styles.reply}
          style={{ borderLeftColor: `#${replyTo.user.color}` }}
        >
          <div className={styles.actions}>
            <Button variant="link" onClick={onCancelReply}>
              <FontAwesomeIcon icon="times" />
            </Button>
          </div>
          <MessageComponent reply message={replyTo} />
        </div>
      )}
      {/* <PlayBackMessage
        timers={ localState.timedMessage }
        message={ localState.message }
      /> */}
      { JSON.stringify(localState.timedMessage) }
      <Form
        noValidate
        onSubmit={handleSubmit}
        className={classNames(styles.textBox, {
          [styles.private]: localState.private,
          [styles.command]: localState.isCommand,
        })}
      >
        <InputGroup className={ classNames(styles.inputGroup) }>
          <Form.Control
            as='input'
            type="text"
            placeholder="Type a message..."
            ref={ inputRef }
            autoFocus
            autoComplete="off"
            onChange={onType}
            onFocus={onInputFocus}
            onBlur={onInputBlur}
            value={localState.message}
          />
          <InputGroup.Append className={styles.button}>
            <Button type="submit">
              <FontAwesomeIcon icon="paper-plane" />
            </Button>
          </InputGroup.Append>
          <div className={styles.textIcon} onClick={onIconClick}>
            <FontAwesomeIcon icon={icon} />
          </div>
        </InputGroup>
      </Form>
    </div>
  )
}
