import * as React from 'react';
import {Button, Form, Modal} from 'semantic-ui-react';
import {IUser} from '../models/IUser';


export interface IProfileProps {
    user: IUser;
    open: boolean;
    onClose: (() => void);
}

const genders = [
    {key: 'm', text: 'Male', value: 'm'},
    {key: 'f', text: 'Female', value: 'f'}
];


export class Profile extends React.PureComponent<IProfileProps> {

    constructor(props) {
        super(props);
    }

    render(): JSX.Element {
        const user = this.props.user;
        return (
            <Modal dimmer={'blurring'} open={this.props.open} onClose={this.props.onClose}>
                <Modal.Header>User settings</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Group>
                            <Form.Field
                                value={user.name}
                                name={'name'}
                                width={12}
                                label={'Name'}
                                control={'input'}
                                placeholder="Name"
                            />
                            <Form.Select
                                value={user.gender}
                                name={'gender'}
                                width={4}
                                fluid
                                label="Gender"
                                options={genders}
                                placeholder="Gender"
                            />
                        </Form.Group>
                        <Form.Field
                            value={user.email}
                            name={'email'}
                            label={'E-mail'}
                            control={'input'}
                            placehoder="E-mail"
                        />
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button color={'black'} onClick={this.props.onClose}>
                        Close
                    </Button>
                </Modal.Actions>
            </Modal>

        );
    }

}
