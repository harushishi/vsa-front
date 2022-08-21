import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { userApi } from '../api/apiRoutes';
import { useNavigate } from 'react-router-dom';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { useUser } from '../context/UserContext';
import { updateUser } from '../api/utils';


const AvatarUpload = () => {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File>();
    const { user, setUser } = useUser()

    const sendPost = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData: any = new FormData()
        formData.append('image', selectedFile)

        try {
            const result = await userApi.post((`/avatars/${user.id}`), formData)
            const { data } = await userApi.get((`/${user.id}`))
            let updatedUserInfo = user
            updatedUserInfo.pfp = data.pfp
            updateUser(updatedUserInfo)
            window.location.reload()
            setShow(false)

        } catch (err: any) {
            alert(err.response.data.message)
        }
    }

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.currentTarget.files) {
            return;
        }

        setSelectedFile(e.currentTarget.files[0]);
    };

    return (
        <React.Fragment>
            <DropdownItem onClick={() => setShow(true)}>Upload avatar</DropdownItem>
            <Modal show={show} onHide={() => setShow(false)} backdrop="static" backdropClassName="bg-dark opacity-25"
                contentClassName="bg-dark text-white"
                keyboard={false}>
                <Modal.Header closeButton closeVariant='white' className='modal-header border-0 pb-0'>

                </Modal.Header>
                <Modal.Body>
                    <form className="w-100" onSubmit={sendPost}>
                        <div className='d-flex bd-highlight mt-2'>
                            <br></br>
                            <input type="file" id="image" name="image" accept="image/png, image/jpeg" onChange={handleFile}
                                className='p-2 bd-highlight' />
                            <button type="submit" className="btn btn-info btn-sm rounded-pill ms-auto mx-2 bd-highlight text-white fw-bolder">Upload</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );

}

export default AvatarUpload