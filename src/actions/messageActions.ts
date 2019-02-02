import {Dispatch} from 'redux';

import {IMessage} from '../models/IMessage';
import * as messageService from '../services/messageService';

export const MESSAGE_SENDING_STARTED = 'MESSAGE_SENDING_STARTED';
export const MESSAGE_SENDING_ENDED = 'MESSAGE_SENDING_ENDED';

const messageSendingStarted = (): Action => ({
  type: MESSAGE_SENDING_STARTED
});

const messageSendingEnded = (message: IMessage, channelId: Uuid): Action => ({
  type: MESSAGE_SENDING_ENDED,
  payload: {
    message,
    channelId
  }
});

export const sendMessage = (value: string, channelId: Uuid, userId: Uuid): any => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(messageSendingStarted());
    console.log(value, channelId, userId);
    const customData = {
      channelId,
      authorId: userId
    };
    const message = await messageService.sendMessage(value, channelId, customData);
    dispatch(messageSendingEnded(message, channelId));
  };
};
