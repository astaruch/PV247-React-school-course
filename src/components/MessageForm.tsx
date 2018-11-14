import * as React from 'react';
import {Form} from 'semantic-ui-react';

export interface IMessageFormStateProps {
    readonly channelId: Uuid;
    readonly userId: Uuid;
}

export interface IMessageFormDispatchProps {
    onMessageSubmit: ((channelId: Uuid, userId: Uuid, text: string) => void);
}
export interface IMessageFormState {
    message: string;
}

type IMessageFormProps = IMessageFormStateProps & IMessageFormDispatchProps;

export class MessageForm extends React.PureComponent<IMessageFormProps, IMessageFormState> {
    constructor(props) {
        super(props);

        this.state = {
            message: ''
        };
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log('Sending message ', this.state.message);
        this.props.onMessageSubmit(this.props.channelId, this.props.userId, this.state.message);
        this.setState(() => ({
            message: ''
        }));
    };

    setMessage = (event) => {
        const msg = event.target.value;
        this.setState(() => ({
            message: msg
        }));
    };

    render(): JSX.Element {
        return (
            <Form style={{width: '90%'}} onSubmit={this.onSubmit}>
                <Form.TextArea label={'Message'} placeholder={'Write your message...'} value={this.state.message} onChange={this.setMessage}/>
                <Form.Button>Send</Form.Button>
            </Form>

        );
    }
}
