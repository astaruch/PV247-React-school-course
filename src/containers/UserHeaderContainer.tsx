import {Dispatch} from 'redux';
import {IUser} from '../models/IUser';
import {connect} from 'react-redux';
import {IMessageAppState} from '../models/IMessageApp';
import {logOutUser, updateUser} from '../actions/userActions';
import {IUserHeaderDispatchProps, IUserHeaderStateProps, UserHeader} from '../components/UserHeader';
import {uploadFile} from '../actions/fileActions';

const mapStateToProps = (state: IMessageAppState): IUserHeaderStateProps => {
  return {
    user: state.users.currentUser!
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IUserHeaderDispatchProps => {
  return {
    onSave: (user: IUser) => dispatch(updateUser(user)),
    onLogout: () => dispatch(logOutUser()),
    onUploadAvatar: (formData: FormData) => dispatch(uploadFile(formData)),
  };
};

export const UserHeaderContainer = connect<IUserHeaderStateProps, IUserHeaderDispatchProps>(mapStateToProps, mapDispatchToProps)(UserHeader);
