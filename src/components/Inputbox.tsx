import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { userApi } from '../api/userApi';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../api/utils';

function Inputbox() {

    const navigate = useNavigate();
    const user = getUser()
    const [show, setShow] = useState(false);
    const [content, setContent] = useState<string>('Want to share something?');
    const [selectedFile, setSelectedFile] = useState<File>();

    const handleClose = () => {
        setContent('Want to share something?')
        setShow(false)
    };
    const handleShow = () => setShow(true);


    const sendPost = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData: any = new FormData()
        formData.append('image', selectedFile)
        formData.append('content', content)

        try {
            await userApi.post((`/create/${user.id}`), formData)
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
        <>
            <Button variant="info text-white rounded-pill btn-lg mt-3" onClick={handleShow}>
                New Post
            </Button>

            <Modal show={show} onHide={handleClose} size="lg" backdrop="static" backdropClassName="bg-dark opacity-25"
                contentClassName="bg-dark text-white"
                keyboard={false}>
                <Modal.Header closeButton closeVariant='white' className='modal-header border-0 pb-0'>
                </Modal.Header>
                <Modal.Body>
                    <form className="w-100" onSubmit={sendPost}>
                        <div className='border-bottom border-secondary'>
                            <textarea onChange={(e) => setContent(e.target.value)} className="form-control bg-dark text-white border-0" id="textContent" value={content} aria-describedby="contentHelp" rows={5} maxLength={288}></textarea>
                        </div>
                        <div className='d-flex bd-highlight mt-2'>
                            <br></br>
                            <input type="file" id="image" name="image" accept="image/png, image/jpeg" onChange={handleFile}
                                className='p-2 bd-highlight' />
                            <button type="submit" className="btn btn-info btn-sm rounded-pill ms-auto mx-2 bd-highlight text-white fw-bolder">Send</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Inputbox