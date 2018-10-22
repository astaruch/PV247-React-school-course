import * as React from 'react';
import {MessageApp} from './components/MessageApp';

interface IMessage {
    readonly id: string;
    readonly from: string;
    readonly text: string;
}

export class App extends React.PureComponent {
    private getMessages(): IMessage[] {
        const message1: IMessage = { id: '1', from: 'User 2', text: 'Ahoj' };
        const message2: IMessage = { id: '2', from: 'User 3', text: 'Nazdar' };
        return [message1, message2];
    }

    render(): JSX.Element {
        const nick = 'Pussy Reaper 123';
        const message = 'New message!';
        const messages = this.getMessages();
        return (
         <div className="container-fluid body">
            <MessageApp nick={nick} message={message} messages={messages}/>
          </div>
        );
    }
}
