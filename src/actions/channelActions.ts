import {Dispatch} from 'redux';

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
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(changingChannelStarted());
    dispatch(changingChannelEnded(channelId));
  };
};
