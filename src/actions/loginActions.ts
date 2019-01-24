import {Dispatch} from 'redux';
import * as authenticationService from '../services/authenticationService';
import {IUser} from '../models/IUser';

export const LOGIN_STARTED = 'LOGIN_STARTED';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export type LOGIN_TYPES = typeof LOGIN_STARTED | typeof LOGIN_FAILED | typeof LOGIN_SUCCESS;

export type LOGIN_NON_EXISTING_EMAIL = 'LOGIN_NON_EXISTING_EMAIL';
export type LOGIN_BAD_PASSWORD = 'LOGIN_BAD_PASSWORD';
export type LOGIN_FAILURE = LOGIN_NON_EXISTING_EMAIL | LOGIN_BAD_PASSWORD;

const authenticationStarted = () => ({
  type: LOGIN_STARTED
});

const authenticationFailed = (error: LOGIN_FAILURE) => ({
  type: LOGIN_FAILED,
  payload: {
    error
  }
});

const authenticationSuccess = (loggedUser: IUser) => ({
  type: LOGIN_SUCCESS,
  payload: {
    currentUser: loggedUser
  }
});

export const tryToLogin = (email: string, password: string): any => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(authenticationStarted());
    console.log(`Trying to login: |${email}|${password}|`);

    const bearerToken = await authenticationService.getBearerTokenForExistingUser(email);
    if (!bearerToken) {
      dispatch(authenticationFailed('LOGIN_NON_EXISTING_EMAIL'));
      return;
    }
    console.log('Token:', bearerToken);

    // E-mail was used somewhere in PV247-API across all project. Need to check if it's in this specific app.
    const existingUser = await authenticationService.getExistingUser(email);
    if (!existingUser) {
      dispatch(authenticationFailed('LOGIN_NON_EXISTING_EMAIL'));
      return;
    }
    console.log('Existing user:', existingUser);

    if (password !== existingUser.password) {
      dispatch(authenticationFailed('LOGIN_BAD_PASSWORD'));
      return;
    }

    localStorage.setItem('LOGGED_USER', JSON.stringify(existingUser));
    dispatch(authenticationSuccess(existingUser));
    console.log('Logged in...');
  };
};
