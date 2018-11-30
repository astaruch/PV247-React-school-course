import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {ILoginDispatchProps, Login} from '../components/Login';
import {IUser} from '../models/IUser';
// import {_users} from '../common/initialData';
// import {loginSuccessful} from '../actions/actionCreators';
import * as authService from '../services/authService';
import {MESSAGE_APP_REGISTER_SUCCESS, MESSAGE_APP_REGISTERING_FAILED, USER_ALREADY_REGISTERED} from '../constants/actionTypes';

// function getUserByUsername(username: string): IUser | undefined {
//     return _users.filter((user) => user.username === username).get(0);
// }

// const logInAttempt = (username: string, password: string): any => {
//     return async (dispatch: Dispatch): Promise<void> => {
//         console.log('Logging user: ', username, 'Password: ', password);
//         const loggedUser = await getUserByUsername(username);
//
//         if (loggedUser) {
//             dispatch(loginSuccessful(loggedUser));
//         }
//     };
// };

const registrationFailed = (response: USER_ALREADY_REGISTERED): Action => ({
    type: MESSAGE_APP_REGISTERING_FAILED,
    payload: {
        response,
    }
});

const registrationSuccess = (user: IUser): Action => ({
    type: MESSAGE_APP_REGISTER_SUCCESS,
    payload: {
        user,
    }
});

export const registerUser = (email: string, password: string): any => {
    return async (dispatch: Dispatch): Promise<void> => {
        console.log(`Registering user: ${email}| password: ${password}`);
        const result = await authService.registerUser(email, password);

        if (typeof result === 'string') {
            console.log('User is already registered.');
            dispatch(registrationFailed(result));
        } else {
            console.log('Registered a new user');
            dispatch(registrationSuccess(result));
        }
    };
};


const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onLogin: (username: string, password: string) => dispatch(registerUser(username, password))
    };
};
export const LoginContainer =
    connect<void, ILoginDispatchProps>(null, mapDispatchToProps)(Login);
