export interface IMessageItem {
    readonly id: Uuid;
    readonly channelId: Uuid;
    readonly from: Uuid;
    readonly text: string;
    readonly timestamp: number;
}
