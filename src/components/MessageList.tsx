import * as React from 'react';
import * as PropTypes from 'prop-types';
import {IMessageItem, MessageItem} from './MessageItem';


interface IMessageListProps {
    readonly messages: IMessageItem[];
}

export class MessageList extends React.Component<IMessageListProps> {
    static propTypes = {
        messages: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            from: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })),
    };

    render(): JSX.Element {
        return (
            <div className="message-list list-group">
                {this.props.messages && this.props.messages.map(message => (
                    <MessageItem id={message.id} from={message.from} text={message.text}/>
                ))}
            </div>
        );
    }
}
