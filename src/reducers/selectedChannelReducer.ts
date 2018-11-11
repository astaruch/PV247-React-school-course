import {MESSAGE_APP_CHANNEL_CHANGE_FINISHED, MESSAGE_APP_CHANNEL_CHANGE_STARTED, MESSAGE_APP_CHANNELS_ACTIONS} from '../constants/actionTypes';

export function selectedChannelReducer(prevState = null,
                                       action: Action<MESSAGE_APP_CHANNELS_ACTIONS>): null | Uuid {
    switch (action.type) {
        case MESSAGE_APP_CHANNEL_CHANGE_STARTED:
            return prevState;
        case MESSAGE_APP_CHANNEL_CHANGE_FINISHED:
            return action.payload.id;
        default:
            return prevState;
    }
}
