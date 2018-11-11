import * as React from 'react';
import * as PropTypes from 'prop-types';

import {MessageList} from './MessageList';
import {MessageForm} from './MessageForm';
import {IMessageItem} from '../models/IMessageItem';
import {Grid} from 'semantic-ui-react';


interface IChat {
    nick: string;
    messages: IMessageItem[];
    selectedChannel: number;
}

export class ChatWindow extends React.PureComponent<IChat> {
    static propTypes = {
        nick: PropTypes.string.isRequired,
        messages: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            channelId: PropTypes.number.isRequired,
            from: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })),
        selectedChannel: PropTypes.number.isRequired
    };

    onNewMessage = (nick: string, message: string) => {
        const msg: IMessageItem = {id: 99, channelId: this.props.selectedChannel, from: nick, text: message};
        this.props.messages.push(msg);
        this.forceUpdate(); // probably terrible hack, sorry
    };

    public render(): JSX.Element {
        const messages = this.props.messages;
        const nick = this.props.nick;
        return (
            <Grid divided={'vertically'} style={{width: '90%'}}>
                <Grid.Row>
                    <MessageList messages={messages.filter((msg) => msg.channelId === this.props.selectedChannel)}/>
                </Grid.Row>
                <Grid.Row>
                    <MessageForm
                        nick={nick}
                        onNewMessage={this.onNewMessage}
                    />
                </Grid.Row>
            </Grid>
        );
    }
}
