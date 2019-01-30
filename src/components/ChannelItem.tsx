import * as React from 'react';
import {Button, Icon, Input, Label, List, Segment} from 'semantic-ui-react';
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
}

interface IState {
  editing: boolean;
  currentChannelName: string;
}

type IProps = IChannelItemStateProps & IChannelItemOwnProps & IChannelItemDispatchProps;

export class ChannelItem extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      editing: false,
      currentChannelName: props.channel.name
    };
  }

  private onChannelChange = () => {
    this.props.onChannelChange(this.props.channel.id);
  };

  readonly onStartEditing = (editing: boolean): void => this.setState(prevState => ({
    ...prevState,
    editing
  }));

  readonly onCancelChanges = (editing: boolean): void => this.setState(prevState => ({
    ...prevState,
    editing
  }));

  private onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    this.setState((prevState) => {
      return {...prevState, currentChannelName: value};
    });
  };

  private onSavingChannelName = () => {
    this.props.onSavingChannelName(this.props.channel, this.state.currentChannelName);
  };

  public render(): JSX.Element {
    return (
      <Segment.Group horizontal>
        <Segment>
          <List.Item
            as={'a'}
            name={this.props.channel.name}
            active={this.props.selected}
            onClick={this.onChannelChange}
            className={'channel-item'}
          >
            {this.props.channel.numberOfNewMessages > 0 &&
            <Label size={'small'}>
                <Icon name={'mail'}/>{this.props.channel.numberOfNewMessages}
            </Label>
            }

            {!this.state.editing &&
            <List.Content>{this.props.channel.name}</List.Content>
            }
            {this.state.editing &&
            <Input
                loading={this.props.channel.waitingForAsyncRenaming}
                placeholder={'New channel name...'}
                onChange={this.onChange}
            />
            }

          </List.Item>
        </Segment>
        <Segment tertiary>
          <div className={'channel-editing-buttons'}>
            <Button.Group icon size={'small'}>
              <Button onClick={() => this.onStartEditing(true)}>
                <Icon name={'edit'}/>
              </Button>
              <Button onClick={this.onSavingChannelName}>
                <Icon name={'save'}/>
              </Button>
              <Button onClick={() => this.onCancelChanges(false)}>
                <Icon name={'x'}/>
              </Button>
            </Button.Group>
          </div>
        </Segment>
      </Segment.Group>
    );
  }
}
