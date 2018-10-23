import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface IChannelItem {
    id: number;
    name: string;
    numberOfNewMessages: number;
    selected?: boolean;
    onChannelChange?: ((id: number) => any);
}

export class ChannelItem extends React.PureComponent<IChannelItem> {
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        numberOfNewMessages: PropTypes.number.isRequired,
        selected: PropTypes.bool.isRequired,
        onChannelChange: PropTypes.func.isRequired
    };

    onClick = () => {
        if (this.props.onChannelChange) {
            this.props.onChannelChange(this.props.id);
        }
    }

    public render(): JSX.Element {
        const active = this.props.selected ? 'active' : '';
        return (
            <li className={`channel-item list-group-item border-css ${active}`} onClick={this.onClick}>
                {this.props.name}
                <span className="channel-item__number-of-new-messages badge">{this.props.numberOfNewMessages}</span>
            </li>
        );
    }
}
