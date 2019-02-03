import * as React from 'react';
import {Button, Icon, Menu} from 'semantic-ui-react';
import {ProfileContainer} from '../containers/ProfileContainer';

interface IMessageAppHeaderState {
  modalOpened: boolean;
}

export class MessageAppHeader extends React.PureComponent<any, IMessageAppHeaderState> {

  constructor(props) {
    super(props);
    this.state = {
      modalOpened: false
    };

  }

  onLogOut = () => {
    console.log('logging out');
  };

  showModal = () => {
    console.log('Opening modal window with profile');
    this.setState(() => ({
        modalOpened: true
      })
    );
  };

  closeModal = () => {
    console.log('Closing modal');
    this.setState(() => ({
        modalOpened: false
      })
    );
  };

  public render(): JSX.Element {
    const open = this.state.modalOpened;


    return (
      <div className={'message-app-header'}>
        <Menu inverted>
          <Menu.Item>
            <img src="https://react.semantic-ui.com/logo.png"/>
          </Menu.Item>
          <Menu.Item position={'right'}>
            <Button inverted circular icon={'user'} onClick={this.showModal}/>
          </Menu.Item>
          <Menu.Item>
            <Icon inverted link onClick={this.onLogOut} name={'log out'}/>
          </Menu.Item>
          <ProfileContainer onClose={this.closeModal} open={open}/>
        </Menu>
      </div>
    );
  }
}
