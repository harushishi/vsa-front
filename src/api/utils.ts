import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from 'react-router-dom';
import { IUser, IToken } from './types';

export const getUser = (): IUser => {

    const currentUser = {
        id: localStorage.getItem('id') ?? '',
        name: localStorage.getItem('name') ?? '',
        email: localStorage.getItem('email') ?? '',
        token: localStorage.getItem('token') ?? '',
        pfp: 'https://vsa-bucket-test.s3.sa-east-1.amazonaws.com/' + localStorage.getItem('pfp') ?? 'default.png',
    }
    return currentUser
}

export const updateUser = (user: IUser) => {
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

export const auth = (user: IUser) => {
    const tok: IToken = jwt_decode<IToken>(user.token)
    console.log('Tiempo de exp: ' + tok.exp * 1000)
    console.log('Tiempo actual: ' + Date.now())
    if (tok.exp * 1000 < Date.now()) {
        logOut()
        return false
    }
    return true
}