//import {createSelector} from 'reselect';
//import * as Immutable from 'immutable';
//import {IMessageAppState} from '../models/IMessageApp';
//import {IChannel, IChannelList} from '../models/IChannel';
//import {IUserList} from '../models/IUser';
//
//const getCurrentChannelId = (state: IMessageAppState): Uuid => state.channels.selected;
//const getAllChannels = (state: IMessageAppState): Immutable.Map<Uuid, IChannel> => state.channels.asMap;
//const getAllUsers = (state: IMessageAppState): IUserList => state.users;
//
//export const getUsersForChannel = createSelector(
//  [getCurrentChannelId, getAllChannels, getAllUsers],
//  (currentChannelId, allChannels, allUsers): Immutable.List<Uuid> => {
//    const {usersList, usersMap} = allUsers;
//    const channel = allChannels.get(currentChannelId)!;
//    const users = channel.customData.usersId
//    return asList.filter(channelId => userChannels.has(channelId));
//  }
//);
