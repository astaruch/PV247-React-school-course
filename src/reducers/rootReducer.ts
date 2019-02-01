import {combineReducers} from 'redux';
import {channels} from './channelsReducer';
import {messages} from './messages';
import {users} from './usersReducer';
import {authPageError} from './authenticationReducer';
import {asyncOperationsCount} from './spinnerReducer';

export const rootReducer = combineReducers({
  users, channels, messages, authPageError, asyncOperationsCount
});
