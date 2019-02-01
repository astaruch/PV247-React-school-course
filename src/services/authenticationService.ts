import axios from 'axios';
import {IUser} from '../models/IUser';
import {ResponseUser} from '../@types/api';
import * as uuid from 'uuid';

export const APP_ID = '4715e315-acca-484f-8634-32910a77360c';
export const SERVER_PATH = 'https://pv247messaging.azurewebsites.net/api/v2';

export const AUTH_PATH = `${SERVER_PATH}/auth`;
export const CHANNEL_PATH = `${SERVER_PATH}/app/${APP_ID}/channel`;
export const FILE_PATH = `${SERVER_PATH}/file`;
export const USER_PATH = `${SERVER_PATH}/${APP_ID}/user`;

export type BearerToken = {
  readonly token: string,
  readonly expiration: string,
};

const getBearer = () => {
  return JSON.parse(localStorage.getItem('BEARER_TOKEN') || '');
};

export const getAuthorizationHeader = () => {
  return {
    headers: {Authorization: 'Bearer ' + getBearer().token}
  };
};

export async function getBearerTokenForExistingUser(email: string): Promise<BearerToken | null> {
  return axios.post<BearerToken>(AUTH_PATH, {
    email
  }).then((response) => {
    const bearerToken = {
      token: response.data.token,
      expiration: response.data.token,
    };
    return Promise.resolve(bearerToken);
  }).catch(() => {
    console.log('User e-mail doesn\'t exist in this app.');
    localStorage.removeItem('BEARER_TOKEN');
    return null;
  });
}

export async function getExistingUser(email: string): Promise<IUser | null> {
  const bearerToken = JSON.parse(localStorage.getItem('BEARER_TOKEN') || '');
  return axios.get<ResponseUser>(`${USER_PATH}/${email}`, {
    headers: {Authorization: 'Bearer ' + bearerToken.token}
  }).then((response) => {
    return Promise.resolve(response.data);
  }).catch(() => {
    return null;
  });
}

export async function registerNewUser(email: string, password: string): Promise<IUser> {
  return axios.post<ResponseUser>(USER_PATH, {
    email,
    customData: {
      id: uuid(),
      password,
      username: '',
      pictureUrl: ''
    }
  }).then((response) => {
    console.log(response);
    return Promise.resolve(response.data);
  });
}


