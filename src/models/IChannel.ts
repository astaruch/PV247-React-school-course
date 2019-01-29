import * as Immutable from 'immutable';

export interface IChannel {
  readonly id: Uuid;
  readonly name: string;
  readonly numberOfNewMessages: number;
  readonly selected?: boolean;
  readonly order: number;
  readonly usersId: Immutable.List<Uuid>;
}

export interface IChannelList {
  asList: Immutable.List<Uuid>;
  asMap: Immutable.Map<Uuid, IChannel>;
  selected: Uuid;
}