import {MESSAGE_APP_DATA_LOADING_ENDED} from '../actions/globalActions';
import {CHANGING_CHANNEL_ENDED} from '../actions/channelActions';

export function selectedChannel(prevState: Uuid | null = null, action: Action): Uuid | null {
  switch (action.type) {
    // On first load set it to 1st channel
    case MESSAGE_APP_DATA_LOADING_ENDED:
      return action.payload.channels.get(0).id;
    case CHANGING_CHANNEL_ENDED:
      return action.payload.id;
    default:
      return prevState;
  }
}
