import * as React from 'react';
import * as PropTypes from 'prop-types';

import {ChannelList} from './ChannelList';
import {IChannelItem} from './ChannelItem';
import {MessageAppHeader} from './MessageAppHeader';
import {ChatWindow} from './ChatWindow';


interface IMessage {
    readonly id: string;
    readonly from: string;
    readonly text: string;
}

interface IMessageApp {
    nick: string;
    message: string;
    messages: IMessage[];
}

export class MessageApp extends React.PureComponent<IMessageApp> {
    static propTypes = {
        channels: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            numberOfNewMessages: PropTypes.number.isRequired,
        })),
    };

    private getChannels(): IChannelItem[] {
        const channel1: IChannelItem = { name: 'General', numberOfNewMessages: 10 };
        const channel2: IChannelItem = { name: 'Back office', numberOfNewMessages: 0};
        const channel3: IChannelItem = { name: 'Spam', numberOfNewMessages: 1337 };
        return [channel1, channel2, channel3];
    }

    public render(): JSX.Element {
        const channels = this.getChannels();
        const user = this.props.nick;
        const message = this.props.message;
        const messages = this.props.messages;
        const selectedChannel = channels[0];
        return (
            <div className="message-app border-css">
                <div className={'row'}>
                    <div className={'col-md-12'}>
                        <MessageAppHeader user={user}/>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-md-3 col-lg-2'}>
                        <ChannelList channels={channels}/>
                    </div>
                    <div className={'col-md-9 col-lg-10'}>
                        <ChatWindow nick={user} message={message} messages={messages} selectedChannel={selectedChannel}/>
                    </div>
                </div>
            </div>
        );
    }
}
