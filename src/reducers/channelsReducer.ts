import * as Immutable from 'immutable';
import {combineReducers} from 'redux';
import {CHANNELS_RETRIEVING_ENDED, MESSAGE_APP_DATA_LOADING_ENDED} from '../actions/globalActions';
import {IChannel} from '../models/IChannel';
import {
  CHANGING_CHANNEL_ENDED,
  CHANGING_CHANNEL_NAME_ENDED,
  CHANGING_CHANNEL_NAME_STARTED,
  CREATE_NEW_CHANNEL_STARTED,
  CREATE_NEW_CHANNEL_ENDED,
  DELETE_CHANNEL_ENDED, EDIT_CHANNEL_STARTED, EDIT_CHANNEL_ENDED
} from '../actions/channelActions';

// Used in ChannelItemContainer as data-source
const asMap = (prevState = Immutable.Map<Uuid, IChannel>(), action: Action): Immutable.Map<Uuid, IChannel> => {
  switch (action.type) {
    case CHANNELS_RETRIEVING_ENDED:
      return Immutable.Map(action.payload.channels.map((channel: IChannel) => [channel.id, channel]));

    case CHANGING_CHANNEL_NAME_STARTED:
      const channelRename = prevState.get(action.payload.id)!;
      return prevState.set(action.payload.id,
        {
          ...channelRename,
          name: action.payload.name,
          customData: {
            ...channelRename.customData,
            asyncRenaming: true
          }
        }
      );

    case CHANGING_CHANNEL_NAME_ENDED:
      const renamed = prevState.get(action.payload.id)!;
      return prevState.set(action.payload.id,
        {
          ...renamed,
          customData: {
            ...renamed.customData,
            asyncRenaming: false
          }
        }
      );

    case EDIT_CHANNEL_STARTED:
      const editStart = prevState.get(action.payload.id)!;
      return prevState.set(action.payload.id,
        {
          ...editStart,
          customData: {
            ...editStart.customData,
            editing: true
          }
        });

    case EDIT_CHANNEL_ENDED:
      const editEnd = prevState.get(action.payload.id)!;
      return prevState.set(action.payload.id,
        {
          ...editEnd,
          customData: {
            ...editEnd.customData,
            editing: false
          }
        });

    case CREATE_NEW_CHANNEL_ENDED:
      return prevState.set(action.payload.channel.id, action.payload.channel);

    case DELETE_CHANNEL_ENDED:
      return prevState.delete(action.payload.id);

    default:
      return prevState;
  }
};

// Used in ChannelListContainer as data-source
const asList = (prevState = Immutable.List<Uuid>(), action: Action): Immutable.List<Uuid> => {
  switch (action.type) {
    case CHANNELS_RETRIEVING_ENDED:
      return Immutable.List(action.payload.channels.map((channel: IChannel) => channel.id));

    case CREATE_NEW_CHANNEL_ENDED:
      return prevState.push(action.payload.channel.id);

    case DELETE_CHANNEL_ENDED:
      return prevState.filter((channelId) => channelId !== action.payload.id);

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

const newChannel = (prevState: IChannel | null = null, action: Action): IChannel | null => {
  switch (action.type) {
    case CREATE_NEW_CHANNEL_STARTED:
      return {} as IChannel;
    case CREATE_NEW_CHANNEL_ENDED:
      return null;
    default:
      return prevState;
  }
};

export const channels = combineReducers({
  asList,
  asMap,
  selected,
  newChannel,
});
