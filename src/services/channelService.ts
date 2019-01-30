import * as Immutable from 'immutable';
import axios from 'axios';

import {CHANNEL_PATH} from './authenticationService';
import {IChannel} from '../models/IChannel';
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
    const responseChannels = response.data;
    if (!responseChannels || responseChannels.length === 0) {
      return Immutable.List();
    }
    const channels = Immutable.List(responseChannels.map((channel) => {
      const {id, name, customData} = channel;
      const {numberOfNewMessages, selected, order, usersId} = customData;
      return {
        id,
        name,
        numberOfNewMessages,
        selected,
        order,
        usersId: Immutable.List<Uuid>(usersId),
        waitingForAsyncRenaming: false
      };
    }));
    return Promise.resolve(channels.sort((a, b) => a.order - b.order));
  });
}
