import * as Immutable from 'immutable';
import {IMessageItem} from '../models/IMessageItem';
import {MESSAGE_APP_DATA_LOADED} from '../constants/actionTypes';
import {combineReducers} from 'redux';

const byId = (prevState = Immutable.Map<Uuid, IMessageItem>(), action: Action): Immutable.Map<Uuid, IMessageItem> => {
    switch (action.type) {
        case MESSAGE_APP_DATA_LOADED:
            return Immutable.Map(action.payload.messages.map((message: IMessageItem) => [message.id, message]));
        default:
            return prevState;
    }
};

const allIds = (prevState = Immutable.List<Uuid>(), action: Action): Immutable.List<Uuid> => {
    switch (action.type) {
        case MESSAGE_APP_DATA_LOADED:
            return Immutable.List(action.payload.messages.map((message: IMessageItem) => message.id));
        default:
            return prevState;
    }
};

export const messages = combineReducers({
    allIds,
    byId
});
