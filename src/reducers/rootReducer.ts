import {combineReducers} from 'redux';
import {channels} from './channelsReducer';
import {selectedChannel} from './selectedChannel';
import {messages} from './messages';
import {users} from './users';
import {currentUser, authPageError} from './authenticationReducer';
import {asyncOperationsCount} from './spinnerReducer';

export const rootReducer = combineReducers({
  users, channels, messages, currentUser, selectedChannel, authPageError,
  asyncOperationsCount
});
