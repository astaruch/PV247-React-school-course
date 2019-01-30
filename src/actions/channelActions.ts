import {Dispatch} from 'redux';
import {IChannel} from '../models/IChannel';
import * as channelService from '../services/channelService';


export const CHANGING_CHANNEL_STARTED = 'CHANGING_CHANNEL_STARTED';
export const CHANGING_CHANNEL_ENDED = 'CHANGING_CHANNEL_ENDED';

export const CHANGING_CHANNEL_NAME_STARTED = 'CHANGING_CHANNEL_NAME_STARTED';
export const CHANGING_CHANNEL_NAME_ENDED = 'CHANGING_CHANNEL_NAME_ENDED';

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
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(changingChannelStarted());
    dispatch(changingChannelEnded(channelId));
  };
};


export const changingChannelNameStarted = (id: Uuid, name: string): Action => ({
  type: CHANGING_CHANNEL_NAME_STARTED,
  payload: {
    id,
    name
  }
});

export const changingChannelNameEnded = (id: Uuid): Action => ({
  type: CHANGING_CHANNEL_NAME_ENDED,
  payload: {
    id
  }
});

export const changeChannelName = (channel: IChannel, newName: string): any => {
  return async (dispatch: Dispatch): Promise<void> => {
    const {id, numberOfNewMessages, selected, order, usersId} = channel;
    const customData = {numberOfNewMessages, selected, order, usersId};
    dispatch(changingChannelNameStarted(id, newName));
    const renamedChannel = await channelService.renameChannel(id, newName, customData);
    dispatch(changingChannelNameEnded(renamedChannel.id));
  };
};
