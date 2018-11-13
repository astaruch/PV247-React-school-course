import {IMessageAppState} from '../models/IMessageApp';
import {IMessageListStateProps, MessageList} from '../components/MessageList';
import {connect} from 'react-redux';
// import {_messages} from '../common/initialData';

const mapStateToProps = (state: IMessageAppState): IMessageListStateProps => {
    console.log('message list container');
    console.log(state.messages.allIds);
    return {
        // messagesIds: _messages.filter((msg) => msg.channelId === state.selectedChannel).map((msg) => msg.id)
        messagesIds: state.messages.allIds
    };
};

export const MessageListContainer = connect<IMessageListStateProps, void>(mapStateToProps)(MessageList);
