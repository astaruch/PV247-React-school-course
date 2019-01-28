import * as Immutable from 'immutable';
import {Dispatch} from 'redux';

import * as channelService from '../services/channelService';
import {IChannel} from '../models/IMessageApp';

export const CHANNELS_RETRIEVING_STARTED = 'CHANNELS_RETRIEVING_STARTED';
export const CHANNELS_RETRIEVING_ENDED = 'CHANNELS_RETRIEVING_ENDED';

export const channelsRetrievingStarted = () => ({
  type: CHANNELS_RETRIEVING_STARTED
});

export const channelsRetrievingEnded = (channels: Immutable.List<IChannel> = Immutable.List()): Action => ({
  type: CHANNELS_RETRIEVING_ENDED,
  payload: {
    channels
  }
});

export const getChannelsFromServer = (): any => {
  return async (dispatch: Dispatch): Promise<void> => {
    console.log('getChannelsFromServer');
    dispatch(channelsRetrievingStarted());
    const channels = await channelService.getChannels();
    dispatch(channelsRetrievingEnded(channels));
  };
};

