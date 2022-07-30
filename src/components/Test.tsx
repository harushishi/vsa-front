//recordando un poco como usar react

import axios from 'axios';
import { useEffect, useState } from 'react';
import { userApi } from '../api/userApi';

type User = {
    id: number,
    name: string,
    email: string
}

const Profile = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { data } = await userApi.get(`/all`)

                setUsers(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUsers();
    }, [setUsers]);

    return (
        <div>
            <ul>
                {users.map((user) => {
                    return (<li key={user.id}>{user.id}, {user.name}, {user.email}</li>)
                })}
            </ul>
        </div>
    );
}

export default Profile;