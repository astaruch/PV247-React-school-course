import * as Immutable from 'immutable';
import {IMessageItem} from '../models/IMessageItem';
import {MESSAGE_APP_MESSAGES_ACTIONS, MESSAGE_APP_LOADING_FINISHED} from '../constants/actionTypes';
import {combineReducers} from 'redux';

const byId = (prevState = Immutable.Map<Uuid, IMessageItem>(),
              action: Action<MESSAGE_APP_MESSAGES_ACTIONS>): Immutable.Map<Uuid, IMessageItem> => {
    switch (action.type) {
        case MESSAGE_APP_LOADING_FINISHED:
            return Immutable.Map(action.payload.messages.map((message: IMessageItem) => [message.id, message]));
        default:
            return prevState;
    }
};

const allIds = (prevState = Immutable.List<Uuid>(),
                action: Action<MESSAGE_APP_MESSAGES_ACTIONS>): Immutable.List<Uuid> => {
    switch (action.type) {
        case MESSAGE_APP_LOADING_FINISHED:
            return Immutable.List(action.payload.messages.map((message: IMessageItem) => message.id));
        default:
            return prevState;
    }
};

export const messagesReducer = combineReducers({
    allIds,
    byId
});
