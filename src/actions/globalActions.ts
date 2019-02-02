import * as Immutable from 'immutable';
import {Dispatch} from 'redux';

import * as channelService from '../services/channelService';
import * as messageService from '../services/messageService';
import * as userService from '../services/userService';

import {IChannel} from '../models/IChannel';
import {IMessage} from '../models/IMessage';
import {IUser} from '../models/IUser';
import {messagesRetrievingEnded, messagesRetrievingStarted} from './messageActions';

export const CHANNELS_RETRIEVING_STARTED = 'CHANNELS_RETRIEVING_STARTED';
export const CHANNELS_RETRIEVING_ENDED = 'CHANNELS_RETRIEVING_ENDED';

export const USERS_RETRIEVING_STARTED = 'USERS_RETRIEVING_STARTED';
export const USERS_RETRIEVING_ENDED = 'USERS_RETRIEVING_ENDED';

export const MESSAGE_APP_DATA_LOADING_STARTED = 'MESSAGE_APP_DATA_LOADING_STARTED';
export const MESSAGE_APP_DATA_LOADING_ENDED = 'MESSAGE_APP_DATA_LOADING_ENDED';

const channelsRetrievingStarted = () => ({
  type: CHANNELS_RETRIEVING_STARTED
});

const channelsRetrievingEnded = (channels: Immutable.List<IChannel> = Immutable.List()): Action => ({
  type: CHANNELS_RETRIEVING_ENDED,
  payload: {
    channels
  }
});

const usersRetrievingStarted = () => ({
  type: USERS_RETRIEVING_STARTED
});

const usersRetrievingEnded = (users: Immutable.List<IUser> = Immutable.List()): Action => ({
  type: USERS_RETRIEVING_ENDED,
  payload: {
    users
  }
});

const messageAppDataLoadingStarted = () => ({
  type: MESSAGE_APP_DATA_LOADING_STARTED
});

const messageAppDataLoadingEnded = (
  channels: Immutable.List<IChannel>,
  messages: Immutable.List<IMessage>,
  users: Immutable.List<IUser>) => (
  {
    type: MESSAGE_APP_DATA_LOADING_ENDED,
    payload: {
      channels,
      messages,
      users
    }
  }
);

export const loadDataFromServer = (): any => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(messageAppDataLoadingStarted());

    dispatch(channelsRetrievingStarted());
    const channels = await channelService.getChannels();
    dispatch(channelsRetrievingEnded(channels));

    dispatch(usersRetrievingStarted());
    const users = await userService.getUsers();
    dispatch(usersRetrievingEnded(users));

    const firstChannelId = channels.get(0)!.id;
    let messages = Immutable.List<IMessage>();
    if (firstChannelId) {
      dispatch(messagesRetrievingStarted());
      messages = await messageService.getMessages(firstChannelId);
      dispatch(messagesRetrievingEnded(messages, firstChannelId));
    }

    dispatch(messageAppDataLoadingEnded(channels, messages, users));
  };
};
