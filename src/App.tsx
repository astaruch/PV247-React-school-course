import * as React from 'react';
import {MessageAppContainer} from './containers/MessageAppContainer';
import {LoginContainer} from './containers/LoginContainer';

export interface IAppStateProps {
    logged: boolean;
}

export class App extends React.PureComponent<IAppStateProps> {

    render(): JSX.Element {
        return (this.props.logged) ? <MessageAppContainer/> : <LoginContainer/>;
    }
}
