import {
  MESSAGE_APP_CHANNEL_SELECTED,
  MESSAGE_APP_DATA_LOADED,
  MESSAGE_APP_MESSAGE_SUBMITTED,
  MESSAGE_APP_PROFILE_UPDATED
} from '../constants/actionTypes';
import {IUser} from '../models/IUser';
import * as Immutable from 'immutable';
import {IChannelItem} from '../models/IChannelItem';
import {IMessageItem} from '../models/IMessageItem';

export const dataLoaded = (channels: Immutable.List<IChannelItem>,
                           messages: Immutable.List<IMessageItem>,
                           users: Immutable.List<IUser>): Action => ({
  type: MESSAGE_APP_DATA_LOADED,
  payload: {
    channels,
    messages,
    users
  }
});

export const channelSelected = (channel: IChannelItem): Action => ({
  type: MESSAGE_APP_CHANNEL_SELECTED,
  payload: {
    channel
  }
});

export const messageSubmitted = (message: IMessageItem): Action => ({
  type: MESSAGE_APP_MESSAGE_SUBMITTED,
  payload: {
    message
  }
});

export const profileUpdated = (user: IUser): Action => ({
  type: MESSAGE_APP_PROFILE_UPDATED,
  payload: {
    user
  }
});
