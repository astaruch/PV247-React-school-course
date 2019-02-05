import * as React from 'react';
import * as Immutable from 'immutable';
import {ChannelItemContainer} from '../containers/ChannelItemContainer';
import {Header, Icon, Input} from 'semantic-ui-react';
import {ChangeEvent} from 'react';


export interface IChannelListStateProps {
  readonly channelsList: Immutable.List<Uuid>;
  asyncAddingChannel: boolean;
}

export interface IChannelListDispatchProps {
  onCreateNewChannel(name: string, order: number): void;
}

type IProps = IChannelListStateProps & IChannelListDispatchProps;

interface IState {
  newName: string;
}

export class ChannelList extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      newName: ''
    };
    this.onNewNameChange = this.onNewNameChange.bind(this);
  }

  readonly onSavingNewChannel = () => {
    this.props.onCreateNewChannel(this.state.newName, this.props.channelsList.size + 1);
    this.setState(prevState => ({...prevState, newName: ''}));
  };

  onNewNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const newName = event.target.value;
    this.setState(prevState => ({...prevState, newName}));
  };

  render(): JSX.Element {
    return (
      <div>
        <Header as={'h3'}>
          <Header.Content>My Channels</Header.Content>
        </Header>
        <div className="channel-list-header">
          <Input value={this.state.newName}
                 icon={
                   <Icon name={'add'} link onClick={this.onSavingNewChannel}/>}
                 placeholder={'Add new channel...'}
                 onChange={this.onNewNameChange}
                 loading={this.props.asyncAddingChannel}
                 size={'small'}
                 className="channel-list-header-input"
          />
        </div>
        {this.props.channelsList!.map((channelId) => (
          <ChannelItemContainer id={channelId} key={channelId}/>
        ))}

      </div>
    );
  }
}
