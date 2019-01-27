import * as Immutable from 'immutable';
import {IMessageItem} from './IMessageItem';
import {IChannelItem} from './IChannelItem';
import {IUser} from './IUser';
import {LOGIN_PAGE_FAILURES} from '../actions/loginActions';
import {SIGN_UP_PAGE_FAILURES} from '../actions/signUpActions';

export interface IMessageList {
  allIds: Immutable.List<Uuid>;
  byId: Immutable.Map<Uuid, IMessageItem>;
}

export interface IChannelItem {
  readonly id: Uuid;
  readonly name: string;
  readonly numberOfNewMessages: number;
  readonly selected?: boolean;
  readonly onChannelChange?: ((id: Uuid) => any);
}

export interface IChannel {
  readonly id: Uuid;
  readonly name: string;
  readonly numberOfNewMessages: number;
  readonly selected?: boolean;
  readonly order: number;
  readonly usersId: Immutable.List<Uuid>;
}

export interface IChannelList {
  allIds: Immutable.List<Uuid>;
  byId: Immutable.Map<Uuid, IChannelItem>;
}

export interface IUserList {
  allIds: Immutable.List<Uuid>;
  byId: Immutable.Map<Uuid, IUser>;
}

export interface IMessageAppState {
  messages: IMessageList;
  channels: IChannelList;
  users: IUserList;
  currentUser: IUser | null;
  selectedChannel: Uuid | null;
  authPageError: LOGIN_PAGE_FAILURES | SIGN_UP_PAGE_FAILURES | null;
  asyncOperationsCount: number;
}
