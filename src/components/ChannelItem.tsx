import * as React from 'react';
import {Icon, Input, Label, Popup} from 'semantic-ui-react';
import {IChannel} from '../models/IChannel';
import {ChangeEvent} from 'react';

export interface IChannelItemStateProps {
  readonly channel: IChannel;
  readonly selected: boolean;
}

export interface IChannelItemOwnProps {
  readonly id: Uuid;
}

export interface IChannelItemDispatchProps {
  onChannelChange(id: Uuid): void;

  onSavingChannelName(channel: IChannel, name: string): void;

  onDeleteChannel(id: Uuid): void;

  onStartEditing(id: Uuid): void;
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
    console.log('Deleting');
    this.props.onDeleteChannel(this.props.channel.id);
  };

  public render(): JSX.Element {
    const {editing, asyncRenaming } = this.props.channel.customData;
    return (
      <div className={'channel-item-row'}>
        {/*<List.Item as={'a'}*/}
        {/*name={this.props.channel.name}*/}
        {/*active={this.props.selected}*/}
        {/*onClick={this.onChannelChange}*/}
        {/*>*/}
        {/*<Label size={'small'}>*/}
        {/*<Icon name={'mail'}/>10*/}
        {/*</Label>*/}
        {/*{!this.state.editing &&*/}
        {/*<List.Content>{this.props.channel.name}</List.Content>*/}
        {/*}*/}
        {/*{this.state.editing &&*/}
        {/*<Input*/}
        {/*loading={this.props.channel.customData.waitingForAsyncRenaming}*/}
        {/*placeholder={'New channel name...'}*/}
        {/*onChange={this.onChange}*/}
        {/*/>*/}
        {/*}*/}

        {/*</List.Item>*/}
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
              <Icon name={'sign out'}/>
            </Popup>
          </div>
        </div>

        {/*<Icon.Group className={'channel-item-icons'}>*/}
        {/*<Icon name={'trash'}/>*/}
        {/*<Icon name={'edit'}*/}
        {/*link*/}
        {/*onClick={() => this.onStartEditing(true)}/>*/}
        {/*<Icon name={'save'}*/}
        {/*link*/}
        {/*onClick={() => this.onSavingChannelName()}/>*/}
        {/*<Icon name={'x'}*/}
        {/*link*/}
        {/*onClick={() => this.onCancelChanges(false)}/>*/}
        {/*<Icon name={'trash'}*/}
        {/*link*/}
        {/*onClick={this.onDeleteChannel}/>*/}
        {/*</Icon.Group>*/}

      </div>
    );
  }
}
