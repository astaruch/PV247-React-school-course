import * as Immutable from 'immutable';
import axios from 'axios';

import {CHANNEL_PATH, getAuthorizationHeader} from './authenticationService';
import {IChannel} from '../models/IChannel';
import {ResponseChannel} from '../@types/api';

export async function getChannels(): Promise<Immutable.List<IChannel>> {
  return axios.get<ResponseChannel[]>(CHANNEL_PATH,
    getAuthorizationHeader()
  ).then((response) => {
    const responseChannels = response.data;
    if (!responseChannels || responseChannels.length === 0) {
      return Immutable.List();
    }
    const channels = Immutable.List(responseChannels.map((channel) => {
      const {id, name, customData} = channel;
      return {
        id,
        name,
        customData: {
          ...customData,
          editing: false,
          usersId: customData.usersId || Immutable.List<Uuid>()

        }
      };
    }));
    return Promise.resolve(channels.sort((a, b) => a.customData.order - b.customData.order));
  });
}

export async function renameChannel(channelId: Uuid, newName: string, oldCustomData: object): Promise<IChannel> {
  return axios.put<ResponseChannel>(
    `${CHANNEL_PATH}/${channelId}`,
    {
      name: newName,
      customData: oldCustomData
    },
    getAuthorizationHeader()
  ).then((response) => {
    const {id, name, customData} = response.data;
    const channel = {
      id,
      name,
      customData: {
        ...customData,
        editing: false,
      }
    };
    return Promise.resolve(channel);
  });
}

export async function createChannel(newName: string, newCustomData: object): Promise<IChannel> {
  return axios.post<ResponseChannel>(CHANNEL_PATH, {name: newName, customData: newCustomData}, getAuthorizationHeader()
  ).then((response) => {
    const {id, name, customData} = response.data;
    const channel = {
      id,
      name,
      customData: {
        ...customData,
      }
    };
    return Promise.resolve(channel);
  });
}

export async function deleteChannel(channelId: Uuid): Promise<void> {
  return axios.delete(`${CHANNEL_PATH}/${channelId}`, getAuthorizationHeader()
  ).then(response => console.log(response));
}

export async function joinChannel(channelId: Uuid, name: string, newCustomData: object): Promise<IChannel> {
  return axios.put<ResponseChannel>(
    `${CHANNEL_PATH}/${channelId}`,
    {
      name,
      customData: newCustomData
      },
    getAuthorizationHeader()
  ).then((response) => {
    return Promise.resolve(response.data);
  });
}

export async function leaveChannel(channelId: Uuid, name: string, newCustomData: object): Promise<IChannel> {
  return axios.put<ResponseChannel>(
    `${CHANNEL_PATH}/${channelId}`,
    {
      name,
      customData: newCustomData
    },
    getAuthorizationHeader()
  ).then((response) => {
    return Promise.resolve(response.data);
  });
}
