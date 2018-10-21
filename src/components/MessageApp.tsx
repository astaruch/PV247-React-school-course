import * as React from 'react';
import * as PropTypes from 'prop-types';

import {ChannelList} from './ChannelList';
import {IChannelItem} from './ChannelItem';

interface IMessageApp {
    nick: string;
    message: string;
    messages: any[];
}

export class MessageApp extends React.PureComponent<IMessageApp> {
    static propTypes = {
        channels: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            numberOfNewMessages: PropTypes.number.isRequired,
        })),
    };

    private getChannels(): IChannelItem[] {
        const channel1: IChannelItem = { name: 'General', numberOfNewMessages: 10 };
        const channel2: IChannelItem = { name: 'Back office', numberOfNewMessages: 0};
        const channel3: IChannelItem = { name: 'Spam', numberOfNewMessages: 1337 };
        return [channel1, channel2, channel3];
    }

    public render(): JSX.Element {
        const channels = this.getChannels();

        return (
            <div className="MessageApp">
                Message App
                <ChannelList channels={channels}/>
            </div>
        );
    }
}
