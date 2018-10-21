import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ChannelItem, IChannelItem } from './ChannelItem';

export interface IChannelList {
    channels: IChannelItem[];
}

export class ChannelList extends React.PureComponent<IChannelList> {
    static propTypes = {
        channels: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            numberOfNewMessages: PropTypes.number.isRequired,
        })),
    };

    public render(): JSX.Element {
        return (
            <div className="ChannelList">
                <h2>Channels</h2>
                {this.props.channels && this.props.channels.map((channel, index) => (
                    <ChannelItem name={channel.name}
                                 numberOfNewMessages={channel.numberOfNewMessages}
                                 key={index}/>
                ))}
            </div>
        );
    }
}