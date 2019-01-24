import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {ILoginDispatchProps, Login} from '../components/Login';
import {tryToLogin} from '../actions/loginActions';


const mapDispatchToProps = (dispatch: Dispatch): ILoginDispatchProps => {
    return {
        onLogin: (username: string, password: string) => dispatch(tryToLogin(username, password))
    };
};
export const LoginContainer = connect<void, ILoginDispatchProps>(null, mapDispatchToProps)(Login);
