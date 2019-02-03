import * as React from 'react';
import {ChangeEvent, FormEvent} from 'react';
import {Button, Form} from 'semantic-ui-react';


export interface ISignUpState {
  email: string;
  password: string;
}

export interface ISignUpDispatchProps {
  onSignUp(username: string, password: string): void;
}

export class SignUp extends React.PureComponent<ISignUpDispatchProps, ISignUpState> {
  constructor(props: ISignUpDispatchProps) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  private onSubmit = (e: FormEvent): void => {
    e.preventDefault();
    this.props.onSignUp(this.state.email, this.state.password);
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
          autoFocus
          icon="user"
          iconPosition="left"
          placeholder="New e-mail"
          name="email"
          value={this.state.email}
          onChange={this.onChange}
        />
        <Form.Input
          icon="lock"
          iconPosition="left"
          placeholder="New password"
          name="password"
          value={this.state.password}
          onChange={this.onChange}
          type="password"
        />
        <Button color="green" fluid size="large">
          Sign Up
        </Button>
      </Form>

    );
  }
}
