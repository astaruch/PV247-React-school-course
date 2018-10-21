import * as React from 'react';
import * as PropTypes from 'prop-types';

import {ChannelList} from './ChannelList';
import {IChannelItem} from './ChannelItem';
import {Login} from './Login';

interface IMessageAppProps {
    message: string;
    messages: any[];
}

interface IMessageAppState {
    logged: boolean;
    nick: string;
}

export class MessageApp extends React.PureComponent<IMessageAppProps, IMessageAppState> {

    static propTypes = {
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
        const channels = this.getChannels();

        if (this.state.logged) {
            return (
                <div className="MessageApp">
                    Message App. Logged in as {this.state.nick}
                    <ChannelList channels={channels}/>
                </div>
            );
        }

        return (
            <Login onLogin={this.onLogin}/>
        );
    }
}
