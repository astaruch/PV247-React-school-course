import * as React from 'react';
import {MessageAppContainer} from '../containers/MessageAppContainer';
import {LOGIN_PAGE_FAILURES} from '../actions/loginActions';
import {SIGN_UP_PAGE_FAILURES} from '../actions/signUpActions';
import {AuthPageContainer} from '../containers/AuthPageContainer';

export interface IAppStateProps {
  logged: boolean;
  authPageError: LOGIN_PAGE_FAILURES | SIGN_UP_PAGE_FAILURES | null;
}

export class App extends React.PureComponent<IAppStateProps> {
  render(): JSX.Element {
    return (this.props.logged) ? <MessageAppContainer/> : <AuthPageContainer/>;
  }
}
