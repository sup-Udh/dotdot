import React from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useGlobalState from 'store/state'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import styles from './index.module.scss'

type Props = {
  onClick: () => void
  small?: boolean
}

export default ({ onClick, small }: Props) => {
  const { state } = useGlobalState()

  if (!state.auth.user) return <></>

  const isLocked = state.auth.user && state.auth.user.hasPassword
  const icon: IconProp = isLocked ? 'lock' : 'lock-open'

  return (
    <button className={styles.badge} onClick={onClick}>
      <span
        className={styles.dot}
        style={{ background: `#${state.auth.user.color}` }}
      />
      <span className={styles.name}>{state.auth.user.name}</span>
      <FontAwesomeIcon
        className={classNames(styles.lock, {
          [styles.lockClosed]: isLocked,
        })}
        icon={icon}
      />
    </button>
  )
}
