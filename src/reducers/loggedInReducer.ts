import {MESSAGE_APP_LOGGING_ACTIONS, MESSAGE_APP_USER_LOGGED_IN, MESSAGE_APP_USER_LOGGING_FAILED} from '../constants/actionTypes';

export function loggedInReducer(prevState = false, action: Action<MESSAGE_APP_LOGGING_ACTIONS>): boolean {
    switch (action.type) {
        case MESSAGE_APP_USER_LOGGED_IN:
            return true;
        case MESSAGE_APP_USER_LOGGING_FAILED:
            return false;
        default:
            return prevState;
    }
}
