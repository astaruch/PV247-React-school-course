import {combineReducers} from 'redux';
import {channelsReducer} from './channelsReducer';
import {currentUserReducer} from './currentUserReducer';
import {selectedChannelReducer} from './selectedChannelReducer';
import {messagesReducer} from './messagesReducer';
import {loggedInReducer} from './loggedInReducer';

export const rootReducer = combineReducers({
    channelsReducer, currentUserReducer,
    loggedInReducer, messagesReducer, selectedChannelReducer,
});
