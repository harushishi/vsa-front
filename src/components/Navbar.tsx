import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserCard from './UserCard';


const Navbar = () => {

    let navigate = useNavigate();

    return (
        <div className="container-fluid">
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
        </div>
    );
}

export default Navbar;