import {Dispatch} from 'redux';

import {IMessage} from '../models/IMessage';
import * as messageService from '../services/messageService';
import * as Immutable from 'immutable';

export const MESSAGE_SENDING_STARTED = 'MESSAGE_SENDING_STARTED';
export const MESSAGE_SENDING_ENDED = 'MESSAGE_SENDING_ENDED';

export const MESSAGES_RETRIEVING_STARTED = 'MESSAGES_RETRIEVING_STARTED';
export const MESSAGES_RETRIEVING_ENDED = 'MESSAGES_RETRIEVING_ENDED';

export const MESSAGE_UP_VOTE_STARTED = 'MESSAGE_UP_VOTE_STARTED';
export const MESSAGE_UP_VOTE_ENDED = 'MESSAGE_UP_VOTE_ENDED';
export const MESSAGE_DOWN_VOTE_STARTED = 'MESSAGE_DOWN_VOTE_STARTED';
export const MESSAGE_DOWN_VOTE_ENDED = 'MESSAGE_DOWN_VOTE_ENDED';

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

export const messagesRetrievingStarted = () => ({
  type: MESSAGES_RETRIEVING_STARTED,
});

export const messagesRetrievingEnded = (messages: Immutable.List<IMessage> = Immutable.List(),
                                        channelId: Uuid): Action => ({
  type: MESSAGES_RETRIEVING_ENDED,
  payload: {
    messages,
    channelId
  }
});

const messageUpVoteStarted = () => ({
  type: MESSAGE_UP_VOTE_STARTED
});

const messageUpVoteEnded = (message: IMessage, channelId: Uuid) => ({
  type: MESSAGE_UP_VOTE_ENDED,
  payload: {
    message,
    channelId
  }
});

const messageDownVoteStarted = () => ({
  type: MESSAGE_DOWN_VOTE_STARTED
});

const messageDownVoteEnded = (message: IMessage, channelId: Uuid) => ({
  type: MESSAGE_DOWN_VOTE_ENDED,
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
      likes: Immutable.Set<Uuid>(),
      dislikes: Immutable.Set<Uuid>(),
      channelId,
      authorId: userId
    };
    const message = await messageService.sendMessage(value, channelId, customData);
    dispatch(messageSendingEnded(message, channelId));
  };
};

export const messageUpVote = (message: IMessage, userId: Uuid): any => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(messageUpVoteStarted());
    const {value, customData} = message;
    const updatedCustomData = {
      ...customData,
      likes: Immutable.Set<Uuid>(customData.likes).add(userId),
      dislikes: Immutable.Set<Uuid>(customData.dislikes).delete(userId),
    };
    const updatedMessage = await messageService.updateMessage(
      value, customData.channelId, updatedCustomData, message.id);
    console.log('Like :)');
    dispatch(messageUpVoteEnded(updatedMessage, customData.channelId));
  };
};

export const messageDownVote = (message: IMessage, userId: Uuid): any => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(messageDownVoteStarted());
    const {value, customData} = message;
    const updatedCustomData = {
      ...customData,
      likes: Immutable.Set<Uuid>(customData.likes).delete(userId),
      dislikes: Immutable.Set<Uuid>(customData.dislikes).add(userId),
    };
    const updatedMessage = await messageService.updateMessage(
      value, customData.channelId, updatedCustomData, message.id);
    console.log('Dislike :(');
    dispatch(messageDownVoteEnded(updatedMessage, customData.channelId));
  };
};
