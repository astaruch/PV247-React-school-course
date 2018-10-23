import * as React from 'react';
import * as PropTypes from 'prop-types';

import { MessageList} from './MessageList';
import { MessageForm } from './MessageForm';
import {IMessageItem} from './MessageItem';


interface IChat {
    nick: string;
    messages: IMessageItem[];
    selectedChannel: number;
}

export class ChatWindow extends React.PureComponent<IChat> {
    static propTypes = {
        nick: PropTypes.string.isRequired,
        messages: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            channelId: PropTypes.number.isRequired,
            from: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })),
        selectedChannel: PropTypes.number.isRequired
    };

    public render(): JSX.Element {
        const messages = this.props.messages;
        const message = '';
        const nick = this.props.nick;
        return (
            <div className="chat-window border-css">
                <MessageList messages={messages.filter((msg) => msg.channelId === this.props.selectedChannel)}/>
                <MessageForm
                    nick={nick}
                    message={message}
                />
            </div>
        );
    }
}
