import * as React from 'react';
import {ChangeEvent, FormEvent} from 'react';
import {Button, Form, Grid, Message, Segment} from 'semantic-ui-react';
import {LOGIN_PAGE_FAILURES} from '../actions/loginActions';


export interface ILoginState {
  username: string;
  password: string;
}

export interface ILoginStateProps {
  readonly authPageError: LOGIN_PAGE_FAILURES | null;
}

export interface ILoginDispatchProps {
  onLogin(username: string, password: string): void;
}

type IProps = ILoginStateProps & ILoginDispatchProps;

export class Login extends React.PureComponent<IProps, ILoginState> {
  constructor(props: IProps) {
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

          <Grid.Column className={'login-form-grid-column'}>
            <Form size="large" method={'post'} onSubmit={this.onSubmit}>
              <Segment stacked>
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
                <Message
                  content={this.props.authPageError ? this.props.authPageError : 'No-error'}
                />
              </Segment>
            </Form>
          </Grid.Column>

    );
  }
}
