// source https://pv247messaging.azurewebsites.net/help/index.html
import {IMessageCustomData} from '../models/IMessage';
import {IUserCustomData} from '../models/IUser';
import {IChannelCustomData} from '../models/IChannel';

export type ResponseUser = {
  readonly email: string;
  readonly customData: IUserCustomData;
};

export type ResponseChannel = {
  readonly id: Uuid;
  readonly name: string;
  readonly customData: IChannelCustomData;
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
