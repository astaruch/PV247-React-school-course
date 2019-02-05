import {createSelector} from 'reselect';
import * as Immutable from 'immutable';
import {IMessageAppState} from '../models/IMessageApp';
import {IChannel} from '../models/IChannel';
import {IUser, IUserList} from '../models/IUser';

const getCurrentChannelId = (state: IMessageAppState): Uuid => state.channels.selected;
const getAllChannels = (state: IMessageAppState): Immutable.Map<Uuid, IChannel> => state.channels.asMap;
const getAllUsers = (state: IMessageAppState): IUserList => state.users;

export const getUsersForChannel = createSelector(
  [getCurrentChannelId, getAllChannels, getAllUsers],
  (currentChannelId, allChannels, allUsers): Immutable.Map<Uuid, IUser> => {
    const channel = allChannels.get(currentChannelId)!;
    const usersId = channel.customData.usersId;
    return allUsers.asMap.filter((userId) => usersId.contains(userId.customData.id));
  }
);
