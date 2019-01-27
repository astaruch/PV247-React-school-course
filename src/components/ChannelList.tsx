import * as React from 'react';
import * as Immutable from 'immutable';
import {ChannelItemContainer} from '../containers/ChannelItemContainer';
import {Button, Header, Menu, Segment} from 'semantic-ui-react';

export interface IChannelListStateProps {
    readonly channelIds: Immutable.List<Uuid>;
}

export class ChannelList extends React.PureComponent<IChannelListStateProps> {
    public render(): JSX.Element {
        return (
            <Menu vertical className={'channel-list'}>
                <Header as={'h2'} attached={'top'}>
                    Channels  <Button icon={'add'} />
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
