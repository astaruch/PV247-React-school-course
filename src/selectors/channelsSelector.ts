import {createSelector} from 'reselect';
import * as Immutable from 'immutable';
import {IMessageAppState} from '../models/IMessageApp';
import {IChannelList} from '../models/IChannel';

const getAllChannels = (state: IMessageAppState): IChannelList => state.channels;
const getLoggedUserId = (state: IMessageAppState): Uuid => state.users.currentUser.customData.id;

export const getChannelsForUser = createSelector(
  [getAllChannels, getLoggedUserId],
  (allChannels, userId): Immutable.List<Uuid> => {
    const {asList, asMap} = allChannels;
    const userChannels = asMap.filter((channel) => {
      console.log(channel.customData.usersId);
      return channel.customData.usersId.includes(userId);
    });
    return asList.filter(channelId => userChannels.has(channelId));
  }
);
