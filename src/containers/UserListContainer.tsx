import {IMessageAppState} from '../models/IMessageApp';
import {connect} from 'react-redux';
import {IUserListDispatchProps, IUserListStateProps, UserList} from '../components/UserList';
//import {Dispatch} from 'redux';

const mapStateToProps = (state: IMessageAppState): IUserListStateProps => {
  return {
    userList: state.channels.asMap.get(state.channels.selected)! &&
      state.channels.asMap.get(state.channels.selected)!.customData.usersId
  };
};

const mapDispatchToProps = (/*dispatch: Dispatch*/): IUserListDispatchProps => {
  return {

  };
};
export const UserListContainer =
  connect<IUserListStateProps, IUserListDispatchProps>(mapStateToProps, mapDispatchToProps)(UserList);
