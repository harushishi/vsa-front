import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../api/utils';

const Post = () => {

    let navigate = useNavigate();
    const user = getUser()

    return (
        <div className='container-fluid text-white bg-black mt-3'>
            <div className='row gx-0'>
                <div className='col'>
                    <img src={user.pfp} className='img-fluid rounded-circle' style={{ maxHeight: '60px' }}></img>
                </div>
                <div className='col-11'>
                    <div className='col mx-2 mt-1 fw-bold fs-6'>
                        {user.name}
                    </div>
                    <div className='col-9 fst-italic mx-2' style={{ fontSize: '0.9em' }}>
                        6 ago. 14:00pm
                    </div>
                    <div className='container mx-2 mt-2'>
                        Ceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeb
                    </div>
                    <img src='https://pbs.twimg.com/media/FIYXPsvUYAEOZ0f.jpg'
                        className='img-fluid mt-2' style={{ maxWidth: '600px' }}></img>
                </div>
            </div>
            <div className='border-bottom border-secondary mt-2'></div>
        </div>
    )
}

export default Post;