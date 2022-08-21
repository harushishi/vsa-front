import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, getUser } from '../api/utils';
import Navbar from '../components/Navbar';
import Post from '../components/Post';
import { userApi, postApi } from '../api/apiRoutes'
import { TPost } from '../api/types'
import { useUser } from '../context/UserContext';

const Profile = () => {

    let navigate = useNavigate();
    const { user, setUser } = useUser()
    const [posts, setPosts] = useState<TPost[]>([]);


    const fetchPosts = async () => {
        const { data } = await postApi.get(`/get/${user.id}`)

        data.sort((a: TPost, b: TPost) => {
            return new Date(b.createdAt).getTime() - (new Date(a.createdAt).getTime())
        })

        setPosts(data)
    }

    const renderPosts = () => {
        return (
            <>{posts.map(post => (<Post {...post} key={post.id} />))}</>
        )
    }

    useEffect(() => {
        setUser(getUser())

        if (!auth(user)) {
            navigate('/login')
        }

        fetchPosts()
    }, []);

    return (
        <div className="container-fluid">
            <div className="row min-vh-100">
                <div className="col  bg-black  border-secondary "></div>
                <div className="col bg-black border-end border-secondary">
                    <Navbar />
                </div>
                <div className="col-5 bg-black border-end border-secondary">
                    {renderPosts()}
                </div>
                <div className="col bg-black  border-secondary"></div>
                <div className="col  bg-black border-secondary"></div>
            </div>
        </div>
    );
}

export default Profile;