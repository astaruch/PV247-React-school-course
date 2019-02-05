import * as React from 'react';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header/Header';
import {ChannelListContainer} from '../containers/ChannelListContainer';
import {BrowseChannelContainer} from '../containers/BrowseChannelsContainer';
import {ChannelHeaderContainer} from '../containers/ChannelHeaderContainer';
//import {ChatWindow} from './ChatWindow';
//import {Segment} from 'semantic-ui-react';
//import {ChannelListContainer} from '../containers/ChannelListContainer';
//import {MessageAppHeader} from './MessageAppHeader';


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
          <Header as={'h2'}>
            Messenger
            <Header.Subheader>React & Redux school project</Header.Subheader>
          </Header>
        </div>
        <div className="channel-header">
          <ChannelHeaderContainer/>
        </div>
        <div className="user-header">
          User Header
        </div>

        <div className="channel-list">
          <ChannelListContainer/>
        </div>
        <div className="browse-channels">
          <BrowseChannelContainer/>
        </div>

        <div className="message-list">
          Channel List
        </div>
        <div className="message-form">
          Message Form
        </div>

        <div className="user-list">
          User List
        </div>
        <div className="channel-attachments">
          Channel Attachments
        </div>
      </div>
    );
  }
}
