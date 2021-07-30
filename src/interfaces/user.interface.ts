export interface IUser {
    readonly id: number;
    readonly name: string;
    readonly username: string;
    readonly email: string;
    readonly address: {
        readonly street: string;
        readonly suite: string;
        readonly zipcode: string;
        readonly geo: {
            readonly lat: string;
            readonly lng: string
        }
    }
}

export interface IUserState{
    users: IUser[],
    totalUsers: number,
    loading: boolean
}

export interface IResponse {
    error: boolean;
    message: string;
    data: IUser[]
}