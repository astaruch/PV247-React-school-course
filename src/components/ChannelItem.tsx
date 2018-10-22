import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface IChannelItem {
    idx: number;
    name: string;
    numberOfNewMessages: number;
    selectedChannel?: number;
}

export class ChannelItem extends React.PureComponent<IChannelItem> {
    static propTypes = {
        idx: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        numberOfNewMessages: PropTypes.number.isRequired,
        selectedChannel: PropTypes.number,
    };

    public render(): JSX.Element {
        const active = this.props.selectedChannel ===  this.props.idx ? 'active' : '';
        return (
            <li className={`channel-item list-group-item border-css ${active}`}>
                {this.props.name}
                <span className="channel-item__number-of-new-messages badge">{this.props.numberOfNewMessages}</span>
            </li>
        );
    }
}
