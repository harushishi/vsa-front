import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Inputbox() {

    const [show, setShow] = useState(false);
    const [content, setContent] = useState<string>('Want to share something?');
    const [selectedFile, setSelectedFile] = useState<File>();

    const handleClose = () => {
        setContent('Want to share something?')
        setShow(false)
    };
    const handleShow = () => setShow(true);


    const sendPost = () => {

    }

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return;
        }

        setSelectedFile(e.target.files[0]);
    };

    return (
        <>
            <Button variant="info text-white rounded-pill btn-lg mt-3" onClick={handleShow}>
                New Post
            </Button>

            <Modal show={show} onHide={handleClose} size="lg" backdrop="static" backdropClassName="bg-secondary opacity-25"
                contentClassName="bg-black text-white"
                keyboard={false}>
                <Modal.Header closeButton closeVariant='white' className='modal-header border-0 pb-0'>
                </Modal.Header>
                <Modal.Body>
                    <form className="w-100" onSubmit={sendPost}>
                        <div className='border-bottom border-secondary'>
                            <textarea onChange={(e) => setContent(e.target.value)} className="form-control bg-black text-white border-0" id="textContent" value={content} aria-describedby="contentHelp" rows={5} maxLength={288}></textarea>
                        </div>
                        <div>
                            <br></br>
                            <input type="file" id="image" name="image" accept="image/png, image/jpeg" onChange={handleFile}
                            />
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Inputbox