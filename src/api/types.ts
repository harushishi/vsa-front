import React from "react";

export type TUser = {
    id: string;
    name: string;
    email: string;
    token: string;
    pfp: string;
}

export type TAuthorInfo = {
    id: string;
    name: string;
    pfp: string;
}

export type TUserContext = {
    user: TUser,
    setUser: React.Dispatch<React.SetStateAction<TUser>>
}

export type TPost = {
    id: number,
    authorId: string,
    createdAt: Date,
    content: string,
    img: string,
    video: string,
}

export type TPostProps = {
    id: number,
    authorId: string,
    createdAt: Date,
    content: string,
    img: string,
    pfp: string,
    authorName: string,
}

//mejorar esto en base a este tipo para los posts de home
export type TUserPost = TUser & { posts: Array<TPost> }

export type TFollowing = {
    id: number,
    userId: number,
    followedUserId: number,
    followedUsername: string,
    followedUserPfp: string
}

export type TToken = {
    user: TUser,
    iat: number,
    exp: number
}

export { }