import * as Immutable from 'immutable';
import {combineReducers} from 'redux';
import {CHANNELS_RETRIEVING_ENDED, MESSAGE_APP_DATA_LOADING_ENDED} from '../actions/globalActions';
import {IChannel} from '../models/IChannel';
import {CHANGING_CHANNEL_ENDED} from '../actions/channelActions';

const asMap = (prevState = Immutable.Map<Uuid, IChannel>(), action: Action): Immutable.Map<Uuid, IChannel> => {
  switch (action.type) {
    case CHANNELS_RETRIEVING_ENDED:
      return Immutable.Map(action.payload.channels.map((channel: IChannel) => [channel.id, channel]));
    default:
      return prevState;
  }
};

const asList = (prevState = Immutable.List<Uuid>(), action: Action): Immutable.List<Uuid> => {
  switch (action.type) {
    case CHANNELS_RETRIEVING_ENDED:
      return Immutable.List(action.payload.channels.map((channel: IChannel) => channel.id));
    default:
      return prevState;
  }
};

const selected = (prevState: Uuid | null = null, action: Action): Uuid | null => {
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

export const channels = combineReducers({
  asList,
  asMap,
  selected
});
