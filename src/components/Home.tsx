import axios from 'axios';
import { useEffect, useState } from 'react';
import { authApi, userApi, isAuthorized } from '../api/userApi';
import { Dispatch, SetStateAction } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { propsToAttrMap } from '@vue/shared';

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


const Home = (props: Props) => {

    let navigate = useNavigate();

    useEffect(() => {
        const fetchAuth = async () => {
            const auth = await isAuthorized()
        }
        fetchAuth()
            .catch((function (e) {
                console.log(e)
                navigate('/login')
            }))
    }, []);

    return (
        <div>

        </div>
    );
}

export default Home;