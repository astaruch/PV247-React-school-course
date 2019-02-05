import * as React from 'react';
import * as Immutable from 'immutable';
import {Header} from 'semantic-ui-react';

export interface IUserListStateProps {
  userList: Immutable.List<Uuid>;
}

export interface IUserListDispatchProps {
}

type IProps = IUserListStateProps & IUserListDispatchProps;

export class UserList extends React.PureComponent<IProps> {
  render() {
    console.log('user list', this.props.userList);
    return (
      <div>
        <Header as={'h3'}>User List</Header>
      </div>
    );
  }
}
