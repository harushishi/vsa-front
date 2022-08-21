import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authApi } from '../api/apiRoutes';
import { auth, updateUser } from '../api/utils'
import { useUser } from '../context/UserContext'

const Login = () => {
    let navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { user, setUser } = useUser()

    const login = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            const { data, statusText } = await authApi.post((`/login`), { email, password })

            const userInfo = {
                id: data.user.id,
                name: data.user.name,
                email: data.user.email,
                pfp: data.user.pfp,
                token: data.token,
            }

            console.log(userInfo)

            if (statusText !== 'OK') {
                setEmail('')
                setPassword('')
                return
            }

            updateUser(userInfo)
            setUser(userInfo)
            navigate('/home')

        } catch (err) {
            console.log(err)
            setEmail('')
            setPassword('')
        }
    }

    useEffect(() => {
        if (auth(user)) {
            navigate('/home')
        }
    }, []);

    return (
        <div className="container-fluid min-vh-100 bg-dark">
            <div className="row" style={{ height: 250 }}> </div>
            <div className="d-flex justify-content-center mt-lg-4">
                <form className="w-25" onSubmit={login}>
                    <div>
                        <label htmlFor="inputEmail" className="form-label d-flex justify-content-center">Email address</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control text-center" id="inputEmail" value={email} aria-describedby="emailHelp"></input>
                    </div>
                    <div>
                        <label htmlFor="inputPassword" className="form-label d-flex justify-content-center">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control text-center" id="inputPassword" value={password}></input>
                    </div>
                    <br></br>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary m-2 mt-0">Login</button>
                        <p className="mt-5"><Link to='/register'>Or create a new account here!</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;