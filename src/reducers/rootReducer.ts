import {combineReducers} from 'redux';

import {channels} from './channelsReducer';
import {messages} from './messagesReducer';
import {spinners} from './spinnerReducer';
import {users} from './usersReducer';

import {authPageError} from './authenticationReducer';
import {files} from './filesReducer';

export const rootReducer = combineReducers({
  channels, users, messages, spinners, authPageError, files
});
