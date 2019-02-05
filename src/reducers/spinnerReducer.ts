import {LOGIN_STARTED, LOGIN_FAILED, LOGIN_SUCCEEDED} from '../actions/loginActions';
import {REGISTRATION_STARTED, REGISTRATION_FAILED, REGISTRATION_SUCCEEDED} from '../actions/signUpActions';
import {combineReducers} from 'redux';
import {
  CREATE_NEW_CHANNEL_ENDED,
  CREATE_NEW_CHANNEL_STARTED
} from '../actions/channelActions';
import {
  MESSAGE_SENDING_ENDED,
  MESSAGE_SENDING_STARTED,
  MESSAGES_RETRIEVING_ENDED,
  MESSAGES_RETRIEVING_STARTED
} from '../actions/messageActions';

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

const asyncSendingMessage = (prevstate: boolean = false, action: Action): boolean => {
  switch (action.type) {
    case MESSAGE_SENDING_STARTED:
      return true;
    case MESSAGE_SENDING_ENDED:
      return false;
    default:
      return prevstate;
  }
};

const asyncChangingChannels = (prevState: boolean = false, action: Action): boolean => {
  switch (action.type) {
    case MESSAGES_RETRIEVING_STARTED:
      return true;
    case MESSAGES_RETRIEVING_ENDED:
      return false;
    default:
      return prevState;
  }
};

export const spinners = combineReducers({
  authPageCount,
  addingNewChannel,
  asyncSendingMessage,
  asyncChangingChannels
});
