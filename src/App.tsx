import * as React from 'react';
import {MessageApp} from './components/MessageApp';

export class App extends React.PureComponent {
    render(): JSX.Element {
        const message = 'New message!';
        const messages = [ 'Old message1', 'Old message2'];
        return (
            <MessageApp message={message} messages={messages}/>
        );
    }
}
