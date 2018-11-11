import * as React from 'react';
import {Icon, Label, Menu} from 'semantic-ui-react';
import {IChannelItem} from '../models/IChannelItem';

export interface IChannelItemStateProps {
    readonly channelItem: IChannelItem;
}

export interface IChannelItemChannelProps {
    readonly id: Uuid;
}

type IProps = IChannelItemStateProps & IChannelItemChannelProps;

export class ChannelItem extends React.PureComponent<IProps> {

    onClick = () => {
        if (this.props.channelItem.onChannelChange) {
            this.props.channelItem.onChannelChange(this.props.channelItem.id);
        }
    };

    public render(): JSX.Element {
        return (
            <Menu.Item
                name={this.props.channelItem.name}
                active={this.props.channelItem.selected}
                onClick={this.onClick}
            >
                <Label>
                    <Icon name={'mail'}/>{this.props.channelItem.numberOfNewMessages}
                </Label>
                {this.props.channelItem.name}
            </Menu.Item>
        );
    }
}
