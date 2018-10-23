import * as React from 'react';
import {Redirect} from 'react-router-dom';

export interface ILoginState {
    nick: string;
    password: string;
    result: JSX.Element;
}

export interface ILoginProps {
    onLogin: ((nick: string) => void);
}

export class Login extends React.PureComponent<ILoginProps, ILoginState> {

    constructor(props) {
        super(props);

        this.state = {
            nick: '',
            password: '',
            result: <span/>
        };
    }

    setUsername = (event) => {
        const newNick = event.target.value;
        this.setState(() => ({
                nick: newNick
            })
        );
    };

    setPassword = (event) => {
        const newPassword = event.target.value;
        this.setState(() => ({
                password: newPassword
            })
        );
    };

    setResult = (value: JSX.Element) => {
        this.setState(() => ({
                result: value
            })
        );
    };

    loginSuccessful = (): boolean => {
        const adminNick = 'admin';
        const adminPass = 'pass';
        return this.state.nick === adminNick && this.state.password === adminPass;
    };

    handleSubmit = (event) => {

        event.preventDefault();
        console.log('Login attempt: ', this.state.nick, ' - ', this.state.password);

        if (this.loginSuccessful()) {
            this.props.onLogin(this.state.nick);
            this.setResult(<Redirect to="/"/>);
        } else {
            this.setResult(<h4>Incorrect username and/or password!</h4>);
        }
    };

    render(): JSX.Element {
        return (
            <div className="container">
                <div className="wrapper">
                    <form action="" method="post" name="Login_Form" className="form-signin"
                          onSubmit={this.handleSubmit}>
                        <h3 className="form-signin-heading">Sign In</h3>
                        <hr className="colorgraph"/>
                        <br/>

                        <input type="text" className="form-control" name="Username" placeholder="Username"
                               value={this.state.nick} onChange={this.setUsername} required autoFocus/>
                        <input type="password" className="form-control" name="Password" placeholder="Password"
                               value={this.state.password} onChange={this.setPassword} required/>
                        <div className="hint">(Username = admin, Password = pass)</div>
                        <button className="btn btn-lg btn-primary btn-block" name="Submit" value="Login"
                                type="Submit">Login
                        </button>
                        {this.state.result}
                    </form>
                </div>
            </div>
        );
    }
}
