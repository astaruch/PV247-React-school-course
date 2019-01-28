import * as React from 'react';
import {ChatWindow} from './ChatWindow';
import {Segment} from 'semantic-ui-react';
import {ChannelListContainer} from '../containers/ChannelListContainer';
import {MessageAppHeader} from './MessageAppHeader';


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
      <Segment.Group className={'message-app'}>
        <MessageAppHeader/>
        <Segment.Group horizontal style={{height: '100%'}}>
          <ChannelListContainer/>
          <ChatWindow/>
        </Segment.Group>
      </Segment.Group>
    );
  }
}
