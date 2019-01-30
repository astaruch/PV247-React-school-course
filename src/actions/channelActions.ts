import {Dispatch} from 'redux';
import {IChannel, IChannelCustomData} from '../models/IChannel';
import * as channelService from '../services/channelService';


export const CHANGING_CHANNEL_STARTED = 'CHANGING_CHANNEL_STARTED';
export const CHANGING_CHANNEL_ENDED = 'CHANGING_CHANNEL_ENDED';

export const CHANGING_CHANNEL_NAME_STARTED = 'CHANGING_CHANNEL_NAME_STARTED';
export const CHANGING_CHANNEL_NAME_ENDED = 'CHANGING_CHANNEL_NAME_ENDED';

export const CREATE_NEW_CHANNEL_STARTED = 'CREATE_NEW_CHANNEL_STARTED';
export const CREATE_NEW_CHANNEL_SAVING = 'CREATE_NEW_CHANNEL_SAVING';
export const CREATE_NEW_CHANNEL_CANCELED = 'CREATE_NEW_CHANNEL_CANCELED';

export const changingChannelStarted = (): Action => ({
  type: CHANGING_CHANNEL_STARTED
});

export const changingChannelEnded = (id: Uuid): Action => ({
  type: CHANGING_CHANNEL_ENDED,
  payload: {
    id
  }
});

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

export const creatingNewChannelStarted = (): Action => ({
  type: CREATE_NEW_CHANNEL_STARTED
});

export const savingNewChannel = (channel: IChannel): Action => ({
  type: CREATE_NEW_CHANNEL_SAVING,
  payload: {
    channel
  }
});

export const creatingNewChannelCanceled = (): Action => ({
  type: CREATE_NEW_CHANNEL_CANCELED
});

export const changeChannel = (channelId: Uuid): any => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(changingChannelStarted());
    dispatch(changingChannelEnded(channelId));
  };
};

export const changeChannelName = (channel: IChannel, newName: string): any => {
  return async (dispatch: Dispatch): Promise<void> => {
    const {id, numberOfNewMessages, selected, order, usersId} = channel;
    const customData = {numberOfNewMessages, selected, order, usersId};
    dispatch(changingChannelNameStarted(id, newName));
    const renamedChannel = await channelService.renameChannel(id, newName, customData);
    dispatch(changingChannelNameEnded(renamedChannel.id));
  };
};

export const addNewChannel = (): any => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(creatingNewChannelStarted());
  };
};

export const saveNewChannel = (name: string, order: number): any => {
  return async (dispatch: Dispatch): Promise<void> => {
    console.log(`saveNewChannel ${name} ${order}`);
    const customData = {} as IChannelCustomData;
    customData.order = order;
    const newChannel = await channelService.createChannel(name, customData);
    dispatch(savingNewChannel(newChannel));
  };
};

export const cancelChannelCreation = (): any => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(creatingNewChannelCanceled());
    console.log('cancelChannelCreation');
  };
};
