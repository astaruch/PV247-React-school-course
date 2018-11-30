// source https://pv247messaging.azurewebsites.net/help/index.html

export type ResponseUser = {
    readonly email: string;
    readonly customData: {
        readonly id: Uuid;
        readonly password: string;
        readonly name: string;
        readonly username: string;
        readonly gender: string;
        readonly pictureUrl: string;
    };
};
