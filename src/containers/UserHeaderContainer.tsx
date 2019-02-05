import {Dispatch} from 'redux';
import {IUser} from '../models/IUser';
import {connect} from 'react-redux';
import {IMessageAppState} from '../models/IMessageApp';
import {updateUser} from '../actions/userActions';
import {IUserHeaderDispatchProps, IUserHeaderStateProps, UserHeader} from '../components/UserHeader';

const mapStateToProps = (state: IMessageAppState): IUserHeaderStateProps => {
  return {
    user: state.users.currentUser!
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IUserHeaderDispatchProps => {
  return {
    onSave: (user: IUser) => dispatch(updateUser(user))
  };
};

export const UserHeaderContainer = connect<IUserHeaderStateProps, IUserHeaderDispatchProps>(mapStateToProps, mapDispatchToProps)(UserHeader);
