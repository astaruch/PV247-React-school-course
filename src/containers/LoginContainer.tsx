import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {ILoginDispatchProps, Login} from '../components/Login';
import {IUser} from '../models/IUser';
import {_users} from '../common/initialData';
import {loginSuccessful} from '../actions/actionCreators';

function getUserByUsername(username: string): IUser | undefined {
    return _users.filter((user) => user.username === username).get(0);
}

const logInAttempt = (username: string, password: string): any => {
    return async (dispatch: Dispatch): Promise<void> => {
        console.log('Logging user: ', username, 'Password: ', password);
        const loggedUser = await getUserByUsername(username);

        if (loggedUser) {
            dispatch(loginSuccessful(loggedUser));
        }
    };
};


const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onLogin: (username: string, password: string) => dispatch(logInAttempt(username, password))
    };
};
export const LoginContainer =
    connect<void, ILoginDispatchProps>(null, mapDispatchToProps)(Login);
