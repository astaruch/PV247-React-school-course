import {IMessageAppState} from '../models/IMessageApp';
import {
  IMessageItemDispatchProps,
  IMessageItemOwnProps,
  IMessageItemStateProps,
  MessageItem
} from '../components/MessageItem';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {messageDownVote, messageUpVote} from '../actions/messageActions';
import {IMessage} from '../models/IMessage';

const mapStateToProps = (state: IMessageAppState, ownProps: IMessageItemOwnProps): IMessageItemStateProps => {
  const message = state.messages.asMap.get(ownProps.id)!;
  return {
    message,
    author: state.users.asMap.get(message.customData.authorId)!,
    likes: message.customData.likes,
    dislikes: message.customData.dislikes,
    currentUserId: state.users.currentUser.customData.id,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IMessageItemDispatchProps => {
  return {
    onUpVote: (message: IMessage, userId: Uuid) => dispatch(messageUpVote(message, userId)),
    onDownVote: (message: IMessage, userId: Uuid) => dispatch(messageDownVote(message, userId)),


  };
};

export const MessageItemContainer =
  connect<IMessageItemStateProps, IMessageItemDispatchProps>(mapStateToProps, mapDispatchToProps)(MessageItem);
