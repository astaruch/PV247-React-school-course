import * as Immutable from 'immutable';
import axios from 'axios';

import {CHANNEL_PATH} from './authenticationService';
import {IChannel} from '../models/IMessageApp';
import {ResponseChannel} from '../@types/api';

const getBearer = () => {
  return JSON.parse(localStorage.getItem('BEARER_TOKEN') || '');
};

const getAuthorizationHeader = () => {
  return {
    headers: {Authorization: 'Bearer ' + getBearer().token}
  };
};

export async function getChannels(): Promise<Immutable.List<IChannel>> {
  return axios.get<ResponseChannel[]>(CHANNEL_PATH,
    getAuthorizationHeader()
  ).then((response) => {
    console.log('getChannels()');
    const responseChannels = response.data;
    if (!responseChannels || responseChannels.length === 0) {
      return Immutable.List();
    }
    const channels = Immutable.List(responseChannels.map((channel) => {
      return {
        id: channel.id,
        name: channel.name,
        numberOfNewMessages: channel.customData.numberOfNewMessages,
        selected: channel.customData.selected,
        order: channel.customData.order,
        usersId: Immutable.List<Uuid>(channel.customData.usersId),
      };
    }));
    return Promise.resolve(channels.sort((a, b) => a.order - b.order));
  });
}
