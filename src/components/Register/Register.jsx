import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

    const { user, createUser } = useContext(AuthContext)

    console.log(createUser)
    // handle register button
    const handleRegister = (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(name, email, password)
        event.target.reset()

        // create user
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)

            })
            .catch(error => {
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
                                <h1 className="text-5xl font-bold">Register now!</h1>
                            </div>
                            <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="name" name='name' placeholder="name" className="input input-bordered" required />
                                    </div>
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
                                        <button className="btn btn-primary">Register</button>
                                    </div>
                                </div>
                            </form>

                            <label className="label"><small>Already have an account? </small><Link to="/login" className="label-text-alt link link-hover"> Login </Link>
                            </label>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Register;