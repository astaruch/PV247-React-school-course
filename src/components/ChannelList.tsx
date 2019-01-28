import * as React from 'react';
import * as Immutable from 'immutable';
import {ChannelItemContainer} from '../containers/ChannelItemContainer';
import {Button, Header, Icon, Menu, Segment} from 'semantic-ui-react';

export interface IChannelListStateProps {
  readonly channelIds: Immutable.List<Uuid>;
}

export class ChannelList extends React.PureComponent<IChannelListStateProps> {

  render(): JSX.Element {
    return (
      <Menu vertical className={'channel-list'}>
        <Header as={'h3'} className={'channel-list-header-text'}>
          <Icon name={'unordered list'}/>
          <Header.Content>Channels</Header.Content>
          <Button className={'channel-list-header-button'} icon={'add'}/>
        </Header>
        <Segment attached>
          {this.props.channelIds && this.props.channelIds.map((channelId) => (
            <ChannelItemContainer id={channelId} key={channelId}/>
          ))}
        </Segment>
      </Menu>
    );
  }
}
