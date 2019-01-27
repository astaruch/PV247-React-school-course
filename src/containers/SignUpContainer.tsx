import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {ISignUpDispatchProps, SignUp} from '../components/SignUp';
import {registerNewUser} from '../actions/signUpActions';

const mapDispatchToProps = (dispatch: Dispatch): ISignUpDispatchProps => {
  return {
    onSignUp: (email: string, password: string) => dispatch(registerNewUser(email, password))
  };
};

export const SignUpContainer = connect<void, ISignUpDispatchProps>(null, mapDispatchToProps)(SignUp);
