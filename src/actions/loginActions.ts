import {Dispatch} from 'redux';
import * as authenticationService from '../services/authenticationService';
import {IUser} from '../models/IUser';

export const LOGIN_STARTED = 'LOGIN_STARTED';
//export type LOGIN_STARTED = typeof LOGIN_STARTED;
export const LOGIN_FAILED = 'LOGIN_FAILED';
//export type LOGIN_FAILED = typeof LOGIN_FAILED;
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
//export type LOGIN_SUCCESS = typeof LOGIN_SUCCESS;
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
    console.log('Token:', bearerToken);
    if (bearerToken !== null) {
      // E-mail was used somewhere in PV247-API across all project. Need to check if it's in this specific app.
      const existingUser = await authenticationService.getExistingUser(email);
      console.log('Existing user:', existingUser);
      if (existingUser === null) {
        dispatch(authenticationFailed('LOGIN_NON_EXISTING_EMAIL'));
        return;
      } else {
        if (password === existingUser.password) {
          localStorage.setItem('LOGGED_USER', JSON.stringify(existingUser));
          dispatch(authenticationSuccess(existingUser));
          console.log('Logged in...');
          return;
        } else {
          dispatch(authenticationFailed('LOGIN_BAD_PASSWORD'));
          return;
        }
      }
    } else {
      dispatch(authenticationFailed('LOGIN_NON_EXISTING_EMAIL'));
      return;
    }
  };
};
