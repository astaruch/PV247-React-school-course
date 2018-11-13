import {MESSAGE_APP_LOADING_FINISHED, MESSAGE_APP_LOADING_STARTED} from '../constants/actionTypes';
import {Dispatch} from 'redux';
import {_channels, _messages, _users} from '../common/initialData';
import {IChannelItem} from '../models/IChannelItem';
import {IMessageItem} from '../models/IMessageItem';
import {IUser} from '../models/IUser';
import * as Immutable from 'immutable';
import {channelChange} from './channelActions';


const initialLoadStarted = (): Action<MESSAGE_APP_LOADING_STARTED> => ({
    type: MESSAGE_APP_LOADING_STARTED
});

const initialLoadFinished = (channels: Immutable.List<IChannelItem>,
                             messages: Immutable.List<IMessageItem>,
                             users: Immutable.List<IUser>)
    : Action<MESSAGE_APP_LOADING_FINISHED> => ({
    type: MESSAGE_APP_LOADING_FINISHED,
    payload: {
        channels,
        messages,
        users
    }
});

async function loadMessagesForChannel(channelId: Uuid): Promise<Immutable.List<IMessageItem>> {
    return _messages.filter((message) => message.channelId === channelId);
}

async function loadUsers(): Promise<Immutable.List<IUser>> {
    return _users;
}

async function loadChannels(): Promise<Immutable.List<IChannelItem>> {
    return _channels;
}

export const initialLoad = (): any => {
    return async (dispatch: Dispatch): Promise<void> => {
        dispatch(initialLoadStarted());

        const channels = await loadChannels();
        const selectedChannel = channels.get(0)!;
        const messages = await loadMessagesForChannel(selectedChannel.id);
        const users = await loadUsers();

        console.log('Initial load...');
        dispatch(initialLoadFinished(channels, messages, users));
        dispatch(channelChange(selectedChannel.id));
    };
};
