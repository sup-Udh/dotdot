import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { useGlobalState } from 'store/state';

import Loading from 'sections/Loading';

type Props = {
  path: string,
  exact?: boolean,
  component?: React.ComponentType<any>,
};

/**
 * This Route only allows browsing into if the user IS logged in
 */
export default (props: Props) => {
  const { state } = useGlobalState();
  if (!state.auth.checked) {
    return (
      <Loading />
    );
  }

  if (!state.auth.loggedIn) {
    return (
      <Redirect to='/login' />
    );
  }

  return (
    <Route
      path={ props.path }
      exact={ props.exact }
      component={ props.component }
    />
  );
};