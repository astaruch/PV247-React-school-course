import * as React from 'react';
import * as Immutable from 'immutable';
import {ChannelItemContainer} from '../containers/ChannelItemContainer';
import {Header, Icon, Input, List, Segment} from 'semantic-ui-react';
import {ChangeEvent} from 'react';
import {IChannel} from '../models/IChannel';


export interface IChannelListStateProps {
  readonly channelsList: Immutable.List<Uuid>;
  newChannel: IChannel;
}

export interface IChannelListDispatchProps {
  onAddNewChannel(): void;

  onSavingNewChannel(name: string, order: number): void;

  onCancelingChannelCreation(): void;
}

type IProps = IChannelListStateProps & IChannelListDispatchProps;

interface IState {
  newName: string;
}

export class ChannelList extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      newName: 'New Channel'
    };
  }

  private onAddNewChannel = () => {
    this.props.onAddNewChannel();
  };

  readonly onSavingNewChannel = () => {
    this.props.onSavingNewChannel(this.state.newName, this.props.channelsList.size + 1);
  };

  private onCancelingChannelCreation = () => {
    this.props.onCancelingChannelCreation();
  };

  private onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    this.setState((prevState) => {
      return {...prevState, newName: value};
    });
  };

  render(): JSX.Element {
    return (
      <div className={'channel-list'}>
        <Header as={'h3'} className={'channel-list-header-text'}>
          <Header.Content>Channels</Header.Content>
          <Icon name={'add'}
                link
                onClick={this.onAddNewChannel}/>
        </Header>
        <List link>
          {this.props.channelsList && this.props.channelsList.map((channelId) => (
            <ChannelItemContainer id={channelId} key={channelId}/>
          ))}

          {this.props.newChannel &&
          <Segment.Group horizontal>
              <Segment>
                  <List.Item
                      className={'channel-item'}>
                      <Input
                          placeholder={'Enter new channel name...'}
                          onChange={this.onChange}/>
                  </List.Item>
              </Segment>
              <Segment tertiary>
                  <div className={'channel-editing-buttons'}>
                      <Icon name={'save'}
                            link
                            onClick={this.onSavingNewChannel}/>
                      <Icon name={'x'}
                            link
                            onClick={this.onCancelingChannelCreation}/>
                  </div>
              </Segment>
          </Segment.Group>
          }
        </List>
      </div>
    );
  }
}
