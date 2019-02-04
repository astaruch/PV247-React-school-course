import * as Immutable from 'immutable';

export interface IChannelCustomData {
  readonly numberOfNewMessages: number;
  readonly selected?: boolean;
  order: number;
  readonly usersId: Immutable.List<Uuid>;
  readonly editing: boolean;
  readonly asyncRenaming: boolean;
}

export interface IChannel {
  readonly id: Uuid;
  readonly name: string;
  customData: IChannelCustomData;
}

export interface IChannelList {
  asList: Immutable.List<Uuid>;
  asMap: Immutable.Map<Uuid, IChannel>;
  selected: Uuid;
  isRenamed: boolean;
}
