import * as React from 'react';
import * as PropTypes from 'prop-types';

interface IMessage {
    readonly id: string;
    readonly from: string;
    readonly text: string;
}

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
                    <div className="MessageList__message-wrapper" key={message.id}>
                        <div className="MessageList__message-author">
                            {message.from}
                        </div>
                        <div className="MessageList__message-text">
                            {message.text}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
