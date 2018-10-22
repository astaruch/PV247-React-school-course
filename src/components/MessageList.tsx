import * as React from 'react';
import * as PropTypes from 'prop-types';
import {IMessage, Message} from './Message';


interface IMessageListProps {
    readonly messages: IMessage[];
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
            <div className="message-list">
                {this.props.messages && this.props.messages.map(message => (
                    <Message id={message.id} from={message.from} text={message.text}/>
                ))}
            </div>
        );
    }
}
