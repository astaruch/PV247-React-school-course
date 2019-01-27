export interface IChannelItem {
  readonly id: Uuid;
  readonly name: string;
  readonly numberOfNewMessages: number;
  readonly selected?: boolean;
  readonly onChannelChange?: ((id: Uuid) => any);
}
