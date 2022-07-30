import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';


type User = {
    id: string;
    name: string;
    email: string;
    token: string;
}

export const getUser = (): User => {
    const currentUser = {
        id: localStorage.getItem('id') ?? '',
        name: localStorage.getItem('name') ?? '',
        email: localStorage.getItem('email') ?? '',
        token: localStorage.getItem('token') ?? '',
    }
    return currentUser
}

export const updateUser = (user: User) => {
    localStorage.setItem('token', user.token)
    localStorage.setItem('name', user.name)
    localStorage.setItem('email', user.email)
    localStorage.setItem('id', user.id)
}