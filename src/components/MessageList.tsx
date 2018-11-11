import * as React from 'react';
import * as PropTypes from 'prop-types';
import {MessageItem} from './MessageItem';
import {List, Comment} from 'semantic-ui-react';
import {IMessageItem} from '../models/IMessageItem';


interface IMessageList {
    readonly messages: IMessageItem[];
}

export class MessageList extends React.Component<IMessageList> {
    static propTypes = {
        messages: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            channelId: PropTypes.number.isRequired,
            from: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })),
    };

    render(): JSX.Element {
        return (
            <List>
                <Comment.Group>
                    {this.props.messages && this.props.messages.map((message, index) => (
                        <MessageItem id={message.id} channelId={message.channelId} from={message.from} text={message.text} key={index}/>
                    ))}
                </Comment.Group>
            </List>
        );
    }
}
