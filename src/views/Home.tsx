import axios from 'axios';
import { useEffect, useState } from 'react';
import { authApi, userApi, isAuthorized } from '../api/userApi';
import { Dispatch, SetStateAction } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { getUser, updateUser, auth } from '../api/utils'
import Navbar from '../components/Navbar';
import Post from '../components/Post';


const Home = () => {

    let navigate = useNavigate();
    const user = getUser()

    useEffect(() => {
        if (!auth(user)) {
            navigate('/login')
        }
    }, []);

    return (
        <div className="container-fluid">
            <div className="row min-vh-100">
                <div className="col  bg-black border-end border-secondary">
                    <Navbar />
                </div>
                <div className="col-5 bg-black border-end border-secondary">

                </div>
                <div className="col bg-black border-end border-secondary">

                </div>
            </div>
        </div>
    );
}

export default Home;