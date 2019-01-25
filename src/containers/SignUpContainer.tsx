import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {tryToLogin} from '../actions/loginActions';
import {IMessageAppState} from '../models/IMessageApp';
import {ISignUpDispatchProps, ISignUpStateProps, SignUp} from '../components/SignUp';

const mapStateToProps = (state: IMessageAppState): ISignUpStateProps => {
  return {
    authPageError: state.authPageError
  };
};
const mapDispatchToProps = (dispatch: Dispatch): ISignUpDispatchProps => {
  return {
    onLogin: (username: string, password: string) => dispatch(tryToLogin(username, password))
  };
};
export const SignUpContainer = connect<void, ISignUpDispatchProps>(mapStateToProps, mapDispatchToProps)(SignUp);
