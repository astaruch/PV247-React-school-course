import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface IMessageForm {
    readonly nick: string;
    onNewMessage: ((nick: string, message: string) => void);
}

export interface IMessageFormState {
    message: string;
}

export class MessageForm extends React.PureComponent<IMessageForm, IMessageFormState> {
    static propTypes = {
        nick: PropTypes.string.isRequired,
        onNewMessage: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            message: ''
        };
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log('Sending message ', this.state.message);
        this.props.onNewMessage(this.props.nick, this.state.message);
        this.setState(() => ({
            message: ''
        }));
    };

    setMessage = (event) => {
        const msg = event.target.value;
        this.setState(() => ({
            message: msg
        }));
    }

    render(): JSX.Element {
        return (
            <form
                className="message-form channel-item"
                onSubmit={this.onSubmit}
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
                    value={this.state.message}
                    onChange={this.setMessage}
                />
                <button type="submit">Send</button>
            </form>

        );
    }
}
