import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface IMessageForm {
    readonly nick: string;
    readonly message: string;
}

export class MessageForm extends React.Component<IMessageForm> {
    static propTypes = {
        nick: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
    };

    render(): JSX.Element {
        return (
            <form
                className="MessageForm"
            >
                <label
                    htmlFor="nick"
                    className="MessageForm__nick-label"
                >
                    Nick:
                </label>
                <input
                    className="MessageForm__nick-input"
                    id="nick"
                    value={this.props.nick}
                />
                <label
                    className="MessageForm__message-label"
                    htmlFor="message"
                >
                    Message:
                </label>
                <input
                    id="message"
                    className="MessageForm__message-input"
                    value={this.props.message}
                />
                <button type="submit">Send</button>
            </form>

        );
    }
}
