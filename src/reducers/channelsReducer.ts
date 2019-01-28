import * as Immutable from 'immutable';
import {IChannelItem} from '../models/IChannelItem';
import {combineReducers} from 'redux';
import {CHANNELS_RETRIEVING_ENDED} from '../actions/globalActions';

const byId = (prevState = Immutable.Map<Uuid, IChannelItem>(), action: Action): Immutable.Map<Uuid, IChannelItem> => {
  switch (action.type) {
    case CHANNELS_RETRIEVING_ENDED:
      return Immutable.Map(action.payload.channels.map((channel: IChannelItem) => [channel.id, channel]));
    default:
      return prevState;
  }
};

const allIds = (prevState = Immutable.List<Uuid>(), action: Action): Immutable.List<Uuid> => {
  switch (action.type) {
    case CHANNELS_RETRIEVING_ENDED:
      return Immutable.List(action.payload.channels.map((channel: IChannelItem) => channel.id));
    default:
      return prevState;
  }
};


export const channels = combineReducers({
  allIds,
  byId,
});
