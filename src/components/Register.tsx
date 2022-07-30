import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="container-fluid min-vh-100">
            <div className="row" style={{ height: 250 }}> </div>
            <div className="d-flex justify-content-center mt-lg-4">
                <form className="w-25">
                    <div>
                        <label htmlFor="inputName" className="form-label d-flex justify-content-center">Full name</label>
                        <input type="text" className="form-control text-center" id="inputName" aria-describedby="nameHelp"></input>
                    </div>
                    <div>
                        <label htmlFor="inputEmail" className="form-label d-flex justify-content-center">Email address</label>
                        <input type="email" className="form-control text-center" id="inputEmail" aria-describedby="emailHelp"></input>
                    </div>
                    <div>
                        <label htmlFor="inputPassword" className="form-label d-flex justify-content-center">Password</label>
                        <input type="password" className="form-control text-center" id="inputPassword"></input>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="check"></input>
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