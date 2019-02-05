import * as React from 'react';
import {Button, Form, Grid, Icon, Input, Modal} from 'semantic-ui-react';
import {IUser} from '../models/IUser';

export interface IUserHeaderStateProps {
  user: IUser;
}

export interface IUserHeaderDispatchProps {
  onSave: ((user: IUser) => any);
}

interface IUserState {
  email: string;
  password: string;
  username: string;
  modalOpened: boolean;
}

type IProps = IUserHeaderStateProps & IUserHeaderDispatchProps;

export class UserHeader extends React.PureComponent<IProps, IUserState> {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.user.customData.username,
      password: this.props.user.customData.password,
      email: this.props.user.email,
      modalOpened: false
    };

    this.onLogOut = this.onLogOut.bind(this);
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
    this.onCloseModal();
  };

  onShowModal = () => {
    this.setState(prevState => ({
      ...prevState,
      modalOpened: true
    }));
  };

  onCloseModal = () => {
    this.setState(prevState => ({
      ...prevState,
      modalOpened: false
    }));
  };

  onLogOut = () => {
    // TODO
    console.log('Logging out.. TODO');
  };

  render(): JSX.Element {
    return (
      <div className="user-header-icon">
        <div className="user-header-icon">
          <Icon link
                size={'large'}
                circular
                onClick={this.onShowModal}
                name={'user'}/>
        </div>
        <div className="user-header-icon">
          <Icon link
                size={'large'}
                circular
                onClick={this.onLogOut}
                name={'log out'}/>
        </div>

        <Modal dimmer={'blurring'} open={this.state.modalOpened} onClose={this.onCloseModal}>
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
                {/*<input type="file" accept="image/*" onChange={this.onFileChange} id="file" ref={this.fileInputRef} style={{display: 'none'}}/>*/}
                <Input type={'file'}/>
              </Grid.Column>
            </Grid>
          </Modal.Content>
          <Modal.Actions>
            <Button color={'black'} onClick={this.onCloseModal}>
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
      </div>
    );
  }

}
