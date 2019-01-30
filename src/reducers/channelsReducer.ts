import * as Immutable from 'immutable';
import {combineReducers} from 'redux';
import {CHANNELS_RETRIEVING_ENDED, MESSAGE_APP_DATA_LOADING_ENDED} from '../actions/globalActions';
import {IChannel} from '../models/IChannel';
import {
  CHANGING_CHANNEL_ENDED,
  CHANGING_CHANNEL_NAME_ENDED,
  CHANGING_CHANNEL_NAME_STARTED
} from '../actions/channelActions';

// Used in ChannelItemContainer as data-source
const asMap = (prevState = Immutable.Map<Uuid, IChannel>(), action: Action): Immutable.Map<Uuid, IChannel> => {
  switch (action.type) {
    case CHANNELS_RETRIEVING_ENDED:
      return Immutable.Map(action.payload.channels.map((channel: IChannel) => [channel.id, channel]));

    case CHANGING_CHANNEL_NAME_STARTED:
      const {id, name} = action.payload;
      const updatedChannel = {
        ...prevState.get(id)!,
        name,
        waitingForAsyncRenaming: true
      };
      return prevState.set(id, updatedChannel);

    case CHANGING_CHANNEL_NAME_ENDED:
      const id1 = action.payload.id;
      const updatedChannel1 = {
        ...prevState.get(id1)!,
        waitingForAsyncRenaming: false
      };
      return prevState.set(id1, updatedChannel1);

    default:
      return prevState;
  }
};

// Used in ChannelListContainer as data-source
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
};

export const channels = combineReducers({
  asList,
  asMap,
  selected
});
