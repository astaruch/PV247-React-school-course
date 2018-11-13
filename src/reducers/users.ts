import * as Immutable from 'immutable';
import {IUser} from '../models/IUser';
import {MESSAGE_APP_DATA_LOADED} from '../constants/actionTypes';
import {combineReducers} from 'redux';

const byId = (prevState = Immutable.Map<Uuid, IUser>(), action: Action): Immutable.Map<Uuid, IUser> => {
    switch (action.type) {
        case MESSAGE_APP_DATA_LOADED:
            return Immutable.Map(action.payload.users.map((user: IUser) => [user.id, user]));
        default:
            return prevState;
    }
};

const allIds = (prevState = Immutable.List<Uuid>(), action: Action): Immutable.List<Uuid> => {
    switch (action.type) {
        case MESSAGE_APP_DATA_LOADED:
            return Immutable.List(action.payload.users.map((user: IUser) => user.id));
        default:
            return prevState;
    }
};

export const users = combineReducers({
    allIds,
    byId
});
