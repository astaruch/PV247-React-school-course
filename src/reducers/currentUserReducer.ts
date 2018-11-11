import {MESSAGE_APP_LOGGING_ACTIONS, MESSAGE_APP_USER_LOGGED_IN, MESSAGE_APP_USER_LOGGING_FAILED} from '../constants/actionTypes';
import {IUser} from '../models/IUser';

export function currentUserReducer(prevState: IUser | null = null,
                                   action: Action<MESSAGE_APP_LOGGING_ACTIONS>): IUser | null {
    switch (action.type) {
        case MESSAGE_APP_USER_LOGGED_IN:
            return action.payload.currentUser;
        case MESSAGE_APP_USER_LOGGING_FAILED:
            return null;
        default:
            return prevState;
    }
}
