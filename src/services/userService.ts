import * as Immutable from 'immutable';
import axios from 'axios';
import {IUser} from '../models/IUser';
import {ResponseUser} from '../@types/api';
import {getAuthorizationHeader, USER_PATH} from './authenticationService';

export async function getUsers(): Promise<Immutable.List<IUser>> {
  return axios.get<ResponseUser[]>(USER_PATH, getAuthorizationHeader())
    .then((response) => {
      const responseUsers = response.data;
      if (!responseUsers || responseUsers.length === 0) {
        // this should never happen :-). Remove this statement before deadline
        return Immutable.List();
      }
      return Immutable.List(responseUsers);
    });
}

export async function updateUser(email: string, customData: object): Promise<IUser> {
  return axios.put<ResponseUser>(
    `${USER_PATH}/${email}`,
    {customData},
    getAuthorizationHeader()
  ).then((response) => {
    return Promise.resolve(response.data);
  });
}
