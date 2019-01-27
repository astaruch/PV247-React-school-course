import {connect} from 'react-redux';
import {IMessageAppState} from '../models/IMessageApp';
import {AuthPage, IAuthPageStateProps} from '../components/AuthPage';

const mapStateToProps = (state: IMessageAppState): IAuthPageStateProps => {
  return {
    authPageError: state.authPageError,
    asyncOperationsCount: state.asyncOperationsCount
  };
};

export const AuthPageContainer = connect<IAuthPageStateProps, void >(mapStateToProps)(AuthPage);
