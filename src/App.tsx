import * as React from 'react';
import {MessageApp} from './components/MessageApp';
import {IChannelItem} from './components/ChannelItem';
import {IMessageItem} from './components/MessageItem';
import {Login} from './components/Login';

interface IAppState {
    logged: boolean;
    nick: string;
}

export class App extends React.PureComponent<{}, IAppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            logged: false,
            nick: ''
        };
    }

    onLogin = (loggedNick: string) => {
        this.setState(() => ({
            logged: true,
            nick: loggedNick
        }));
    };

    private getMessages(): IMessageItem[] {
        const message1: IMessageItem = { id: 0, channelId: 0, from: 'User 2', text: 'Ahoj' };
        const message2: IMessageItem = { id: 1, channelId: 0, from: 'User 3', text: 'Nazdar' };
        const message3: IMessageItem = { id: 2, channelId: 1, from: 'User 2', text: 'Hello' };
        const message4: IMessageItem = { id: 3, channelId: 1, from: 'User 3', text: 'Hey' };

        return [message1, message2, message3, message4];
    }

    private getChannels(): IChannelItem[] {
        const channel1: IChannelItem = { id: 0, name: 'General', numberOfNewMessages: 10};
        const channel2: IChannelItem = { id: 1, name: 'Back office', numberOfNewMessages: 0};
        const channel3: IChannelItem = { id: 2, name: 'Spam', numberOfNewMessages: 1337};
        return [channel1, channel2, channel3];
    }


    render(): JSX.Element {
        const messages = this.getMessages();
        const channels = this.getChannels();

        if (!this.state.logged) {
            return (
                <div className={'container'}>
                    <Login onLogin={this.onLogin}/>
                </div>
            );
        } else {
            return (
                <div className="container-fluid body">
                    <MessageApp nick={this.state.nick} messages={messages} channels={channels} />
                </div>
            );
        }
    }
}
