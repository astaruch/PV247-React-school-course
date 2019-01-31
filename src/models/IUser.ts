import * as Immutable from 'immutable';

export interface IUserCustomData {
  readonly id: Uuid;
  password: string;
  username?: string;
  pictureUrl?: string;
}

export interface IUser extends  IUserCustomData{
  readonly email: string;
}

export interface IUserList {
  asList: Immutable.List<Uuid>;
  asMap: Immutable.Map<Uuid, IUser>;
}
