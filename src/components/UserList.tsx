import * as React from 'react';
import * as Immutable from 'immutable';
import {Header} from 'semantic-ui-react';
import {IUser} from '../models/IUser';

export interface IUserListStateProps {
  userList: Immutable.List<Uuid>;
  allUsers: Immutable.Map<Uuid, IUser>;
}

export interface IUserListDispatchProps {
}

type IProps = IUserListStateProps & IUserListDispatchProps;

export class UserList extends React.PureComponent<IProps> {
  render() {
    const userIds = [...new Set(this.props.userList)];
    return (
      <div className="user-list-items">
        <Header as={'h3'}>User List</Header>
        {userIds.map((userId) => (
          <span className="user-list-item" key={userId}>{
            this.props.allUsers.get(userId)!.customData.username || this.props.allUsers.get(userId)!.email
          }</span>
        ))}
      </div>
    );
  }
}
