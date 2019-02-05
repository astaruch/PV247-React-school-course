import {IMessageAppState} from '../models/IMessageApp';
import {IMessageListStateProps, MessageList} from '../components/MessageList';
import {connect} from 'react-redux';
import {getMessagesForChannel} from '../selectors/messagesSelector';

const mapStateToProps = (state: IMessageAppState): IMessageListStateProps => {
  return {
    messagesIds: getMessagesForChannel(state),
    asyncChangingChannels: state.spinners.asyncChangingChannels
  };
};

export const MessageListContainer = connect<IMessageListStateProps, void>(mapStateToProps)(MessageList);
