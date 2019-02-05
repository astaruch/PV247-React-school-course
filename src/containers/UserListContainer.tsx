import {IMessageAppState} from '../models/IMessageApp';
import {connect} from 'react-redux';
import {IUserListDispatchProps, IUserListStateProps, UserList} from '../components/UserList';

const mapStateToProps = (state: IMessageAppState): IUserListStateProps => {
  return {
    userList: state.channels.asMap.get(state.channels.selected)! &&
      state.channels.asMap.get(state.channels.selected)!.customData.usersId,
    allUsers: state.users.asMap
  };
};

export const UserListContainer =
  connect<IUserListStateProps, IUserListDispatchProps>(mapStateToProps)(UserList);
