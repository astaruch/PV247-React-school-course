import * as Immutable from 'immutable';

export interface IMessageCustomData {
  readonly channelId;
  readonly authorId;
}

export interface IMessage {
  readonly id: Uuid;
  readonly value: string;
  readonly createdAt: ISODate;
  readonly createdBy: Email;
  updatedAt: ISODate;
  updatedBy: Email;
  readonly customData: IMessageCustomData;
}

export interface IMessageList {
  asList: Immutable.List<Uuid>;
  asMap: Immutable.Map<Uuid, IMessage>;
}
