import {IMessageAppState} from '../models/IMessageApp';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {IMessageFormDispatchProps, IMessageFormStateProps, MessageForm} from '../components/MessageForm';
import {messageSubmitted} from '../actions/actionCreators';
import {IMessageItem} from '../models/IMessageItem';
import * as uuid from 'uuid';

const submitMessage = (channelId: Uuid, userId: Uuid, text: string): any => {
    return async (dispatch: Dispatch): Promise<void> => {
        const message: IMessageItem = {
            id: uuid(),
            channelId,
            from: userId,
            text,
            timestamp: Date.now()
        };

        dispatch(messageSubmitted(message));
    };
};

const mapStateToProps = (state: IMessageAppState): IMessageFormStateProps => {
    return {
        channelId: state.selectedChannel!,
        userId: state.currentUser!.id
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IMessageFormDispatchProps => {
    return {
        onMessageSubmit: (channelId: Uuid, userId: Uuid, text: string) => dispatch(submitMessage(channelId, userId, text))
    };
};
export const MessageFormContainer = connect<IMessageFormStateProps, IMessageFormDispatchProps>(mapStateToProps, mapDispatchToProps)(MessageForm);
