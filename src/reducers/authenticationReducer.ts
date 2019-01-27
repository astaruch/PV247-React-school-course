import {IUser} from '../models/IUser';
import {LOGIN_FAILED, LOGIN_SUCCEEDED} from '../actions/loginActions';
import {REGISTRATION_FAILED, REGISTRATION_SUCCEEDED} from '../actions/signUpActions';

export function currentUser(prevState: IUser | null = null, action: Action): IUser | null {
  switch (action.type) {
    case LOGIN_SUCCEEDED:
    case REGISTRATION_SUCCEEDED:
      return {...action.payload.currentUser};
    case LOGIN_FAILED:
    case REGISTRATION_FAILED:
      return null;
    default:
      return prevState;
  }
}

export const authPageError = (prevState: any | null = null, action: Action) => {
  switch (action.type) {
    case LOGIN_SUCCEEDED:
    case REGISTRATION_SUCCEEDED:
      return null;
    case LOGIN_FAILED:
    case REGISTRATION_FAILED:
      return action.payload.authPageError;
    default:
      return prevState;
  }
};
