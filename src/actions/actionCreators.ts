import {
    MESSAGE_APP_LOADING_FINISHED,
    MESSAGE_APP_LOGIN_USER,
    MESSAGE_APP_SELECT_CHANNEL
} from '../constants/actionTypes';
import {_channels, _messages, _users} from "../initialData";
import {Dispatch} from "redux";

export const loginUser = (username: string): Action<string> => ({
    type: MESSAGE_APP_LOGIN_USER,
    payload: {
        username,
    }
});

export const selectChannel = (number: number): Action<string> => ({
    type: MESSAGE_APP_SELECT_CHANNEL,
    payload: {
        number,
    }
});

const initialData = (): Action<MESSAGE_APP_LOADING_FINISHED> => ({
    type: MESSAGE_APP_LOADING_FINISHED,
    payload: {
        messages: _messages,
        channels: _channels,
        users: _users,
        logged: false,
        currentUser: null,
        selectedChannel: null,
    }
});

export const loadInitialData = (): any => {
    console.log('Loading intial data...');
    return async (dispatch: Dispatch): Promise<void> => {
        dispatch(initialData());
    };
};
