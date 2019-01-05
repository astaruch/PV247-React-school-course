import axios from 'axios';
import * as uuid from 'uuid';
import {IUser} from '../models/IUser';
import {ResponseUser} from '../@types/api';
import {AUTH__FAIL, USER_ALREADY_REGISTERED} from '../constants/actionTypes';

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


export async function authUser(email: string): Promise<BearerToken | AUTH__FAIL> {
    return axios.post<BearerToken>(AUTH_PATH, {
        email
    }).then((response) => {
        return Promise.resolve({
            token: response.data.token,
            expiration: response.data.expiration
        }).catch(() => Promise.resolve(AUTH__FAIL as AUTH__FAIL));
    });
}

export async function fetchUser(email: string, token: string): Promise<ResponseUser> {
    return axios.get<ResponseUser>(
        `${USER_PATH}/${email}`, {
            headers: {Authorization: 'Bearer ' + token}
        })
        .then((user) => {
            console.log(user);
            return Promise.resolve({
                email: user.data.email,
                customData: user.data.customData
            });
        });
}


export async function registerUser(email: String, password: string): Promise<IUser | USER_ALREADY_REGISTERED> {
    const id = uuid();
    return axios.post<ResponseUser>(USER_PATH, {
        email,
        customData: {
            id,
            password
        }
    }).then((response) => {
        return Promise.resolve({
            id: response.data.customData.id,
            email: response.data.email,
            password: response.data.customData.password,
        }).catch(() => Promise.resolve(USER_ALREADY_REGISTERED as USER_ALREADY_REGISTERED));
    });
}
