import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TUserInfo, TPost } from '../api/types'
import { userApi, postApi } from '../api/apiRoutes';

const Post = (Props: TPost) => {

    let navigate = useNavigate();
    const date = new Date(Props.createdAt)
    const [userInfo, setUserInfo] = useState<TUserInfo>({} as TUserInfo)

    async function deletePost() {
        try {
            await postApi.delete(`/delete/${userInfo.id}/${Props.id}`)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        async function fetchUserInfo() {
            const { data } = await userApi.get(`${Props.authorId}`)
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
                    <div className='col mt-1 mx-2 fw-bold fs-6 d-flex'>
                        {userInfo.name}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash ms-auto" viewBox="0 0 16 16" onClick={deletePost}>
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                    </div>
                    <div className='col-9 fst-italic mx-2 d-flex' style={{ fontSize: '0.9em' }}>
                        {date.toLocaleDateString() + ' - ' + date.toLocaleTimeString()}
                    </div>
                    <div className='container mt-3 mx-2'>
                        {Props.content}
                    </div>
                    {Props.img !== null &&
                        <img src={`https://vsa-bucket-test.s3.sa-east-1.amazonaws.com/${Props.img}`}
                            className='img-fluid mt-3' style={{ maxWidth: '600px' }}></img>
                    }
                    {Props.video !== null &&
                        <video controls width="600px" className='mt-3'>
                            <source src={`https://vsa-bucket-test.s3.sa-east-1.amazonaws.com/${Props.video}`}
                                type="video/mp4" />
                            <source src={`https://vsa-bucket-test.s3.sa-east-1.amazonaws.com/${Props.video}`}
                                type="video/webm" />
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                    }
                </div>
            </div>
            <div className='border-bottom border-secondary mt-2'></div>
        </div>
    )
}

export default Post;