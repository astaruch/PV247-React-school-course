// source https://pv247messaging.azurewebsites.net/help/index.html

import {IMessageCustomData} from '../models/IMessage';

export type ResponseUser = {
  readonly email: string;
  readonly customData: {
    readonly id: Uuid;
    readonly password: string;
    readonly username: string;
    readonly pictureUrl?: string;
  };
};

export type ResponseChannel = {
  readonly id: Uuid;
  readonly name: string;
  readonly customData: {
    readonly numberOfNewMessages: number;
    readonly selected?: boolean;
    readonly order: number;
    readonly usersId: Uuid[];
  };
};

export type ResponseMessage = {
  readonly id: Uuid;
  readonly value: string;
  readonly createdAt: ISODate;
  readonly createdBy: Email;
  readonly updatedAt: ISODate;
  readonly updatedBy: Email;
  readonly customData: IMessageCustomData
};

export type BearerToken = {
  readonly token: string,
  readonly expiration: string,
};
