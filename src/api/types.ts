export interface IUser {
    id: string;
    name: string;
    email: string;
    token: string;
    pfp: string;
}

export interface IPost {
    id: number,
    authorId: number
    createdAt: Date,
    content: string,
    img: string,
}

export interface IPostUser {
    name: string,
    pfp: string,
}

export type PostProps = IPost & IPostUser

export interface IToken {
    user: IUser,
    iat: number,
    exp: number
}

export { }