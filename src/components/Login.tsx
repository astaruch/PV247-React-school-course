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
            this.setResult(<h3>Incorrect username and/or password!</h3>);
        }
    };


    render(): JSX.Element {
        return (
            <div className="container">
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <h2 className="form-signin-heading">Log In</h2>
                    <label htmlFor="inputNick" className="sr-only">Email address</label>
                    <input type="text" id="inputNick" className="form-control" placeholder="Nickname"
                           onChange={this.setUsername} value={this.state.nick} required autoFocus/>
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                           onChange={this.setPassword} value={this.state.password} required/>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
                User: admin, Password: pass
                {this.state.result}
            </div>
        );
    }
}
