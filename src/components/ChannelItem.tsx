import * as React from 'react';
import {Icon, Input, Label, Popup} from 'semantic-ui-react';
import {IChannel} from '../models/IChannel';
import {ChangeEvent} from 'react';

export interface IChannelItemStateProps {
  readonly channel: IChannel;
  readonly selected: boolean;
  readonly loggedUserId: Uuid;
}

export interface IChannelItemOwnProps {
  readonly id: Uuid;
}

export interface IChannelItemDispatchProps {
  onChannelChange(id: Uuid): void;

  onSavingChannelName(channel: IChannel, name: string): void;

  onDeleteChannel(id: Uuid): void;

  onStartEditing(id: Uuid): void;

  onChannelLeave(channelId: Uuid, userId: Uuid, channel: IChannel): void;
}

interface IState {
  newName: string;
}

type IProps = IChannelItemStateProps & IChannelItemOwnProps & IChannelItemDispatchProps;

export class ChannelItem extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      newName: '',
    };
  }

  readonly onStartEditing = () => {
    this.props.onStartEditing(this.props.channel.id);
  };

  readonly onNewNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const newName = event.target.value;
    this.setState(prevState => ({...prevState, newName}));
  };

  readonly onSaveNewName = () => {
    this.props.onSavingChannelName(this.props.channel, this.state.newName);
  };

  readonly onDeleteChannel = () => {
    this.props.onDeleteChannel(this.props.channel.id);
  };

  readonly onChannelLeave = () => {
    this.props.onChannelLeave(this.props.channel.id, this.props.loggedUserId, this.props.channel);
  };

  public render(): JSX.Element {
    const {editing, asyncRenaming} = this.props.channel.customData;
    return (
      <div className={'channel-item-row'}>
        <div className="channel-item-column">
          <div className="channel-item-badge">
            {this.props.channel.customData.numberOfNewMessages > 0 &&
            <Label size={'tiny'}>
                <Icon name={'mail'}/>{this.props.channel.customData.numberOfNewMessages}
            </Label>
            }
          </div>
        </div>
        <div className="channel-item-column">
          <div className="channel-item-content">
            {!editing &&
            <span>{this.props.channel.name}</span>
            }
            {editing &&
            <div className="channel-item-renaming">
                <Input className="channel-item-renaming"
                       placeholder={'Enter new name...'}
                       icon={{name: 'checkmark', link: true, onClick: this.onSaveNewName, color: 'green'}}
                       value={this.state.newName}
                       onChange={this.onNewNameChange}
                       loading={asyncRenaming}
                       onBlur={this.onSaveNewName}
                />
            </div>
            }
          </div>
        </div>
        <div className="channel-item-column">
          <div className="channel-item-icons">
            <Popup trigger={<Icon name={'cogs'}/>}
                   hoverable
                   size={'large'}
                   position={'right center'}>
              <Icon name={'edit outline'}
                    link
                    onClick={this.onStartEditing}
              />
              <Icon name={'trash alternate outline'}
                    link
                    onClick={this.onDeleteChannel}
              />
              <Icon name={'sign out'}
                    link
                    onClick={this.onChannelLeave}
              />
            </Popup>
          </div>
        </div>
      </div>
    );
  }
}
