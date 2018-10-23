import * as React from 'react';
import * as PropTypes from 'prop-types';

import {ChannelList} from './ChannelList';
import {IChannelItem} from './ChannelItem';
import {MessageAppHeader} from './MessageAppHeader';
import {ChatWindow} from './ChatWindow';
import {IMessageItem} from './MessageItem';
import {Profile} from './Profile';

interface IMessageApp {
    nick: string;
    messages: IMessageItem[];
    channels: IChannelItem[];
}

interface IMessageState {
    selectedChannel: number;
}

export class MessageApp extends React.PureComponent<IMessageApp, IMessageState> {
    static propTypes = {
        nick: PropTypes.string.isRequired,
        messages: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            channelId: PropTypes.number.isRequired,
            from: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })),
        channels: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            numberOfNewMessages: PropTypes.number.isRequired,
        })),
    };

    constructor(props) {
        super(props);

        this.state = {
            selectedChannel: 0
        };
    }


    onChannelChange = (id: number) => {
        const selectedId = id;
        console.log('Selected channel ', selectedId);
        this.setState(() => ({
                selectedChannel: selectedId
            })
        );
    };

    public render(): JSX.Element {
        const channels = this.props.channels;
        const user = this.props.nick;
        const messages = this.props.messages;
        return (
            <div className="message-app border-css">
                <div className={'row'}>
                    <div className={'col-md-12'}>
                        <MessageAppHeader user={user}/>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-md-3 col-lg-2'}>
                        <ChannelList channels={channels} onChannelChange={this.onChannelChange} selectedChannel={this.state.selectedChannel}/>
                    </div>
                    <div className={'col-md-9 col-lg-10'}>
                        <ChatWindow nick={user} messages={messages} selectedChannel={this.state.selectedChannel}/>
                    </div>
                </div>
                <div className={'row'}>
                    <Profile nick={user}/>
                </div>
            </div>
        );
    }
}
