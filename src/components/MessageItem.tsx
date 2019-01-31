import * as React from 'react';
import {Comment} from 'semantic-ui-react';
import {IMessageItem} from '../models/IMessageItem';
import {IUser} from '../models/IUser';

export interface IMessageItemOwnProps {
    readonly id: Uuid;
}

export interface IMessageItemStateProps {
    readonly message: IMessageItem;
    readonly author: IUser;
}

type IProps = IMessageItemOwnProps & IMessageItemStateProps;

export class MessageItem extends React.PureComponent<IProps> {
    render(): JSX.Element {
        return (
            <Comment key={this.props.id}>
                <Comment.Avatar src={this.props.author.pictureUrl}/>
                <Comment.Content>
                    <Comment.Author>{this.props.author.username}</Comment.Author>
                    <Comment.Metadata>
                        <div>{this.props.message.timestamp}</div>
                    </Comment.Metadata>
                    <Comment.Text>
                        {this.props.message.text}
                    </Comment.Text>
                </Comment.Content>
            </Comment>
        );
    }
}
