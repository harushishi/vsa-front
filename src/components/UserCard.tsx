import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../api/utils';

const UserCard = () => {

    let navigate = useNavigate();
    const user = getUser()

    return (
        <div className='mt-5 col-12 rounded-pill'>
            <div className='row gx-0'>
                <div className='col'>
                    <img src={user.pfp} className='img-fluid rounded-circle' />
                </div>
                <div className='col-8 mt-4 mx-2'>
                    <div className='row'>
                        <h3 className='text-white'>{user.name}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard;