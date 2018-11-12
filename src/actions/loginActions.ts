import {Dispatch} from 'redux';
import {MESSAGE_APP_USER_LOGGED_IN, MESSAGE_APP_USER_LOGGING_FAILED} from '../constants/actionTypes';
import {IUser} from '../models/IUser';
import {_users} from '../common/initialData';


const loggingSuccess = (loggedUser: IUser): Action<MESSAGE_APP_USER_LOGGED_IN> => ({
    type: MESSAGE_APP_USER_LOGGED_IN,
    payload: {
        loggedUser,
    },
});

const loggingFailed = (): Action<MESSAGE_APP_USER_LOGGING_FAILED> => ({
    type: MESSAGE_APP_USER_LOGGING_FAILED
});

function getUserByUsername(username: string): IUser | undefined {
    return _users.filter((user) => user.username === username).get(0);
}

export const logIn = (username: string, password: string): any => {
    return async (dispatch: Dispatch): Promise<void> => {
        console.log('Logging user: ', username, 'Password: ', password);
        const loggedUser = await getUserByUsername(username);

        if (loggedUser) {
            dispatch(loggingSuccess(loggedUser));
        } else {
            dispatch(loggingFailed());
        }
    };
};
