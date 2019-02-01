import {IMessageAppState} from '../models/IMessageApp';
import {IMessageListStateProps, MessageList} from '../components/MessageList';
import {connect} from 'react-redux';

const mapStateToProps = (state: IMessageAppState): IMessageListStateProps => {
    return {
        messagesIds: state.messages.byId.filter(msg => msg.channelId === state.channels.selected).map(msg => msg.id).toList()
    };
};

export const MessageListContainer = connect<IMessageListStateProps, void>(mapStateToProps)(MessageList);
