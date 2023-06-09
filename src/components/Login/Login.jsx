import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const {user, signIn, signInWithGoogle } = useContext(AuthContext)
    const handleLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password)
        event.target.reset()

        signIn(email, password)
            .then((result) => {
                const loggedUser = result.user
                console.log(loggedUser)
                alert('successfully')
            })
            .catch((error) => {
                console.log(error.message)
            });
           
    }

    const handleGoogleLogin=()=>{
        signInWithGoogle()
        .then(result=>{
            const loggedUser=result.user
            console.log(loggedUser)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div>

            {
                user ? <Link to='/'>Home</Link>
                    : <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col">
                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl font-bold">Login now!</h1>
                            </div>
                            <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button onClick={handleGoogleLogin} className="btn btn-primary">Google Login</button>
                                    </div>
                                </div>
                            </form>
                            <label className='label'><small>New to Auth Master? Please </small> <Link to="/register" className="label-text-alt link link-hover"> Register</Link>
                            </label>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Login;