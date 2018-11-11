import * as React from 'react';
import * as PropTypes from 'prop-types';

import {ChannelList} from './ChannelList';
import {MessageAppHeader} from './MessageAppHeader';
import {ChatWindow} from './ChatWindow';
import {IChannelItem} from '../models/IChannelItem';
import {IMessageItem} from '../models/IMessageItem';
import {IMessageApp} from '../models/IMessageApp';
import {Segment} from 'semantic-ui-react';

interface IMessageAppProps {
    nick: string;
    messages: IMessageItem[];
    channels: IChannelItem[];
}


export class MessageApp extends React.PureComponent<IMessageAppProps, IMessageApp> {
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
            <Segment.Group style={{height: '100%'}}>
                <MessageAppHeader user={user}/>
                <Segment.Group horizontal style={{height: '100%'}}>
                    <ChannelList channels={channels} onChannelChange={this.onChannelChange} selectedChannel={this.state.selectedChannel}/>
                    <ChatWindow nick={user} messages={messages} selectedChannel={this.state.selectedChannel}/>
                </Segment.Group>
            </Segment.Group>
        );
    }
}
