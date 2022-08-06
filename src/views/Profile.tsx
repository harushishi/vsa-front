import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, getUser } from '../api/utils';
import Navbar from '../components/Navbar';
import Post from '../components/Post';

type User = {
    id: number,
    name: string,
    email: string
}

const Profile = () => {

    let navigate = useNavigate();

    const user = getUser()
    const [userPfp, setUserPfp] = useState();

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
                <div className="col-7 bg-black border-end border-secondary">
                    <Post />
                </div>
                <div className="col bg-black border-end border-secondary">

                </div>
            </div>
        </div>
    );
}

export default Profile;