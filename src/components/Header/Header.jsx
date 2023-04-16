import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error.message)
            })
    }
    
    return (
        <div className="navbar bg-primary text-primary-content">
            <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
            <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
            {user && <Link className="btn btn-ghost normal-case text-xl" to="/profile">Profile</Link>}
            <Link className="btn btn-ghost normal-case text-xl" to="/orders">Orders</Link>


            {
                user ?
                    <React.Fragment>
                        <span>{user.email}</span>
                        <button onClick={handleLogOut} className="btn btn-ghost normal-case text-xl">Sign Out</button>

                    </React.Fragment>
                    :
                    <React.Fragment>
                        <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                        <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link></React.Fragment>
            }

        </div>
    );
};

export default Header;

{/**
{
                user && <Link
                    className="btn btn-ghost normal-case text-xl"
                    to="/profile"
                >Profile</Link>
            } */}


{
    /** {
    user ?
        <div><span>{user.email}</span>
            <button onClick={handleLogOut} className="btn btn-xs">Sign out</button></div>

        : <Link to="/login">Login </Link>
} */
}