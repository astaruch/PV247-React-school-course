import * as React from 'react';
import {IChannel} from '../models/IChannel';
import {Label} from 'semantic-ui-react';

export interface IBrowseChannelItemStateProps {
  readonly channel: IChannel;
}

export interface IBrowseChannelItemDispatchProps {
}

type IProps = IBrowseChannelItemStateProps & IBrowseChannelItemDispatchProps;

interface IState {
}

export class BrowseChannelItem extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div className="channel-item-row">
        <div className="channel-item-text">
          {this.props.channel.name}
        </div>
        <div className="channel-item-label">
          <Label className="channel-item-label" as={'a'} color={'green'} size={'tiny'}>Join</Label>
          <Label className="channel-item-label" as={'a'} color={'red'} size={'tiny'}>Leave</Label>
        </div>
      </div>
    );
  }
}
