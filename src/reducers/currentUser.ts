import {MESSAGE_APP_LOGIN_SUCCESSFUL, MESSAGE_APP_PROFILE_UPDATED} from '../constants/actionTypes';
import {IUser} from '../models/IUser';

export function currentUser(prevState: IUser | null = null, action: Action): IUser | null {
    switch (action.type) {
        case MESSAGE_APP_PROFILE_UPDATED:
        case MESSAGE_APP_LOGIN_SUCCESSFUL:
            return action.payload.user;
        default:
            return prevState;
    }
}
