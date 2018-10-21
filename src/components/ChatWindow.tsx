import * as React from 'react';
import * as PropTypes from 'prop-types';

import { MessageList } from './MessageList';
import { MessageForm } from './MessageForm';
import { IChannelItem } from './ChannelItem';

interface IMessage {
    readonly id: string;
    readonly from: string;
    readonly text: string;
}

interface IChat {
    nick: string;
    message: string;
    messages: IMessage[];
    selectedChannel: IChannelItem;
}

export class ChatWindow extends React.PureComponent<IChat> {
    static propTypes = {
        nick: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
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
        const nick = this.props.nick;
        const message = this.props.message;
        return (
            <div className="ChatWindow">
                <MessageList messages={messages} />
                <MessageForm
                    nick={nick}
                    message={message}
                />
            </div>
        );
    }
}
