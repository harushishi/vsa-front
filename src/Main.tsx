import { Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import { getUser, updateUser } from './api/localStorage'
import { useState } from 'react';

type User = {
    id: string;
    name: string;
    email: string;
    token: string;
}

const Main = () => {

    const user = getUser()
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = useState<User>(user);

    return (
        <Routes>
            //para acordarme. TENGO QUE CREAR UN TIPO en el componente, y aclarar que lo recibe en los parametros.
            <Route path='/home' element={<Home
                {...currentUser}
                isLogged={isLogged}
                setIsLogged={setIsLogged}
            />} />
            <Route path='/login' element={<Login
                {...currentUser}
                isLogged={isLogged}
                setIsLogged={setIsLogged} />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    );
}
export default Main;