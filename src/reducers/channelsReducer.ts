import * as Immutable from 'immutable';
import {IChannelItem} from '../models/IChannelItem';
import {MESSAGE_APP_CHANNELS_ACTIONS, MESSAGE_APP_LOADING_FINISHED} from '../constants/actionTypes';
import {combineReducers} from 'redux';

const byId = (prevState = Immutable.Map<Uuid, IChannelItem>(),
              action: Action<MESSAGE_APP_CHANNELS_ACTIONS>): Immutable.Map<Uuid, IChannelItem> => {
    switch (action.type) {
        case MESSAGE_APP_LOADING_FINISHED:
            return Immutable.Map(action.payload.channels.map((channel: IChannelItem) => [channel.id, channel]));
        default:
            return prevState;
    }
};

const allIds = (prevState = Immutable.List<Uuid>(),
                action: Action<MESSAGE_APP_CHANNELS_ACTIONS>): Immutable.List<Uuid> => {
    switch (action.type) {
        case MESSAGE_APP_LOADING_FINISHED:
            return Immutable.List(action.payload.channels.map((channel: IChannelItem) => channel.id));
        default:
            return prevState;
    }
};

export const channelsReducer = combineReducers({
    allIds,
    byId
});
