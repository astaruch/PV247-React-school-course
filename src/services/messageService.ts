import * as Immutable from 'immutable';
import axios from 'axios';
import {IMessage, IMessageCustomData} from '../models/IMessage';
import {ResponseMessage} from '../@types/api';
import {CHANNEL_PATH, getAuthorizationHeader} from './authenticationService';

export async function getMessages(channelId: Uuid): Promise<Immutable.List<IMessage>> {
  return axios.get<ResponseMessage[]>(
    `${CHANNEL_PATH}/${channelId}/message`,
    getAuthorizationHeader()
  ).then((response) => {
    const responseMessages = response.data;
    if (!responseMessages || responseMessages.length === 0) {
      return Immutable.List();
    }
    return Immutable.List(responseMessages).sort((a, b) => {
      return (a.createdAt < b.createdAt) ? -1 : ((a.createdAt > b.createdAt) ? 1 : 0);
    });
  });
}

export async function sendMessage(value: string,
                                  channelId: Uuid,
                                  customData: IMessageCustomData): Promise<IMessage> {
  return axios.post<ResponseMessage>(
    `${CHANNEL_PATH}/${channelId}/message`,
    {
      value,
      customData
    },
    getAuthorizationHeader()
  ).then((response) => {
    return response.data;
  });
}

export async function updateMessage(value: string,
                                    channelId: Uuid,
                                    customData: IMessageCustomData,
                                    messageId: Uuid): Promise<IMessage> {
  return axios.put<ResponseMessage>(
    `${CHANNEL_PATH}/${channelId}/message/${messageId}`,
    {
      value,
      customData
    },
    getAuthorizationHeader()
  ).then(response => {
    return response.data;
  });
}
