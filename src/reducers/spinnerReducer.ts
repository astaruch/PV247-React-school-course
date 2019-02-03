import {LOGIN_STARTED, LOGIN_FAILED, LOGIN_SUCCEEDED} from '../actions/loginActions';
import {REGISTRATION_STARTED, REGISTRATION_FAILED, REGISTRATION_SUCCEEDED} from '../actions/signUpActions';
import {combineReducers} from 'redux';
import {CREATE_NEW_CHANNEL_ENDED, CREATE_NEW_CHANNEL_STARTED} from '../actions/channelActions';

const authPageCount = (prevState: number = 0, action: Action): number => {
  switch (action.type) {
    case LOGIN_STARTED:
    case REGISTRATION_STARTED:
      return prevState + 1;
    case LOGIN_FAILED:
    case LOGIN_SUCCEEDED:
    case REGISTRATION_FAILED:
    case REGISTRATION_SUCCEEDED:
      return prevState - 1;
    default:
      return prevState;
  }
};

const addingNewChannel = (prevState: boolean = false, action: Action): boolean => {
  switch (action.type) {
    case CREATE_NEW_CHANNEL_STARTED:
      return true;
    case CREATE_NEW_CHANNEL_ENDED:
      return false;
    default:
      return prevState;
  }
};

export const spinners = combineReducers({
  authPageCount,
  addingNewChannel
});
