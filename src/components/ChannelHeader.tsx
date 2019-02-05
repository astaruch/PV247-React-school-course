import * as React from 'react';
import {IChannel} from '../models/IChannel';
import {Header} from 'semantic-ui-react';

export interface IChannelHeaderStateProps {
  readonly channel: IChannel;
}

export class ChannelHeader extends React.PureComponent<IChannelHeaderStateProps> {
  public render(): JSX.Element {
    return (
      <div className="channel-header-text">
        <Header as={'h2'}>
          {this.props.channel && this.props.channel.name}
        </Header>
      </div>
    );
  }
}
