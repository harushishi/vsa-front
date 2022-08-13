import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../api/utils';
import Inputbox from './Inputbox';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';


const Navbar = () => {

    let navigate = useNavigate();
    const user = getUser()

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-black  min-vh-100 position-fixed" style={{ width: '250px' }}>
            <a className="d-flex mb-3 mb-md-0 text-white text-decoration-none">
                <span className="fs-1">VSApp</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a className='nav-link text-white fs-4' href='/home'>
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className='nav-link text-white fs-4' href='/profile'>
                        Profile
                    </a>
                </li>
                <li className="nav-item">
                    <a className='nav-link text-white fs-4'>
                        Messages
                    </a>
                </li>
                <li className="nav-item d-grid gap-2">
                    <Inputbox />
                </li>
            </ul>
            <hr />
            <div className="d-flex align-items-center text-white text-decoration-none">
                <img className='rounded-circle me-2' src={user.pfp} style={{ maxHeight: '75px' }} ></img>
                <Dropdown drop='up'>

                    <Dropdown.Toggle id="user-menu" variant="black text-white">
                        {user.name}
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                        <Dropdown.Item eventKey="1">Upload avatar</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="2">Log out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            {/* <div className="d-flex align-items-center text-white text-decoration-none" data-bs-toggle="dropdown" aria-expanded="false">
                <img className='rounded-circle me-2' src={user.pfp} style={{ maxHeight: '75px' }} ></img>
                <DropdownButton
                    key={'user'}
                    id={`dropdown-button-drop-up}`}
                    drop='up'
                    variant="black text-white"
                    title={`${user.name}`}
                >
                    <Dropdown.Menu variant="dark">
                        <Dropdown.Item eventKey="1">Upload avatar</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Log out</Dropdown.Item>
                    </Dropdown.Menu>
                </DropdownButton>
            </div> */}
        </div>
    );
}

{/* <div className="container-fluid">
            <div className="row gx-0">
                <div className="col-4"></div>
                <div className="col container-fluid">
                    <UserCard />
                    <ul className="nav flex-column mt-4">
                        <li className="nav-item mx-2">
                            <a className="nav-link fs-5 text-white" href="/home">Home</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link fs-5 text-white" href="/profile">Profile</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link fs-5 text-white" href="#">Messages</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link fs-5 text-white">Notifications</a>
                        </li>
                        <li className="nav-item mx-2">
                            <div className="d-grid gap-2 col-12 mx-auto">
                                <button type="button" className="btn btn-info text-white mt-3 rounded-pill">New Post</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div> */}



export default Navbar;