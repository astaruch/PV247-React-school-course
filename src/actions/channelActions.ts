import {Dispatch} from 'redux';
import * as channelService from '../services/channelService';
import * as Immutable from 'immutable';
import {IChannel} from '../models/IMessageApp';

export const CHANGING_CHANNEL_STARTED = 'CHANGING_CHANNEL_STARTED';
export const CHANGING_CHANNEL_ENDED = 'CHANGING_CHANNEL_ENDED';

export const changingChannelStarted = (): Action => ({
  type: CHANGING_CHANNEL_STARTED
});

export const changingChannelEnded = (id: Uuid): Action => ({
  type: CHANGING_CHANNEL_ENDED,
  payload: {
    id
  }
});

export const changeChannel = (channelId: Uuid): any => {
  console.log('changeChannel()');
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(changingChannelStarted());

  };
};
