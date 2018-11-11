import * as React from 'react';
import {MessageAppContainer} from './containers/MessageAppContainer';

export interface IAppStateProps {
    logged: boolean;
}

export class App extends React.PureComponent<IAppStateProps> {
    render(): JSX.Element {
        console.log('Logged in:', this.props.logged);
        if (this.props.logged) {
            return <LoginContainer/>;
        } else {
            return <MessageAppContainer/>;
        }
    }
}
