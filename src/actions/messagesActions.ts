import {Dispatch} from 'redux';
import {_messages} from '../common/initialData';
import {MESSAGE_APP_MESSAGES_LOADING_FINISHED, MESSAGE_APP_MESSAGES_LOADING_STARTED} from '../constants/actionTypes';
import {IMessageItem} from '../models/IMessageItem';
import * as Immutable from 'immutable';


const loadMessagesStarted = (): Action<MESSAGE_APP_MESSAGES_LOADING_STARTED> => ({
    type: MESSAGE_APP_MESSAGES_LOADING_STARTED
});

const loadMessagesFinished = (messages: Immutable.List<IMessageItem>): Action<MESSAGE_APP_MESSAGES_LOADING_FINISHED> => ({
    type: MESSAGE_APP_MESSAGES_LOADING_FINISHED,
    payload: {
        messages
    }
});

export const loadMessages = (channelId: Uuid): any => {
    return async (dispatch: Dispatch): Promise<void> => {
        dispatch(loadMessagesStarted());
        const messages = _messages.filter((msg) => msg.channelId === channelId);
        console.log(channelId, messages);
        dispatch(loadMessagesFinished(messages));
    };
};

