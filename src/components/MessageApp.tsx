import * as React from 'react';
import * as PropTypes from 'prop-types';

import {ChannelList} from './ChannelList';
import {IChannelItem} from './ChannelItem';
import {MessageAppHeader} from './MessageAppHeader';
import {ChatWindow} from './ChatWindow';
import {IMessageItem} from './MessageItem';

interface IMessageApp {
    nick: string;
    messages: IMessageItem[];
    channels: IChannelItem[];
}

export class MessageApp extends React.PureComponent<IMessageApp> {
    static propTypes = {
        nick: PropTypes.string.isRequired,
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

    public render(): JSX.Element {
        const channels = this.props.channels;
        const user = this.props.nick;
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
                        <ChannelList channels={channels} selectedChannel={selectedChannel}/>
                    </div>
                    <div className={'col-md-9 col-lg-10'}>
                        <ChatWindow nick={user} messages={messages} selectedChannel={selectedChannel}/>
                    </div>
                </div>
            </div>
        );
    }
}
