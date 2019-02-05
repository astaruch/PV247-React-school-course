import * as React from 'react';
import * as Immutable from 'immutable';

import {Comment, Icon} from 'semantic-ui-react';
import {IMessage} from '../models/IMessage';
import {IUser} from '../models/IUser';
import {SemanticCOLORS} from 'semantic-ui-react/dist/commonjs/generic';

export interface IMessageItemOwnProps {
  readonly id: Uuid;
}

export interface IMessageItemStateProps {
  readonly message: IMessage;
  readonly author: IUser;
  readonly likes: Immutable.Set<Uuid>;
  readonly dislikes: Immutable.Set<Uuid>;
  readonly currentUserId: Uuid;
}

export interface IMessageItemDispatchProps {
  onUpVote: ((message: IMessage, userId: Uuid) => void);
  onDownVote: ((message: IMessage, userId: Uuid) => void);
}

type IProps = IMessageItemOwnProps & IMessageItemStateProps & IMessageItemDispatchProps;

export class MessageItem extends React.PureComponent<IProps> {

  private onUpVote = () => {
    this.props.onUpVote(this.props.message, this.props.currentUserId);
  };
  private onDownVote = () => {
    this.props.onDownVote(this.props.message, this.props.currentUserId);
  };

  private timestamp = () => {
    const today = new Date();
    const todayISO = today.toISOString();
    const todayArray = todayISO.split(/[T.]/);
    const timestampArray = this.props.message.createdAt.split(/[T.]/);
    return todayArray[0] !== timestampArray[0] ? `${timestampArray[0]} ${timestampArray[1]}` : timestampArray[1];
  };

  render(): JSX.Element {
    const upVoteColor = Immutable.Set<Uuid>(this.props.likes).contains(this.props.currentUserId) ? 'blue' : 'grey' as SemanticCOLORS;
    const downVoteColor = Immutable.Set<Uuid>(this.props.dislikes).contains(this.props.currentUserId) ? 'red' : 'grey' as SemanticCOLORS;
    const likesCount = Immutable.Set<Uuid>(this.props.likes).size;
    const dislikesCount = Immutable.Set<Uuid>(this.props.dislikes).size;
    console.log(likesCount);
    console.log(dislikesCount);
    return (
      <div>
        <Comment key={this.props.id}>
          <Comment.Avatar src={this.props.author.customData.pictureUrl}/>
          <Comment.Content>
            <Comment.Author as={'span'}>{this.props.author.customData.username}</Comment.Author>
            <Comment.Metadata>
              <div>{this.timestamp()}</div>
              <div>
                <Icon size={'large'} onClick={this.onUpVote} link name={'thumbs up'} color={upVoteColor}/>
                {likesCount > 0 &&
                <span className="message-vote-badge">{likesCount}</span>
                }
              </div>
              <div>
                <Icon size={'large'} onClick={this.onDownVote} link name={'thumbs down'} color={downVoteColor}/>
                {dislikesCount > 0 &&
                <span className="message-vote-badge">{dislikesCount}</span>
                }
              </div>

            </Comment.Metadata>
            <Comment.Text>
              {this.props.message.value}
            </Comment.Text>
          </Comment.Content>
        </Comment>
      </div>
    );
  }
}


