import * as React from 'react';
import * as Immutable from 'immutable';
import {ChannelItemContainer} from '../containers/ChannelItemContainer';
import {Header, Menu, Segment} from 'semantic-ui-react';

export interface IChannelListStateProps {
    readonly channelIds: Immutable.List<Uuid>;
}

export class ChannelList extends React.PureComponent<IChannelListStateProps> {
    public render(): JSX.Element {
        return (
            <Menu vertical style={{height: '100%'}}>
                <Header as={'h2'} attached={'top'}>
                    Channels
                </Header>
                <Segment attached>
                    {this.props.channelIds && this.props.channelIds.map((channelId) => (
                        <ChannelItemContainer id={channelId} key={channelId}/>
                    ))}
                </Segment>
                New channel (+)
            </Menu>
        );
    }
}
