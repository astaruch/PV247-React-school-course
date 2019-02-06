import * as Immutable from 'immutable';
import {combineReducers} from 'redux';
import {IUser} from '../models/IUser';
import {USERS_RETRIEVING_ENDED} from '../actions/globalActions';
import {UPDATE_USER_ENDED, USER_LOGGED_OUT} from '../actions/userActions';
import {LOGIN_FAILED, LOGIN_SUCCEEDED} from '../actions/loginActions';
import {REGISTRATION_FAILED, REGISTRATION_SUCCEEDED} from '../actions/signUpActions';

const asMap = (prevState = Immutable.Map<Uuid, IUser>(), action: Action): Immutable.Map<Uuid, IUser> => {
    switch (action.type) {
      case USERS_RETRIEVING_ENDED:
        return Immutable.Map(action.payload.users.map((user: IUser) => [user.customData.id, user]));

      case UPDATE_USER_ENDED:
        return prevState.set(action.payload.user.customData.id, action.payload.user);

      default:
        return prevState;
    }
  }
;

const asList = (prevState = Immutable.List<Uuid>(), action: Action): Immutable.List<Uuid> => {
  switch (action.type) {
    case USERS_RETRIEVING_ENDED:
      return Immutable.List(action.payload.users.map((user: IUser) => user.customData.id));

    default:
      return prevState;
  }
};

const currentUser = (prevState: IUser | null = null, action: Action): IUser | null => {
  switch (action.type) {
    case LOGIN_SUCCEEDED:
    case REGISTRATION_SUCCEEDED:
      return {...action.payload.currentUser};

    case LOGIN_FAILED:
    case REGISTRATION_FAILED:
    case USER_LOGGED_OUT:
      return null;

    case UPDATE_USER_ENDED:
      return {...action.payload.user};

    default:
      return prevState;
  }
};

export const users = combineReducers({
  asMap,
  asList,
  currentUser
});

