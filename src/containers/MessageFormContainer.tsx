import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {IMessageAppState} from '../models/IMessageApp';
import {IMessageFormDispatchProps, IMessageFormStateProps, MessageForm} from '../components/MessageForm';
import {sendMessage} from '../actions/messageActions';

const mapStateToProps = (state: IMessageAppState): IMessageFormStateProps => {
  return {
    channelId: state.channels.selected!,
    userId: state.users.currentUser!.customData.id,
    asyncSendingMessage: state.spinners.asyncSendingMessage,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IMessageFormDispatchProps => {
  return {
    onMessageSubmit: (value: string,
                      channelId: Uuid,
                      userId: Uuid) => dispatch(sendMessage(value, channelId, userId))
  };
};
export const MessageFormContainer = connect<IMessageFormStateProps, IMessageFormDispatchProps>(mapStateToProps, mapDispatchToProps)(MessageForm);
