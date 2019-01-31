// source https://pv247messaging.azurewebsites.net/help/index.html

export type ResponseUser = {
  readonly email: string;
  readonly customData: {
    readonly id: Uuid;
    readonly password: string;
    readonly username?: string;
    readonly pictureUrl?: string;
  };
};

export type ResponseChannel = {
  readonly id: Uuid;
  readonly name: string;
  readonly customData: {
    readonly numberOfNewMessages: number;
    readonly selected?: boolean;
    readonly order: number;
    readonly usersId: Uuid[];
  };
};

