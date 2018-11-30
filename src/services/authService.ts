import axios from 'axios';
import * as uuid from 'uuid';
import {IUser} from '../models/IUser';
import {ResponseUser} from '../@types/api';
import {USER_ALREADY_REGISTERED} from '../constants/actionTypes';

const appId = '4715e315-acca-484f-8634-32910a77360c';
const baseApiPath = 'https://pv247messaging.azurewebsites.net/api/v2/';
const baseAppPath = `${baseApiPath}/${appId}`;

const userPath = `${baseAppPath}/user`;


export async function registerUser(email: String, password: string): Promise<IUser | USER_ALREADY_REGISTERED> {
    const id = uuid();
    return axios.post<ResponseUser>(userPath, {
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
