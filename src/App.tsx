import * as React from 'react';
import {MessageApp} from './components/MessageApp';
import {IChannelItem} from './components/ChannelItem';
import {IMessageItem} from './components/MessageItem';

export class App extends React.PureComponent {
    private getMessages(): IMessageItem[] {
        const message1: IMessageItem = { id: '1', from: 'User 2', text: 'Ahoj' };
        const message2: IMessageItem = { id: '2', from: 'User 3', text: 'Nazdar' };
        return [message1, message2];
    }

    private getChannels(): IChannelItem[] {
        const channel1: IChannelItem = { name: 'General', numberOfNewMessages: 10 };
        const channel2: IChannelItem = { name: 'Back office', numberOfNewMessages: 0};
        const channel3: IChannelItem = { name: 'Spam', numberOfNewMessages: 1337 };
        return [channel1, channel2, channel3];
    }


    render(): JSX.Element {
        const nick = 'Pussy Reaper 123';
        const messages = this.getMessages();
        const channels = this.getChannels();
        return (
         <div className="container-fluid body">
            <MessageApp nick={nick} messages={messages} channels={channels}/>
          </div>
        );
    }
}
