import {IMessageAppState} from '../models/IMessageApp';
import {IMessageListStateProps, MessageList} from '../components/MessageList';
import {connect} from 'react-redux';

const mapStateToProps = (state: IMessageAppState): IMessageListStateProps => {
  return {
    // TODO: messages currently only for 1st channel
//    messagesIds: state.messages.asMap.filter(
//      msg => msg.channelId === state.channels.selected
//    ).map(
//      msg => msg.id
//    ).toList()
    messagesIds: state.messages.asList
  };
};

export const MessageListContainer = connect<IMessageListStateProps, void>(mapStateToProps)(MessageList);
