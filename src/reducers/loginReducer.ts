import {IUser} from '../models/IUser';
import {LOGIN_FAILED, LOGIN_SUCCESS} from '../actions/loginActions';

export function currentUser(prevState: IUser | null = null, action: Action): IUser | null {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...action.payload.currentUser};
    case LOGIN_FAILED:
      return null;
    default:
      return prevState;
  }
}
