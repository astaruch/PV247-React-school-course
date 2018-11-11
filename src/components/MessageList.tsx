import * as React from 'react';
import * as Immutable from 'immutable';
import {Comment, List} from 'semantic-ui-react';
import {MessageItemContainer} from '../containers/MessageItemContainer';


export interface IMessageListStateProps {
    readonly messagesIds: Immutable.List<Uuid>;
}

export class MessageList extends React.Component<IMessageListStateProps> {
    render(): JSX.Element {
        return (
            <List>
                <Comment.Group>
                    {this.props.messagesIds && this.props.messagesIds.map((messageId) => (
                        <MessageItemContainer id={messageId} key={messageId}/>
                    ))}
                </Comment.Group>
            </List>
        );
    }
}
