import {Dispatch} from 'redux';
import * as authenticationService from '../services/authenticationService';
import {IUser} from '../models/IUser';

export const REGISTRATION_STARTED = 'REGISTRATION_STARTED';
export const REGISTRATION_FAILED = 'REGISTRATION_FAILED';
export const REGISTRATION_SUCCEEDED = 'REGISTRATION_SUCCEEDED';

export type REGISTRATION_EMAIL_ALREADY_USED = 'REGISTRATION_EMAIL_ALREADY_USED';
export type REGISTRATION_INVALID_EMAIL = 'REGISTRATION_INVALID_EMAIL';

export type SIGN_UP_PAGE_FAILURES = REGISTRATION_EMAIL_ALREADY_USED | REGISTRATION_INVALID_EMAIL;

const registrationStarted = () => ({
  type: REGISTRATION_STARTED
});

const registrationFailed = (error: SIGN_UP_PAGE_FAILURES) => ({
  type: REGISTRATION_FAILED,
  payload: {
    authPageError: error
  }
});

const registrationSucceeded = (newUser: IUser) => ({
  type: REGISTRATION_SUCCEEDED,
  payload: {
    currentUser: newUser
  }
});

const validEmail = (email: string): boolean => {
  return /\S+@\S+\.\S+/.test(email);
};

export const registerNewUser = (email: string, password: string): any => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(registrationStarted());
    if (!validEmail(email)) {
      dispatch(registrationFailed('REGISTRATION_INVALID_EMAIL'));
      return;
    }

    let bearerToken = await authenticationService.getBearerTokenForExistingUser(email);
    if (bearerToken) {
      dispatch(registrationFailed('REGISTRATION_EMAIL_ALREADY_USED'));
      return;
    }

    const newUser = await authenticationService.registerNewUser(email, password);

    localStorage.setItem('LOGGED_USER', JSON.stringify(newUser));
    dispatch(registrationSucceeded(newUser));
    bearerToken = await authenticationService.getBearerTokenForExistingUser(email);
    localStorage.setItem('BEARER_TOKEN', JSON.stringify(bearerToken));
  };
};
