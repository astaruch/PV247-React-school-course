import * as React from 'react';
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
        {/*<MessageAppHeader/>*/}
        {/*<Segment.Group className={'message-app-content'} horizontal>*/}
          {/*<ChannelListContainer/>*/}
          {/*<ChatWindow/>*/}
        {/*</Segment.Group>*/}
        <div className="app-header"></div>
        <div className="channel-header"></div>
        <div className="user-header"></div>

        <div className="channel-list"></div>
        <div className="browse-channels"></div>

        <div className="message-list"></div>
        <div className="message-form"></div>

        <div className="user-list"></div>
        <div className="channel-attachments"></div>
      </div>
    );
  }
}
