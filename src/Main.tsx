import { Routes, Route } from 'react-router-dom';
import Profile from './views/Profile';
import Login from './views/Login';
import Register from './views/Register';
import Home from './views/Home';
import { UserContextProvider } from './context/UserContext';

const Main = () => {

    return (
        <UserContextProvider>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/login' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </UserContextProvider>
    );
}
export default Main;