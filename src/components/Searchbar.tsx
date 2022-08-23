import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { userApi } from '../api/apiRoutes';
import { TFollowing, TUserInfo } from '../api/types';
import { getUser } from '../api/utils';

const Searchbar = () => {

    const [show, setShow] = useState(false);
    const [input, setInput] = useState('Find a friend')
    const [searchedUser, setSearchedUser] = useState<TUserInfo>({} as TUserInfo)
    const [following, setFollowing] = useState<boolean>(false)
    const [errorMsg, setErrorMsg] = useState<string>()
    const user = getUser()

    function handleChange(event: React.FormEvent<HTMLInputElement>) {
        setInput(event.currentTarget.value)
    }

    async function searchUser() {
        try {
            const search = await userApi.get(`/find/${input}`)
            const followings = await userApi.get(`/following/${user.id}`)

            if (followings.data.find((e: TFollowing) => e.followedUserId === search.data.id)) {
                console.log('se siguen')
                setFollowing(true)
            } else {
                console.log('no se siguen')
                setFollowing(false)
            }

            setSearchedUser(search.data)
            setShow(true)
        } catch (error) {
            setErrorMsg(`Couldn't find user`)
        }
    }

    async function handleFollow() {
        if (!following) {
            try {
                const result = await userApi.post(`/follow/${user.id}/${searchedUser.id}`)
                setFollowing(true)
            } catch (error) {
                console.log(error)
                // should implement an error span maybe
            }
        } else {
            try {
                const result = await userApi.post(`/follow/${user.id}/${searchedUser.id}`)
                setFollowing(false)
            } catch (error) {
                console.log(error)
                // should implement an error span maybe
            }
        }
    }

    return (
        <>
            <div className="input-group border-secondary mt-3">
                <input type="text" className="form-control bg-dark border-0 text-white" aria-label="Username" value={input} onChange={handleChange} />
                <span className="input-group-text bg-dark border-0" onClick={searchUser}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </span>
                <Modal show={show} onHide={() => { setShow(false), setInput('Find a friend'), window.location.reload() }} backdrop="static" backdropClassName="bg-dark opacity-25"
                    contentClassName="bg-dark text-white"
                    keyboard={false}>
                    <Modal.Header closeButton closeVariant='white' className='modal-header border-0 pb-0'>
                    </Modal.Header>
                    <Modal.Body>
                        <h3>
                            <span className="badge badge-secondary">
                                <img src={`https://vsa-bucket-test.s3.sa-east-1.amazonaws.com/${searchedUser.pfp}`} className='img-fluid rounded-circle' style={{ maxHeight: '100px' }}></img>
                            </span>
                            {searchedUser.name}
                            <span className="badge badge-secondary">
                                {following &&
                                    <button type="button" className="btn btn-warning mx-3" onClick={handleFollow}>Unfollow</button>}
                                {!following &&
                                    <button type="button" className="btn btn-info mx-3" onClick={handleFollow}>Follow</button>}
                            </span>
                        </h3>
                    </Modal.Body>
                </Modal>
            </div>
            {errorMsg &&
                <span className='text-warning mx-3 mt-1 fs-6'>{errorMsg}
                    <span onClick={() => { setErrorMsg('') }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </span>
                </span>
            }
        </>
    )
}

export default Searchbar;