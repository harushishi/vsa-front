import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authApi } from '../api/apiRoutes';


const Register = () => {

    const navigate = useNavigate();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const register = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {

            await authApi.post(('/register'), { name, email, password })
            navigate('/login')

        } catch (err: any) {
            alert(err.response.data.message)
        }
    }

    return (
        <div className="container-fluid min-vh-100 bg-dark">
            <div className="row" style={{ height: 250 }}> </div>
            <div className="d-flex justify-content-center mt-lg-4">
                <form className="w-25" onSubmit={register}>
                    <div>
                        <label htmlFor="inputName" className="form-label d-flex justify-content-center">Full name</label>
                        <input onChange={(e) => setName(e.target.value)} type="text" className="form-control text-center" id="inputName" aria-describedby="nameHelp"></input>
                    </div>
                    <div>
                        <label htmlFor="inputEmail" className="form-label d-flex justify-content-center">Email address</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control text-center" id="inputEmail" aria-describedby="emailHelp"></input>
                    </div>
                    <div>
                        <label htmlFor="inputPassword" className="form-label d-flex justify-content-center">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control text-center" id="inputPassword"></input>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary m-2 mt-0">Register</button>
                        <p className="mt-5"><Link to='/login'>Already have an account? Go to login!</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Register;