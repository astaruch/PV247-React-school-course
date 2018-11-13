import {combineReducers} from 'redux';
import {channels} from './channels';
import {currentUser} from './currentUser';
import {selectedChannel} from './selectedChannel';
import {messages} from './messages';
import {users} from './users';

export const rootReducer = combineReducers({
    users, channels, messages, currentUser, selectedChannel
});
