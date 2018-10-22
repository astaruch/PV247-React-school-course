import * as React from 'react';
import * as PropTypes from 'prop-types';

import { MessageList} from './MessageList';
import { MessageForm } from './MessageForm';
import { IChannelItem } from './ChannelItem';
import {IMessageItem} from './MessageItem';


interface IChat {
    nick: string;
    messages: IMessageItem[];
    selectedChannel: IChannelItem;
}

export class ChatWindow extends React.PureComponent<IChat> {
    static propTypes = {
        nick: PropTypes.string.isRequired,
        messages: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            from: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })),
        selectedChannel: PropTypes.shape({
            name: PropTypes.string.isRequired,
            numberOfNewMessages: PropTypes.number.isRequired,
        })
    };

    public render(): JSX.Element {
        const messages = this.props.messages;
        const message = '';
        const nick = this.props.nick;
        return (
            <div className="chat-window border-css">
                <MessageList messages={messages} />
                <MessageForm
                    nick={nick}
                    message={message}
                />
            </div>
        );
    }
}
