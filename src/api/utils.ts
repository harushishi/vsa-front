import jwt_decode from "jwt-decode";
import { TUser, TToken } from './types';

export const getUser = (): TUser => {

    const currentUser = {
        id: localStorage.getItem('id') ?? '',
        name: localStorage.getItem('name') ?? '',
        email: localStorage.getItem('email') ?? '',
        token: localStorage.getItem('token') ?? '',
        following: localStorage.getItem('following') ?? '',
        pfp: 'https://vsa-bucket-test.s3.sa-east-1.amazonaws.com/' + localStorage.getItem('pfp') ?? 'default.png',
    }

    return currentUser
}

export const updateUser = (user: TUser) => {
    localStorage.setItem('token', user.token)
    localStorage.setItem('name', user.name)
    localStorage.setItem('email', user.email)
    localStorage.setItem('pfp', user.pfp)
    localStorage.setItem('id', user.id)
}

export const logOut = () => {
    localStorage.setItem('token', '')
    localStorage.setItem('name', '')
    localStorage.setItem('email', '')
    localStorage.setItem('pfp', '')
    localStorage.setItem('id', '')
}

export const auth = (user: TUser) => {
    try {
        const tok: TToken = jwt_decode<TToken>(user.token)
        console.log('Tiempo de exp: ' + tok.exp * 1000)
        console.log('Tiempo actual: ' + Date.now())

        if ((tok.exp * 1000 < Date.now())) {
            return false
        }

        return true
    } catch (error) {
        logOut()
        return false
    }
}