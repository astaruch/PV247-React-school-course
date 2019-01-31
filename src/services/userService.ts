import * as Immutable from 'immutable';
import axios from 'axios';
import {IUser} from '../models/IUser';
import {ResponseUser} from '../@types/api';
import {getAuthorizationHeader, USER_PATH} from './authenticationService';

export async function getUsers(): Promise<Immutable.List<IUser>> {
  return axios.get<ResponseUser[]>(USER_PATH, getAuthorizationHeader())
    .then((response) => {
      const responseUsers = response.data;
      console.log(responseUsers);
      if (!responseUsers || responseUsers.length === 0) {
        // this should never happen :-). Remove this statement before deadline
        return Immutable.List();
      }
      const users = Immutable.List(responseUsers.map((user) => {
        const {email, customData} = user;
//        const {id, password, username, pictureUrl} = customData;
        return {
          email,
          ...customData
        };
      }));
      return Promise.resolve(users);
    });
}
