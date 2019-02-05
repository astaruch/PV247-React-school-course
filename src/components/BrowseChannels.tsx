import * as React from 'react';
import * as Immutable from 'immutable';
import {Header} from 'semantic-ui-react';
import {BrowseChannelItemContainer} from '../containers/BrowseChannelItemContainer';

export interface IBrowseChannelsStateProps {
  readonly allChannels: Immutable.List<Uuid>;
}

export interface IBrowseChannelsDispatchProps {
}

type IProps = IBrowseChannelsStateProps & IBrowseChannelsDispatchProps;

interface IState {
}

export class BrowseChannels extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div className="browse-channels-list">
        <Header as={'h4'}><Header.Content>Browse Channels</Header.Content></Header>
        {this.props.allChannels!.map((channelID) => (
          <BrowseChannelItemContainer id={channelID} key={channelID}/>
        ))}
      </div>
    );
  }
}
