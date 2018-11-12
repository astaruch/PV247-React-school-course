import * as React from 'react';
import {Icon, Label, Menu} from 'semantic-ui-react';
import {IChannelItem} from '../models/IChannelItem';

export interface IChannelItemStateProps {
    readonly channelItem: IChannelItem;
    readonly selected: boolean;
}

export interface IChannelItemOwnProps {
    readonly id: Uuid;
}

export interface IChannelItemDispatchProps {
    onClick(id: Uuid): void;
}

type IProps = IChannelItemStateProps & IChannelItemOwnProps & IChannelItemDispatchProps;

export class ChannelItem extends React.PureComponent<IProps> {
    private onClick = () => {
        this.props.onClick(this.props.channelItem.id);
    };

    public render(): JSX.Element {
        return (
            <Menu.Item
                name={this.props.channelItem.name}
                active={this.props.selected}
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
