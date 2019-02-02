import {combineReducers} from 'redux';

import {channels} from './channelsReducer';
import {messages} from './messagesReducer';
import {users} from './usersReducer';

import {authPageError} from './authenticationReducer';
import {asyncOperationsCount} from './spinnerReducer';

export const rootReducer = combineReducers({
  channels, users, messages, authPageError, asyncOperationsCount
});
