import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Icon, Label, Menu} from 'semantic-ui-react';

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
    };

    public render(): JSX.Element {
        return (
            <Menu.Item
                name={this.props.name}
                active={this.props.selected}
                onClick={this.onClick}
            >
                <Label>
                    <Icon name={'mail'}/>{this.props.numberOfNewMessages}
                </Label>
                {this.props.name}
            </Menu.Item>
        );
    }
}
