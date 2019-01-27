import * as React from 'react';
import {Button, Grid, Message} from 'semantic-ui-react';
import Loader from 'react-loader-spinner';

import {LoginContainer} from '../containers/LoginContainer';
import {SignUpContainer} from '../containers/SignUpContainer';
import {LOGIN_PAGE_FAILURES} from '../actions/loginActions';
import {SIGN_UP_PAGE_FAILURES} from '../actions/signUpActions';

export interface IAuthPageStateProps {
  readonly authPageError: LOGIN_PAGE_FAILURES | SIGN_UP_PAGE_FAILURES | null;
}

export interface IState {
  displayLoginPage: boolean;
}

export class AuthPage extends React.PureComponent<IAuthPageStateProps, IState> {
  constructor(props: IAuthPageStateProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      displayLoginPage: true,
    };
  }
  readonly handleClick = (displayLoginPage: boolean): void => this.setState(prevState => ({...prevState, displayLoginPage }));

  render(): JSX.Element {
    const { displayLoginPage } = this.state;
    const { authPageError } = this.props;
    return (
      <div className={'auth-page'}>
        <Grid textAlign="center" verticalAlign="middle" className={'auth-page-grid'}>
          <Grid.Row className={'auth-page-switch'}>
            <Button.Group >
              <Button color={'blue'} size={'huge'}
                      onClick={() => this.handleClick(true)}>
                Log In
              </Button>
              <Button.Or/>
              <Button color={'green'} size={'huge'}
                      onClick={() => this.handleClick(false)}>
                Register an account!
              </Button>
            </Button.Group>
          </Grid.Row>
          <Grid.Row className={'auth-page-input-form'}>
            {displayLoginPage ? <LoginContainer/> : <SignUpContainer/>}
          </Grid.Row>
          <Grid.Row>
            {authPageError && <Message content={authPageError}/>}
          </Grid.Row>
          <Grid.Row>
            <Loader/>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
