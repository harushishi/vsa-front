import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../api/utils';
import { IPost } from '../api/types'

const Post = (Props: IPost) => {

    let navigate = useNavigate();
    const date = new Date(Props.createdAt)

    return (
        <div className='container-fluid text-white bg-black mt-3'>
            <div className='row gx-0'>
                <div className='col'>
                    <img src={`https://vsa-bucket-test.s3.sa-east-1.amazonaws.com/${Props.author.pfp}`} className='img-fluid rounded-circle' style={{ maxHeight: '60px' }}></img>
                </div>
                <div className='col-11'>
                    <div className='col mx-2 mt-1 fw-bold fs-6'>
                        {Props.author.name}
                    </div>
                    <div className='col-9 fst-italic mx-2' style={{ fontSize: '0.9em' }}>
                        {date.toLocaleDateString() + ' - ' + date.toLocaleTimeString()}
                    </div>
                    <div className='container mx-2 mt-2'>
                        {Props.content}
                    </div>
                    {Props.img !== null &&
                        <img src={`https://vsa-bucket-test.s3.sa-east-1.amazonaws.com/${Props.img}`}
                            className='img-fluid mt-2' style={{ maxWidth: '600px' }}></img>
                    }

                </div>
            </div>
            <div className='border-bottom border-secondary mt-2'></div>
        </div>
    )
}

export default Post;