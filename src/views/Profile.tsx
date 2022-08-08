import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, getUser } from '../api/utils';
import Navbar from '../components/Navbar';
import Post from '../components/Post';
import { userApi } from '../api/userApi'
import { IPost } from '../api/types'

const Profile = () => {

    let navigate = useNavigate();
    const user = getUser()
    const [posts, setPosts] = useState<IPost[]>([]);

    const fetchPosts = async () => {
        const { data } = await userApi(`/posts/${user.id}`)
        setPosts(data)
    }

    const renderPosts = () => {

        return (
            <div>
                {posts.map(post => (
                    <Post {...post} key={post.id} />
                ))}
            </div>
        )
    }

    useEffect(() => {
        if (!auth(user)) {
            navigate('/login')
        }
        fetchPosts()
    }, []);

    return (
        <div className="container-fluid">
            <div className="row min-vh-100">
                <div className="col  bg-black border-end border-secondary">
                    <Navbar />
                </div>
                <div className="col-5 bg-black border-end border-secondary">
                    {renderPosts()}
                </div>
                <div className="col bg-black border-end border-secondary">

                </div>
            </div>
        </div>
    );
}

export default Profile;