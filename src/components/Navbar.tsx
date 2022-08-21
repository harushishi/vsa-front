import { useNavigate } from 'react-router-dom';
import Inputbox from './Inputbox';
import Dropdown from 'react-bootstrap/Dropdown';
import { getUser, logOut } from '../api/utils'
import AvatarUpload from './AvatarUpload';
import { useUser } from '../context/UserContext';



const Navbar = () => {

    let navigate = useNavigate();
    const { user, setUser } = useUser()

    const handleLogOut = () => {
        logOut()
        setUser(getUser)
        navigate('/login')
    }

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-black  min-vh-100 position-fixed" style={{ width: '250px' }}>
            <a className="d-flex mb-3 mb-md-0 text-white text-decoration-none">
                <span className="fs-1">VSApp</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <div className='d-flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-house fs-4 mt-3" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                            <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                        </svg>
                        <a className='nav-link text-white fs-4 mt-1' href='/home'>
                            Home
                        </a>
                    </div>
                </li>
                <li className="nav-item">
                    <div className='d-flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-person-circle fs-4 mt-3" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                        <a className='nav-link text-white fs-4 mt-1' href='/profile'>
                            Profile
                        </a>
                    </div>
                </li>
                <li className="nav-item">
                    <div className='d-flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-envelope fs-4 mt-3" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                        <a className='nav-link text-white fs-4 mt-1' href='/message'>
                            Messages
                        </a>
                    </div>
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
                        <AvatarUpload />
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="2" onClick={handleLogOut}>Log out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
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