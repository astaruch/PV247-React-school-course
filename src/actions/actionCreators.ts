import {MESSAGE_APP_LOADING_FINISHED} from '../constants/actionTypes';
import {_channels, _messages, _users} from '../common/initialData';
import {Dispatch} from 'redux';

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
