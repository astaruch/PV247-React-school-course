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
            <div className="login row">
                <div className="col-md-6 col-md-offset-3">
                    <div className="panel panel-login">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-xs-6">
                                    <a href="#" className="active" id="login-form-link">Login</a>
                                </div>
                                <div className="col-xs-6">
                                    <a href="#" id="register-form-link">Register</a>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        <div className="panel-body">
                            <div className="col-lg-12">
                                <form id="login-form" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input type="text" onChange={this.setUsername} value={this.state.nick}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" onChange={this.setPassword} value={this.state.password}/>
                                    </div>
                                    <div className="form-group text-center">
                                        <input type="checkbox" className="" name="remember" id="remember"/>
                                        <label htmlFor="remember">Remember me</label>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-sm-6 col-sm-offset-3">
                                                <input type="submit" name="login-submit" id="login-submit" className="form-control btn btn-login" value="Login"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="text-center">
                                                    <a href="#" className="forgot-password">Forgot Password?</a>
                                                </div>
                                            </div>
                                        </div>
                            </div>
                                </form>
                                <div className="row">
                                    Hint: Username = admin, Password = pass
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
