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
            <div className="Login">
                {this.state.result}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.setUsername} value={this.state.nick}/>
                    <input type="password" onChange={this.setPassword} value={this.state.password}/>
                    <input type="submit" value="Login"/>
                </form>
                Hint: Username = admin, Password = pass
            </div>
        );
    }
}
