import * as Immutable from 'immutable';
import {combineReducers} from 'redux';
import {CHANNELS_RETRIEVING_ENDED} from '../actions/globalActions';
import {IChannel} from '../models/IMessageApp';

const byId = (prevState = Immutable.Map<Uuid, IChannel>(), action: Action): Immutable.Map<Uuid, IChannel> => {
  switch (action.type) {
    case CHANNELS_RETRIEVING_ENDED:
      return Immutable.Map(action.payload.channels.map((channel: IChannel) => [channel.id, channel]));
    default:
      return prevState;
  }
};

const allIds = (prevState = Immutable.List<Uuid>(), action: Action): Immutable.List<Uuid> => {
  switch (action.type) {
    case CHANNELS_RETRIEVING_ENDED:
      return Immutable.List(action.payload.channels.map((channel: IChannel) => channel.id));
    default:
      return prevState;
  }
};


export const channels = combineReducers({
  allIds,
  byId,
});
