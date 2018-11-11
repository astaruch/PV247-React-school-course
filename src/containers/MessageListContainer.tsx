import {IMessageAppState} from '../models/IMessageApp';
import {IMessageListStateProps, MessageList} from '../components/MessageList';
import {connect} from 'react-redux';

const mapStateToProps = (state: IMessageAppState): IMessageListStateProps => {
    return {
        messagesIds: state.messages.allIds
    };
};
export const MessageListContainer = connect<IMessageListStateProps, void>(mapStateToProps)(MessageList);
