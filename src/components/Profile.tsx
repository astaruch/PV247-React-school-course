import * as React from 'react';
import {Button, Form, Modal} from 'semantic-ui-react';
import {IUser} from '../models/IUser';

export interface IProfileOwnProps {
  open: boolean;
  onClose: (() => void);
}

export interface IProfileStateProps {
  user: IUser;
}

export interface IProfileDispatchProps {
  onSave: ((user: IUser) => any);
}

interface IProfileState {
  email: string;
  password: string;
  username?: string;
}

type IProps = IProfileStateProps & IProfileDispatchProps & IProfileOwnProps;

export class Profile extends React.PureComponent<IProps, IProfileState> {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: this.props.user.customData.password,
      email: this.props.user.email
    };
  }

  onUsernameChange = (event) => {
    const username = event.target.value;
    this.setState(() => {
      return {username};
    });
  };

  onEmailChange = (event) => {
    const email = event.target.value;
    this.setState(() => {
      return {email};
    });
  };

  onPasswordChange = (event) => {
    const password = event.target.value;
    this.setState(() => {
      return {password};
    });
  };

  onSave = (event) => {
    event.preventDefault();
    this.props.onSave({
      email: this.state.email,
      customData: {
        ...this.props.user.customData,
        password: this.state.password,
      }
    });
    this.props.onClose();
  };

  render(): JSX.Element {
    return (
      <Modal dimmer={'blurring'} open={this.props.open} onClose={this.props.onClose}>
        <Modal.Header>User settings</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Group>
              <Form.Field
                value={this.state.username}
                name={'name'}
                width={12}
                label={'Username'}
                control={'input'}
                placeholder="Username"
                onChange={this.onUsernameChange}
              />

            </Form.Group>
            <Form.Group>
              <Form.Field
                value={this.state.email}
                name={'email'}
                width={6}
                label={'E-mail'}
                control={'input'}
                placehoder="E-mail"
                onChange={this.onEmailChange}
              />
              <Form.Field
                value={this.state.password}
                name={'password'}
                width={6}
                label={'Password'}
                control={'input'}
                placeholder="Password"
                onChange={this.onPasswordChange}
              />
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color={'black'} onClick={this.props.onClose}>
            Close
          </Button>
        </Modal.Actions>
        <Button
          positive
          icon={'checkmark'}
          labelPosition={'right'}
          content={'Save'}
          onClick={this.onSave}
        />
      </Modal>

    );
  }

}
