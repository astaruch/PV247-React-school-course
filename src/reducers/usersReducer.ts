import * as Immutable from 'immutable';
import {IUser} from '../models/IUser';
import {MESSAGE_APP_PROFILE_UPDATED} from '../constants/actionTypes';
import {combineReducers} from 'redux';
import {USERS_RETRIEVING_ENDED} from '../actions/globalActions';

const asMap = (prevState = Immutable.Map<Uuid, IUser>(), action: Action): Immutable.Map<Uuid, IUser> => {
  switch (action.type) {
    case USERS_RETRIEVING_ENDED:
      return Immutable.Map(action.payload.users.map((user: IUser) => [user.id, user]));

    case MESSAGE_APP_PROFILE_UPDATED:
      return prevState.set(action.payload.user.id, action.payload.user);

    default:
      return prevState;
  }
};

const asList = (prevState = Immutable.List<Uuid>(), action: Action): Immutable.List<Uuid> => {
  switch (action.type) {
    case USERS_RETRIEVING_ENDED:
      return Immutable.List(action.payload.users.map((user: IUser) => user.id));

    default:
      return prevState;
  }
};

export const users = combineReducers({
  asMap,
  asList
});
