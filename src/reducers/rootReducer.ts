import {combineReducers} from 'redux';
import {channels} from './channels';
import {selectedChannel} from './selectedChannel';
import {messages} from './messages';
import {users} from './users';
import {currentUser, loginPageError} from './loginReducer';

export const rootReducer = combineReducers({
  users, channels, messages, currentUser, selectedChannel, loginPageError
});
