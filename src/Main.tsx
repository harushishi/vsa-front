import { Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import { getUser, updateUser } from './api/utils'
import { useState } from 'react';

type User = {
    id: string;
    name: string;
    email: string;
    token: string;
}

const Main = () => {

    const user = getUser()
    // const [isLogged, setIsLogged] = useState<boolean>(false);
    // const [currentUser, setCurrentUser] = useState<User>(user);

    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    );
}
export default Main;