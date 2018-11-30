export interface IUser {
    readonly id: Uuid;
    readonly email: string;
    readonly password: string;
    readonly name?: string;
    readonly username?: string;
    readonly gender?: string;
    readonly pictureUrl?: string;
}
