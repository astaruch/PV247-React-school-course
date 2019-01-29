import * as React from 'react';
import {Icon, Label, Menu} from 'semantic-ui-react';
import {IChannel} from '../models/IChannel';

export interface IChannelItemStateProps {
    readonly channel: IChannel;
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
        this.props.onClick(this.props.channel.id);
    };

    public render(): JSX.Element {
        return (
            <Menu.Item
                name={this.props.channel.name}
                active={this.props.selected}
                onClick={this.onClick}
            >
                <Label>
                    <Icon name={'mail'}/>{this.props.channel.numberOfNewMessages}
                </Label>
                {this.props.channel.name}
            </Menu.Item>
        );
    }
}
