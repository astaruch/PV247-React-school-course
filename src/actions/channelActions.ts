import {Dispatch} from 'redux';

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

export const changeChannelName = (channelId: Uuid, name: string): any => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(changingChannelNameStarted(channelId, name));
    console.log(channelId, name);
    setTimeout(() => dispatch(changingChannelNameEnded(channelId)), 1000);
  };
};
