import {combineReducers} from 'redux';
import {channels} from './channels';
import {selectedChannel} from './selectedChannel';
import {messages} from './messages';
import {users} from './users';
import {currentUser} from './loginReducer';

export const rootReducer = combineReducers({
  users, channels, messages, currentUser, selectedChannel
});
