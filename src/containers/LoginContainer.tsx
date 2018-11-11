import {Dispatch} from 'redux';
import {logIn} from '../actions/loginActions';
import {connect} from 'react-redux';
import {ILoginDispatchProps, Login} from '../components/Login';

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onLogin: (username: string, password: string) => dispatch(logIn(username, password)),
    };
};
export const LoginContainer =
    connect<void, ILoginDispatchProps>(null, mapDispatchToProps)(Login);
