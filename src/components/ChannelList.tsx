import * as React from 'react';
import * as PropTypes from 'prop-types';
import {ChannelItem} from './ChannelItem';
import {Header, Menu, Segment} from 'semantic-ui-react';
import {IChannelItem} from '../models/IChannelItem';

export interface IChannelList {
    channels: IChannelItem[];
    onChannelChange: ((id: number) => void);
    selectedChannel: number;
}

export class ChannelList extends React.PureComponent<IChannelList> {
    static propTypes = {
        selectedChannel: PropTypes.number,
        channels: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            numberOfNewMessages: PropTypes.number.isRequired,
        })),
        onChannelChange: PropTypes.func.isRequired
    };


    public render(): JSX.Element {
        return (
            <Menu vertical style={{height: '100%'}}>
                <Header as={'h2'} attached={'top'}>
                    Channels
                </Header>
                <Segment attached>
                    {this.props.channels && this.props.channels.map((channel, index) => (
                        <ChannelItem name={channel.name}
                                     numberOfNewMessages={channel.numberOfNewMessages}
                                     key={index}
                                     selected={channel.id === this.props.selectedChannel}
                                     id={index}
                                     onChannelChange={this.props.onChannelChange}/>
                    ))}
                </Segment>
            </Menu>
        );
    }
}
