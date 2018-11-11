import * as React from 'react';
import {ChangeEvent, FormEvent} from 'react';
import {Button, Form, Grid, Header, Message, Popup, Segment} from 'semantic-ui-react';


export interface ILoginState {
    username: string;
    password: string;
}

export interface ILoginProps {
    onLogin: ((nick: string) => void);
}

export interface ILoginDispatchProps {
    onLogin(username: string, password: string): void
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

    // setUsername = (event) => {
    //     const newNick = event.target.value;
    //     this.setState(() => ({
    //         username: newNick
    //         })
    //     );
    // };
    //
    // setPassword = (event) => {
    //     const newPassword = event.target.value;
    //     this.setState(() => ({
    //             password: newPassword
    //         })
    //     );
    // };

    // setResult = (value: JSX.Element) => {
    //     this.setState(() => ({
    //             result: value
    //         })
    //     );
    // };

    //
    // loginSuccessful = (): boolean => {
    //     const adminNick = 'admin';
    //     const adminPass = 'pass';
    //     return this.state.nick === adminNick && this.state.password === adminPass;
    // };

    // handleSubmit = (event) => {
    //
    //     event.preventDefault();
    //     console.log('Login attempt: ', this.state.nick, ' - ', this.state.password);
    //
    //     if (this.loginSuccessful()) {
    //         this.props.onLogin(this.state.nick);
    //         this.setResult(<Redirect to="/"/>);
    //     } else {
    //         this.setResult(<h4>Incorrect username and/or password!</h4>);
    //     }
    // };

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
                                    placeholder="Username"
                                    name="Username"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                />
                                <Form.Input
                                    fluid
                                    icon="lock"
                                    iconPosition="left"
                                    placeholder="Password"
                                    name="Password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    type="password"
                                />
                                <Button color="teal" fluid size="large">
                                    Login
                                </Button>
                                <Message
                                    icon="question circle"
                                    content="Username = admin, Password = pass"
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
