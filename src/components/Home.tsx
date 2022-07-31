import axios from 'axios';
import { useEffect, useState } from 'react';
import { authApi, userApi, isAuthorized } from '../api/userApi';
import { Dispatch, SetStateAction } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { getUser, updateUser, auth } from '../api/utils'


interface IUser {
    id: string;
    name: string;
    email: string;
    token: string;
}

interface ILog {
    isLogged: boolean;
    setIsLogged: Dispatch<SetStateAction<boolean>>;
}

type Props = IUser & ILog;


const Home = () => {

    let navigate = useNavigate();
    const user = getUser()

    useEffect(() => {
        if (!auth(user)) {
            navigate('/login')
        }
    }, []);

    return (
        <div>
            <p>hello, {user.name}</p>
        </div>
    );
}

export default Home;