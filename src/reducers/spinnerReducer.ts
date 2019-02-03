import {LOGIN_STARTED, LOGIN_FAILED, LOGIN_SUCCEEDED} from '../actions/loginActions';
import {REGISTRATION_STARTED, REGISTRATION_FAILED, REGISTRATION_SUCCEEDED} from '../actions/signUpActions';
import {combineReducers} from 'redux';

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

export const spinners = combineReducers({
  authPageCount
});
