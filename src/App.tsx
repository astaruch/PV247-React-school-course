import * as React from 'react';
import {MessageApp} from './components/MessageApp';

export class App extends React.PureComponent {
    render(): JSX.Element {
        const nick = 'Pussy Reaper 123';
        const message = 'New message!';
        const messages = [ 'Old message1', 'Old message2'];
        return (
            <MessageApp nick={nick} message={message} messages={messages}/>
        );
    }
}
