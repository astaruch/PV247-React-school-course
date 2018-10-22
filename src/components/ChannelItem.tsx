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
            <div className="channel-item border-css">
                <span className="channel-item__name">{this.props.name}</span>
                <span className="channel-item__number-of-new-messages">{this.props.numberOfNewMessages}</span>
            </div>
        );
    }
}
