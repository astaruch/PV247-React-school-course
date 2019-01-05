import * as React from 'react';
import {ChangeEvent, FormEvent} from 'react';
import {Button, Form, Grid, Header, Message, Popup, Segment} from 'semantic-ui-react';


export interface ILoginState {
    username: string;
    password: string;
}

export interface ILoginDispatchProps {
    onLogin(username: string, password: string): void;
}

export class Login extends React.PureComponent<ILoginDispatchProps, ILoginState> {
    constructor(props: ILoginDispatchProps) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }

    private onSubmit = (e: FormEvent): void => {
        e.preventDefault();
        this.props.onLogin(this.state.username, this.state.password);
    };

    private onChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState((prevState) => {
            return {...prevState, [name]: value};
        });
    };

    render(): JSX.Element {
        return (
            <div className="login-form">
                <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}
                </style>
                <Grid textAlign="center" style={{height: '100%'}} verticalAlign="middle">
                    <Grid.Column style={{maxWidth: 450}}>
                        <Header as="h2" color="teal" textAlign="center">
                            Sign In
                        </Header>
                        <Form size="large" method={'post'} name={'Login_Form'} className={'form-signin'}
                              onSubmit={this.onSubmit}>
                            <Segment stacked>
                                <Form.Input
                                    fluid
                                    autoFocus
                                    icon="user"
                                    iconPosition="left"
                                    placeholder="e-mail"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                />
                                <Form.Input
                                    fluid
                                    icon="lock"
                                    iconPosition="left"
                                    placeholder="Password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    type="password"
                                />
                                <Button color="teal" fluid size="large">
                                    Login
                                </Button>
                                <Message
                                    icon="question circle"
                                    content="Username = a@b.com. Password is arbitrary (not implemented yet.)"
                                />
                            </Segment>
                        </Form>
                        <Message>
                            Not having an account? <Popup
                            trigger={<a href={'#'}>Sign up!</a>}
                            content="Not implemented yet"
                            on="click"
                            style={{height: 'auto'}}
                        />
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}
