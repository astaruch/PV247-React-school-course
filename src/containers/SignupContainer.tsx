import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {ILoginDispatchProps, ILoginStateProps, Login} from '../components/Login';
import {tryToLogin} from '../actions/loginActions';
import {IMessageAppState} from '../models/IMessageApp';

const mapStateToProps = (state: IMessageAppState): ILoginStateProps => {
  return {
    authPageError: state.authPageError
  };
};
const mapDispatchToProps = (dispatch: Dispatch): ILoginDispatchProps => {
  return {
    onLogin: (username: string, password: string) => dispatch(tryToLogin(username, password))
  };
};
export const LoginContainer = connect<void, ILoginDispatchProps>(mapStateToProps, mapDispatchToProps)(Login);
