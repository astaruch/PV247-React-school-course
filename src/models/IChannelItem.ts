export interface IChannelItem {
    id: number;
    name: string;
    numberOfNewMessages: number;
    selected?: boolean;
    onChannelChange?: ((id: number) => any);
}
