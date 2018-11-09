import {MESSAGE_APP_LOGIN_USER} from '../constants/actionTypes';

export const loginUser = (username: string): Action => ({
    type: MESSAGE_APP_LOGIN_USER,
    payload: {
        username,
    }
});
