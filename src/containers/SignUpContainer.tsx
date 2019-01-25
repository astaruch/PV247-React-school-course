import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {IMessageAppState} from '../models/IMessageApp';
import {ISignUpDispatchProps, ISignUpStateProps, SignUp} from '../components/SignUp';
import {registerNewUser} from '../actions/signUpActions';

const mapStateToProps = (state: IMessageAppState): ISignUpStateProps => {
  return {
    authPageError: state.authPageError
  };
};
const mapDispatchToProps = (dispatch: Dispatch): ISignUpDispatchProps => {
  return {
    onSignUp: (email: string, password: string) => dispatch(registerNewUser(email, password))
  };
};
export const SignUpContainer = connect<void, ISignUpDispatchProps>(mapStateToProps, mapDispatchToProps)(SignUp);
