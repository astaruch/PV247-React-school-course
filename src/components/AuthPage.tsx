import * as React from 'react';
import {LoginContainer} from '../containers/LoginContainer';
import {SignUpContainer} from '../containers/SignUpContainer';
import {Button, Grid} from 'semantic-ui-react';

interface IAuthPageProps {

}

export interface IState {
  displayLoginPage: boolean;
}

export class AuthPage extends React.PureComponent<IAuthPageProps, IState> {
  constructor(props: IAuthPageProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      displayLoginPage: true,
    };

  }
  readonly handleClick = (displayLoginPage: boolean): void => this.setState(prevState => ({...prevState, displayLoginPage }));

  render(): JSX.Element {
    const { displayLoginPage } = this.state;
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
        </Grid>
      </div>
    );
  }
}
