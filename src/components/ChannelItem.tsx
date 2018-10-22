import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface IChannelItem {
    name: string;
    numberOfNewMessages: number;
}

export class ChannelItem extends React.PureComponent<IChannelItem> {
    static propTypes = {
        name: PropTypes.string.isRequired,
        numberOfNewMessages: PropTypes.number.isRequired,
    };

    public render(): JSX.Element {
        return (
            <li className="channel-item list-group-item border-css">
                {this.props.name}
                <span className="channel-item__number-of-new-messages badge">{this.props.numberOfNewMessages}</span>
            </li>
        );
    }
}
