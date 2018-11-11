import * as Immutable from 'immutable';
import {IUser} from '../models/IUser';
import {MESSAGE_APP_USERS_ACTIONS, MESSAGE_APP_LOADING_FINISHED} from '../constants/actionTypes';
import {combineReducers} from 'redux';

const byId = (prevState = Immutable.Map<Uuid, IUser>(),
              action: Action<MESSAGE_APP_USERS_ACTIONS>): Immutable.Map<Uuid, IUser> => {
    switch (action.type) {
        case MESSAGE_APP_LOADING_FINISHED:
            return Immutable.Map(action.payload.users.map((user: IUser) => [user.id, user]));
        default:
            return prevState;
    }
};

const allIds = (prevState = Immutable.List<Uuid>(),
                action: Action<MESSAGE_APP_USERS_ACTIONS>): Immutable.List<Uuid> => {
    switch (action.type) {
        case MESSAGE_APP_LOADING_FINISHED:
            return Immutable.List(action.payload.users.map((user: IUser) => user.id));
        default:
            return prevState;
    }
};

export const usersReducer = combineReducers({
    allIds,
    byId
});
