import { Routes, Route } from 'react-router-dom';
import Profile from './views/Profile';
import Login from './views/Login';
import Register from './views/Register';
import Home from './views/Home';
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
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    );
}
export default Main;