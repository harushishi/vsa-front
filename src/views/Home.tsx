import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser, auth } from '../api/utils'
import { useUser } from '../context/UserContext';
import { getUserFollows, getUsersPosts } from '../api/mappers';
import Navbar from '../components/Navbar';
import { TPost, TUserPost } from '../api/types';
import Post from '../components/Post';
import Searchbar from '../components/Searchbar';
import MirroredNavbar from '../components/MirroredNavbar';

const Home = () => {

    let navigate = useNavigate();
    const { user, setUser } = useUser()
    const [usersPosts, setUsersPosts] = useState<TUserPost[]>([]);

    const fetchPosts = async () => {
        const follows = await getUserFollows(user)
        const usersPosts = await getUsersPosts(follows)
        setUsersPosts(usersPosts)
    }

    const renderPosts = () => {
        let posts: TPost[] = []

        usersPosts.forEach(user => {
            user.posts.forEach(post => {
                posts.push(post)
            })
        })

        posts.sort((a: TPost, b: TPost) => {
            return new Date(b.createdAt).getTime() - (new Date(a.createdAt).getTime())
        })

        return (<>{posts.map(post => <Post {...post} key={post.id} />)}</>)
    }

    useEffect(() => {
        setUser(getUser())
        if (!auth(user)) {
            navigate('/login')
        }

        fetchPosts();
    }, []);

    return (
        <div className="container-fluid">
            <div className="row min-vh-100">
                <div className="col  bg-black  border-secondary"></div>
                <div className="col bg-black border-end border-secondary">
                    <Navbar />
                </div>
                <div className="col-5 bg-black border-end border-secondary">
                    {renderPosts()}
                </div>
                <div className="col bg-black  border-secondary">
                    <MirroredNavbar />
                </div>
                <div className="col  bg-black border-secondary"></div>
            </div>
        </div>
    );
}

export default Home;