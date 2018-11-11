export interface IUser {
    readonly id: Uuid;
    readonly name: string;
    readonly username: string;
    readonly gender: string;
    readonly email: string;
    readonly pictureUrl: string;
}
