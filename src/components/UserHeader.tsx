import * as React from 'react';
import {Button, Form, Grid, Icon, Modal} from 'semantic-ui-react';
import {IUser} from '../models/IUser';
import {ChangeEvent} from 'react';

export interface IUserHeaderStateProps {
  user: IUser;
}

export interface IUserHeaderDispatchProps {
  onSave: ((user: IUser, formData: FormData) => any);
  onLogout: () => any;
}

interface IUserState {
  email: string;
  password: string;
  username: string;
  modalOpened: boolean;
  avatarPreview: string;
  avatarFile: File;
}

type IProps = IUserHeaderStateProps & IUserHeaderDispatchProps;

export class UserHeader extends React.PureComponent<IProps, IUserState> {
  private fileInputRef = React.createRef<HTMLInputElement>();

  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      username: this.props.user.customData.username,
      password: this.props.user.customData.password,
      email: this.props.user.email,
      modalOpened: false,
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
    const formData = new FormData();
    formData.append('Files', this.state.avatarFile);
    const user = {
      email: this.state.email,
      customData: {
        ...this.props.user.customData,
        password: this.state.password,
        username: this.state.username
      }
    };
    this.props.onSave(user, formData);
    this.onCloseModal();
  };

  onShowModal = () => {
    this.setState(prevState => ({
      ...prevState,
      modalOpened: true
    }));
  };

  onCloseModal = () => {
    this.setState((prevState): IUserState => ({
      ...prevState,
      modalOpened: false
    }));
  };

  onFileUpload = (event: ChangeEvent<HTMLInputElement>): void => {
    const avatar = event.target!.files![0];
    this.setState((prevState): IUserState => {
      return {...prevState, avatarFile: avatar};
    });
    const fileReader = new FileReader();
    fileReader.onload = () => this.updateAvatar(fileReader.result);
    fileReader.readAsDataURL(avatar);
  };

  updateAvatar = (avatar: string | ArrayBuffer | null): void => {
    this.setState((prevState): IUserState => {
      if (typeof avatar === 'string') {
        return {...prevState, avatarPreview: avatar};
      } else {
        return prevState;
      }
    });
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
                onClick={this.props.onLogout}
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
                <div className="user-header-avatar"
                     onClick={() => this.fileInputRef.current!.click()}
                >
                  <img className="user-header-avatar-img"
                       src={this.state.avatarPreview}/>
                  <div className="user-header-avatar-overlay">UPLOAD</div>
                </div>
                <input type={'file'}
                       accept={'image/*'}
                       onChange={this.onFileUpload}
                       id={'file'}
                       ref={this.fileInputRef}
                       className="user-header-avatar-input"/>
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
