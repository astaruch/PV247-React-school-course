import * as React from 'react';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header/Header';
import {ChannelListContainer} from '../containers/ChannelListContainer';
import {BrowseChannelContainer} from '../containers/BrowseChannelsContainer';
import {ChannelHeaderContainer} from '../containers/ChannelHeaderContainer';
import {UserListContainer} from '../containers/UserListContainer';
import {UserHeaderContainer} from '../containers/UserHeaderContainer';

export interface IMessageAppDispatchProps {
  loadDataFromServer(): void;
}

export class MessageApp extends React.PureComponent<IMessageAppDispatchProps> {
  public constructor(props: IMessageAppDispatchProps) {
    super(props);
  }

  componentDidMount() {
    this.props.loadDataFromServer();
  }

  public render(): JSX.Element {
    return (
      <div className={'message-app'}>
        <div className="app-header">
          <div className="app-header-text">
            <Header as={'h2'}>
              Messenger
              <Header.Subheader>React & Redux school project</Header.Subheader>
            </Header>
          </div>
        </div>
        <div className="channel-header">
          <ChannelHeaderContainer/>
        </div>
        <div className="user-header">
          <UserHeaderContainer/>
        </div>

        <div className="channel-list">
          <ChannelListContainer/>
        </div>
        <div className="browse-channels">
          <BrowseChannelContainer/>
        </div>

        <div className="message-list">
          Message List
        </div>
        <div className="message-form">
          Message Form
        </div>

        <div className="user-list">
          <UserListContainer/>
        </div>
        <div className="channel-attachments">
          Channel Attachments
        </div>
      </div>
    );
  }
}
