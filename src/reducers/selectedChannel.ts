import {MESSAGE_APP_CHANNEL_SELECTED, MESSAGE_APP_DATA_LOADED} from '../constants/actionTypes';

export function selectedChannel(prevState: Uuid | null = null, action: Action): Uuid | null {
    switch (action.type) {
        case MESSAGE_APP_DATA_LOADED:
            return action.payload.channels.get(0);
        case MESSAGE_APP_CHANNEL_SELECTED:
            return action.payload.channel.id;
        default:
            return prevState;
    }
}
