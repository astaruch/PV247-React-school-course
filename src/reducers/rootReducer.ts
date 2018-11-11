import {IMessageAppState} from '../models/IMessageApp';
import {channelsReducer} from './channelsReducer';
import {messagesReducer} from './messagesReducer';
import {usersReducer} from './usersReducer';
import {loggedInReducer} from './loggedInReducer';
import {selectedChannelReducer} from './selectedChannelReducer';
import {currentUserReducer} from './currentUserReducer';

export const rootReducer = (prevState = {} as IMessageAppState, action: Action<any>): IMessageAppState => ({
    messages: messagesReducer(prevState.messages, action),
    channels: channelsReducer(prevState.channels, action),
    users: usersReducer(prevState.users, action),
    logged: loggedInReducer(prevState.logged, action),
    currentUser: currentUserReducer(prevState.currentUser, action),
    selectedChannel: selectedChannelReducer(prevState.selectedChannel, action),
});
