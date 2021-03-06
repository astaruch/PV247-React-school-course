import * as React from 'react';
import {ChangeEvent, FormEvent} from 'react';
import {Button, Form} from 'semantic-ui-react';


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
      <Form className={'auth-page-input-form'} method={'post'} onSubmit={this.onSubmit}>
          <Form.Input
            fluid
            autoFocus
            icon="user"
            iconPosition="left"
            placeholder="Your e-mail"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Your password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            type="password"
          />
          <Button color="blue" fluid size="large">
            Log In
          </Button>
      </Form>
    );
  }
}
