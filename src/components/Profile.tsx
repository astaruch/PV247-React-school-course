import * as React from 'react';
import {Button, Form, Modal} from 'semantic-ui-react';


export interface IProfileProps {
    nick: string;
    open: boolean;
    onClose: (() => void);
}

export interface IProfileState {
    name: string;
    gender: string;
    email: string;
    isAdmin: boolean;
}

const genders = [
    {key: 'm', text: 'Male', value: 'male'},
    {key: 'f', text: 'Female', value: 'female'},
];

export class Profile extends React.PureComponent<IProfileProps, IProfileState> {

    constructor(props) {
        super(props);

        this.loadProfile(this.props.nick);
    }

    loadProfile = (nick: string) => {
        console.log('Loading profile for ', nick);
        this.state = {
            name: 'John Smith',
            gender: 'Male',
            email: 'john.smith@mail.com',
            isAdmin: true
        };
    };

    handleChange = (event) => {
        console.log(event.target.value);
    };

    saveProfile = (event) => {
        console.log('Saving  new state:', this.state);
        const { name, email, gender } = this.state;
        console.log(name, email, gender);
        // this.setState()
        this.props.onClose();
        event.preventDefault();
    };

    render(): JSX.Element {
        const { name, email, gender } = this.state;
        return (
            <Modal dimmer={'blurring'} open={this.props.open} onClose={this.props.onClose}>
                <Modal.Header>User settings</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Group>
                            <Form.Field
                                value={name}
                                name={'name'}
                                width={12}
                                label={'Name'}
                                control={'input'}
                                placeholder={this.state.name}
                                onChange={this.handleChange}
                            />
                            <Form.Select
                                value={gender}
                                name={'gender'}
                                width={4}
                                fluid
                                label="Gender"
                                options={genders}
                                placeholder="Gender"
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Field
                            value={email}
                            name={'email'}
                            label={'E-mail'}
                            control={'input'}
                            placehoder={this.state.email}
                            onChange={this.handleChange}
                        />
                        <Form.Field control={Button} onClick={this.saveProfile}>Submit</Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button color={'black'} onClick={this.props.onClose}>
                        Discard changes
                    </Button>
                    <Button
                        positive
                        icon={'checkmark'}
                        labelPosition={'right'}
                        content={'Save'}
                        onClick={this.props.onClose}
                    />
                </Modal.Actions>
            </Modal>

        );
    }

}
