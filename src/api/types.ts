export interface IUser {
    id: string;
    name: string;
    email: string;
    token: string;
    pfp: string;
}

export interface IPost {
    id: number,
    authorId: number,
    createdAt: Date,
    content: string,
    img: string,
    author: {
        name: string,
        pfp: string,
    }
}

export interface IFollowing {
    id: number,
    userId: number,
    followedUserId: number,
    followedUsername: string,
    followedUserPfp: string
}

export interface IToken {
    user: IUser,
    iat: number,
    exp: number
}

export { }