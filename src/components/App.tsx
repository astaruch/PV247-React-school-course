import * as React from 'react';
import {MessageAppContainer} from '../containers/MessageAppContainer';
import {AuthPage} from './AuthPage';

export interface IAppStateProps {
  logged: boolean;
}

export class App extends React.PureComponent<IAppStateProps> {
  render(): JSX.Element {
    return (this.props.logged) ? <MessageAppContainer/> : <AuthPage/>;
  }
}
