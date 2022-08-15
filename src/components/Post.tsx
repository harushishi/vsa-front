import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TAuthorInfo, TPost } from '../api/types'
import { userApi } from '../api/userApi';

const Post = (Props: TPost) => {

    let navigate = useNavigate();
    const date = new Date(Props.createdAt)
    const [userInfo, setUserInfo] = useState<TAuthorInfo>({} as TAuthorInfo)

    useEffect(() => {
        async function fetchUserInfo() {
            const { data } = await userApi(`${Props.authorId}`)
            setUserInfo(data)
        }

        fetchUserInfo()
    }, []);


    return (
        <div className='container-fluid text-white bg-black mt-3'>
            <div className='row gx-0'>
                <div className='col'>
                    <img src={`https://vsa-bucket-test.s3.sa-east-1.amazonaws.com/${userInfo.pfp}`} className='img-fluid rounded-circle' style={{ maxHeight: '60px' }}></img>
                </div>
                <div className='col-11'>
                    <div className='col mt-1 mx-2 fw-bold fs-6'>
                        {userInfo.name}
                    </div>
                    <div className='col-9 fst-italic mx-2' style={{ fontSize: '0.9em' }}>
                        {date.toLocaleDateString() + ' - ' + date.toLocaleTimeString()}
                    </div>
                    <div className='container mt-3 mx-2'>
                        {Props.content}
                    </div>
                    {Props.img !== null &&
                        <img src={`https://vsa-bucket-test.s3.sa-east-1.amazonaws.com/${Props.img}`}
                            className='img-fluid mt-3' style={{ maxWidth: '600px' }}></img>
                    }

                </div>
            </div>
            <div className='border-bottom border-secondary mt-2'></div>
        </div>
    )
}

export default Post;