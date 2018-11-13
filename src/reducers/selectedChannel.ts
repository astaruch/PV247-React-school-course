import {MESSAGE_APP_CHANNEL_SELECTED} from '../constants/actionTypes';

export function selectedChannel(prevState: Uuid | null = null, action: Action): Uuid | null {
    switch (action.type) {
        case MESSAGE_APP_CHANNEL_SELECTED:
            return action.payload.id;
        default:
            return prevState;
    }
}
