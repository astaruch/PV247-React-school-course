import * as React from 'react';
import {Button, Form, Modal} from 'semantic-ui-react';
import {IUser} from '../models/IUser';

export interface IProfileOwnProps {
    open: boolean;
    onClose: (() => void);
}

export interface IProfileStateProps {
    user: IUser;
}

export interface IProfileDispatchProps {
    onSave: ((user: IUser) => any);
}

interface IProfileState {
    email: string;
    password: string;
    name?: string;
    gender?: string;
}

const genders = [
  {key: 'm', text: 'Male', value: 'm'},
  {key: 'f', text: 'Female', value: 'f'}
];


type IProps = IProfileStateProps & IProfileDispatchProps & IProfileOwnProps;

export class Profile extends React.PureComponent<IProps, IProfileState> {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.user.name,
            gender: this.props.user.gender,
            password: this.props.user.password,
            email: this.props.user.email
        };
    }

    onNameChange = (event) => {
        const name = event.target.value;
        this.setState(() => {
            return {name};
        });
    };

    onEmailChange = (event) => {
        const email = event.target.value;
        this.setState(() => {
            return {email};
        });
    };

    onGenderSelect = (_, data) => {
        const gender = data.value;
        this.setState(() => {
            return {gender};
        });
    };

    onSave = (event) => {
        event.preventDefault();
        this.props.onSave({
            email: this.state.email,
            password: this.state.password,
            id: this.props.user.id,
            pictureUrl: this.props.user.pictureUrl,
            username: this.props.user.username,
            name: this.state.name,
            gender: this.state.gender,
        });
        this.props.onClose();
    };

    render(): JSX.Element {
        return (
            <Modal dimmer={'blurring'} open={this.props.open} onClose={this.props.onClose}>
                <Modal.Header>User settings</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Group>
                            <Form.Field
                                value={this.state.name}
                                name={'name'}
                                width={12}
                                label={'Name'}
                                control={'input'}
                                placeholder="Name"
                                onChange={this.onNameChange}
                            />
                            <Form.Select
                                value={this.state.gender}
                                name={'gender'}
                                width={4}
                                fluid
                                label="Gender"
                                options={genders}
                                placeholder="Gender"
                                onChange={this.onGenderSelect}
                            />
                        </Form.Group>
                        <Form.Field
                            value={this.state.email}
                            name={'email'}
                            label={'E-mail'}
                            control={'input'}
                            placehoder="E-mail"
                            onChange={this.onEmailChange}
                        />
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button color={'black'} onClick={this.props.onClose}>
                        Close
                    </Button>
                </Modal.Actions>
                <Button
                    positive
                    icon={'checkmark'}
                    labelPosition={'right'}
                    content={'Save'}
                    onClick={this.onSave}
                />
            </Modal>

        );
    }

}
