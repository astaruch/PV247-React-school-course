import * as React from 'react';
import {IChannel} from '../models/IChannel';
import {Label} from 'semantic-ui-react';

export interface IBrowseChannelItemStateProps {
  readonly channel: IChannel;
  readonly loggedUserId: Uuid;
}

export interface IBrowseChannelItemDispatchProps {
  onChannelJoin(channelId: Uuid, userId: Uuid): void;
  onChannelLeave(channelId: Uuid, userId: Uuid): void;
}

type IProps = IBrowseChannelItemStateProps & IBrowseChannelItemDispatchProps;

export class BrowseChannelItem extends React.PureComponent<IProps> {
  readonly onChannelJoin = () => {
    this.props.onChannelJoin(this.props.channel.id, this.props.loggedUserId);
  };

  readonly onChannelLeave = () => {
    this.props.onChannelLeave(this.props.channel.id, this.props.loggedUserId);
  };

  render(): JSX.Element {
    console.log(this.props.channel);
    const inThisChannel = this.props.channel.customData.usersId.contains(this.props.loggedUserId);

    return (
      <div className="channel-item-row">
        <div className="channel-item-text">
          {this.props.channel.name}
        </div>
        <div className="channel-item-label">
          {!inThisChannel &&
          <Label circular className="channel-item-label" as={'a'} color={'green'} size={'tiny'}
                 onClick={this.onChannelJoin}
          >
              Join
          </Label>
          }
          {inThisChannel &&
          <Label circular className="channel-item-label" as={'a'} color={'red'} size={'tiny'}
                 onClick={this.onChannelLeave}
          >
              Leave
          </Label>
          }
        </div>
      </div>
    );
  }
}
