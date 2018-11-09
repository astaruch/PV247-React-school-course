import {MESSAGE_APP_LOGIN_USER, MESSAGE_APP_SELECT_CHANNEL} from '../constants/actionTypes';

export const loginUser = (username: string): Action => ({
    type: MESSAGE_APP_LOGIN_USER,
    payload: {
        username,
    }
});

export const selectChannel = (number: number): Action => ({
    type: MESSAGE_APP_SELECT_CHANNEL,
    payload: {
        number,
    }
});
