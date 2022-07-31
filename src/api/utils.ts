import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from 'react-router-dom';

interface IUser {
    id: string;
    name: string;
    email: string;
    token: string;
}

interface Token {
    user: IUser,
    iat: number,
    exp: number
}

export const getUser = (): IUser => {
    const currentUser = {
        id: localStorage.getItem('id') ?? '',
        name: localStorage.getItem('name') ?? '',
        email: localStorage.getItem('email') ?? '',
        token: localStorage.getItem('token') ?? '',
    }
    return currentUser
}

export const updateUser = (user: IUser) => {
    localStorage.setItem('token', user.token)
    localStorage.setItem('name', user.name)
    localStorage.setItem('email', user.email)
    localStorage.setItem('id', user.id)
}

export const logOut = () => {
    localStorage.setItem('token', '')
    localStorage.setItem('name', '')
    localStorage.setItem('email', '')
    localStorage.setItem('id', '')
}

export const auth = (user: IUser) => {
    const tok: Token = jwt_decode<Token>(user.token)
    console.log('Tiempo de exp: ' + tok.exp * 1000)
    console.log('Tiempo actual: ' + Date.now())
    if (tok.exp * 1000 < Date.now()) {
        logOut()
        return false
    }
    return true
}