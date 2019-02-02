import * as Immutable from 'immutable';
import axios from 'axios';
import {IMessage} from '../models/IMessage';
import {ResponseMessage} from '../@types/api';
import {CHANNEL_PATH, getAuthorizationHeader} from './authenticationService';

export async function getMessages(channelId: Uuid): Promise<Immutable.List<IMessage>> {
  return axios.get<ResponseMessage[]>(
    `${CHANNEL_PATH}/${channelId}/message`,
    getAuthorizationHeader()
  ).then((response) => {
    console.log('Messages:', response.data);
    const responseMessages = response.data;
    if (!responseMessages || responseMessages.length === 0) {
      return Immutable.List();
    }

    return Immutable.List(responseMessages);
  });
}
