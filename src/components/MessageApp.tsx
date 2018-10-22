import * as React from 'react';
import * as PropTypes from 'prop-types';

import {ChannelList} from './ChannelList';
import {IChannelItem} from './ChannelItem';
import {MessageAppHeader} from './MessageAppHeader';
import {ChatWindow} from './ChatWindow';
import {IMessageItem} from './MessageItem';
import {Login} from './Login';
import {Profile} from './Profile';

interface IMessageApp {
    nick: string;
    selectedChannel: number;
    messages: IMessageItem[];
    channels: IChannelItem[];
}

interface IMessageAppState {
    logged: boolean;
    nick: string;
}

export class MessageApp extends React.PureComponent<IMessageApp, IMessageAppState> {

    static propTypes = {
        nick: PropTypes.string.isRequired,
        selectedChannel: PropTypes.number.isRequired,
        messages: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            from: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })),
        channels: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            numberOfNewMessages: PropTypes.number.isRequired,
        })),
    };

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

    private getChannels(): IChannelItem[] {
        const channel1: IChannelItem = {name: 'General', numberOfNewMessages: 10};
        const channel2: IChannelItem = {name: 'Back office', numberOfNewMessages: 0};
        const channel3: IChannelItem = {name: 'Spam', numberOfNewMessages: 1337};
        return [channel1, channel2, channel3];
    }

    public render(): JSX.Element {
        const channels = this.props.channels;
        const user = this.props.nick;
        const messages = this.props.messages;
        const selectedChannel = this.props.selectedChannel;
        return (
            <div className="message-app border-css">
                <div className={'row'}>
                    <div className={'col-md-12'}>
                        <MessageAppHeader user={user}/>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-md-3 col-lg-2'}>
                        <ChannelList channels={channels} selectedChannel={selectedChannel}/>
                    </div>
                    <div className={'col-md-9 col-lg-10'}>
                        <ChatWindow nick={user} messages={messages} selectedChannel={selectedChannel}/>
                    </div>
                </div>
            </div>
        const channels = this.getChannels();

        if (this.state.logged) {
            return (
                <div className="MessageApp">
                    Message App. Logged in as {this.state.nick}
                    <Profile nick={this.state.nick}/>
                    <ChannelList channels={channels}/>
                </div>
            );
        }

        return (
            <Login onLogin={this.onLogin}/>
        );
    }
}
