import * as React from 'react';
import {ChangeEvent, FormEvent} from 'react';
import {Button, Form, Grid, Message, Segment} from 'semantic-ui-react';
import {LOGIN_PAGE_FAILURES} from '../actions/loginActions';


export interface ISignUpState {
  email: string;
  password: string;
}

export interface ISignUpStateProps {
  readonly authPageError: LOGIN_PAGE_FAILURES | null;
}

export interface ISignUpDispatchProps {
  onLogin(username: string, password: string): void;
}

type IProps = ISignUpStateProps & ISignUpDispatchProps;

export class SignUp extends React.PureComponent<IProps, ISignUpState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  private onSubmit = (e: FormEvent): void => {
    e.preventDefault();
    this.props.onLogin(this.state.email, this.state.password);
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

      <Grid.Column className={'login-form-grid-column'}>
        <Form size="large" method={'post'} onSubmit={this.onSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              autoFocus
              icon="user"
              iconPosition="left"
              placeholder="New e-mail"
              name="username"
              value={this.state.email}
              onChange={this.onChange}
            />
            <Form.Input
              fluid
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
            <Message
              content={this.props.authPageError ? this.props.authPageError : 'No-error'}
            />
          </Segment>
        </Form>
      </Grid.Column>

    );
  }
}