import * as React from 'react';
import {Comment, Icon} from 'semantic-ui-react';
import {IMessage} from '../models/IMessage';
import {IUser} from '../models/IUser';

export interface IMessageItemOwnProps {
  readonly id: Uuid;
}

export interface IMessageItemStateProps {
  readonly message: IMessage;
  readonly author: IUser;
}

type IProps = IMessageItemOwnProps & IMessageItemStateProps;

export class MessageItem extends React.PureComponent<IProps> {
  private onUpVote = () => {
    console.log('upvoted!');
  };
  private onDownVote = () => {
    console.log('downvoted');
  };

  render(): JSX.Element {
    return (
      <Comment key={this.props.id}>
        <Comment.Avatar src={this.props.author.customData.pictureUrl}/>
        <Comment.Content>
          <Comment.Author>{this.props.author.customData.username}</Comment.Author>
          <Comment.Metadata>
            <div>{this.props.message.createdAt}</div>
            <Icon onClick={this.onUpVote} link name={'thumbs up'}/>
            <Icon onClick={this.onDownVote} link name={'thumbs down'}/>
          </Comment.Metadata>
          <Comment.Text>
            {this.props.message.value}
          </Comment.Text>
        </Comment.Content>
      </Comment>
    );
  }
}


