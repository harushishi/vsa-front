import axios from 'axios';
import { useEffect, useState } from 'react';
import { authApi, userApi, isAuthorized } from '../api/userApi';
import { Dispatch, SetStateAction } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { getUser, updateUser, auth } from '../api/utils'
import Navbar from '../components/Navbar';
import Post from '../components/Post';
import { IPost, IFollowing } from '../api/types';


const Home = () => {

    let navigate = useNavigate();
    const user = getUser()
    const [posts, setPosts] = useState<IPost[]>([]);

    const fetchPosts = async () => {
        async function fetchFollowedUsers() {
            const { data } = await userApi(`/following/${user.id}`)
            return data
        }

        const users: IFollowing[] = await fetchFollowedUsers()

        const promises = users.map(user => userApi(`/posts/${user.followedUserId}`))

        await Promise.all(promises).then(res => {
            let data: IPost[] = [];
            res.forEach(res => {

                data = data.concat(res.data)
            });
            setPosts(data)
        }
        )
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
                <div className="col bg-black  border-secondary"></div>
                <div className="col  bg-black border-secondary"></div>
            </div>
        </div>
    );
}

export default Home;