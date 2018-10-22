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
                className="message-form channel-item"
            >
                <label
                    className="message-form__message-label"
                    htmlFor="message"
                >
                    Message:
                </label>
                <input
                    id="message"
                    className="message-form__message-input"
                    value={this.props.message}
                />
                <button type="submit">Send</button>
            </form>

        );
    }
}
