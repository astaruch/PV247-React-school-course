import * as React from 'react';
import {Button, Form, Grid, Modal} from 'semantic-ui-react';
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
  username: string;
}

type IProps = IProfileStateProps & IProfileDispatchProps & IProfileOwnProps;

export class Profile extends React.PureComponent<IProps, IProfileState> {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.user.customData.username,
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
        username: this.state.username,
      }
    });
    this.props.onClose();
  };

  render(): JSX.Element {
    return (
      <Modal dimmer={'blurring'} open={this.props.open} onClose={this.props.onClose}>
        <Modal.Header>User settings</Modal.Header>
        <Modal.Content>
          <Grid columns={2} relaxed divided>
            <Grid.Column width={11}>
              <Form>
                <Form.Group>
                  <Form.Field
                    value={this.state.username}
                    name={'username'}
                    width={14}
                    label={'Username'}
                    control={'input'}
                    placeholder="Username"
                    onChange={this.onUsernameChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Field
                    disabled
                    value={this.state.email}
                    name={'email'}
                    width={7}
                    label={'E-mail'}
                    control={'input'}
                    placehoder="E-mail"
                    onChange={this.onEmailChange}
                  />
                  <Form.Field
                    value={this.state.password}
                    name={'password'}
                    width={7}
                    label={'Password'}
                    control={'input'}
                    placeholder="Password"
                    onChange={this.onPasswordChange}
                  />
                </Form.Group>

              </Form>
            </Grid.Column>
            <Grid.Column width={5}>
              <Button icon={'add'}/>
            </Grid.Column>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Button color={'black'} onClick={this.props.onClose}>
            Close
          </Button>
          <Button
            positive
            icon={'checkmark'}
            labelPosition={'right'}
            content={'Save'}
            onClick={this.onSave}
          />
        </Modal.Actions>
      </Modal>

    );
  }

}
