import * as Immutable from 'immutable';
import {IChannelItem} from '../models/IChannelItem';
import {MESSAGE_APP_DATA_LOADED} from '../constants/actionTypes';
import {combineReducers} from 'redux';
//import {IChannel} from '../models/IMessageApp';
//import {CHANNELS_RETRIEVING_ENDED} from '../actions/channelActions';

const byId = (prevState = Immutable.Map<Uuid, IChannelItem>(), action: Action): Immutable.Map<Uuid, IChannelItem> => {
  switch (action.type) {
    case MESSAGE_APP_DATA_LOADED:
      return Immutable.Map(action.payload.channels.map((channel: IChannelItem) => [channel.id, channel]));
    default:
      return prevState;
  }
};

const allIds = (prevState = Immutable.List<Uuid>(), action: Action): Immutable.List<Uuid> => {
  switch (action.type) {
    case MESSAGE_APP_DATA_LOADED:
      return Immutable.List(action.payload.channels.map((channel: IChannelItem) => channel.id));
    default:
      return prevState;
  }
};
//
//const channels = (prevState = Immutable.List<IChannel>(), action: Action): Immutable.List<IChannel> => {
//  switch (action.type) {
//    case CHANNELS_RETRIEVING_ENDED:
//      return {...action.payload.channels};
//    default:
//      return prevState;
//  }
//};

export const channels = combineReducers({
  allIds,
  byId,
//  channels
});
