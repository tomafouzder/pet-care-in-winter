import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import './Navbar.css'
import navImg from '../../assets/doggy_2.jpg'
import { AuthContext } from '../../provider/AuthProvider';
import iconImg from "../../assets/icons8-user-50.png"

const Navbar = () => {
    const { user, logOut } = use(AuthContext)

    const handleLogOut = () => {
        console.log('user trying to log out')
        logOut()
            .then(() => {
                alert('You logged out successfully')
            })
            .catch((error) => {
                console.log(error)
            });

    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/profile">My Profile</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100  rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className=" flex justify-center items-center ">
                    <img className="w-20" src={navImg} alt="" />
                    <p className=" text-blue-950 font-bold text-4xl">PetCare
                        <span className="text-xl text-orange-600 font-bold"> In winter</span>
                    </p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <img className='w-12 rounded-full' src={`${user ? user.photoURL : iconImg}`} alt="" />
                {
                    user ?
                        <button onClick={handleLogOut} className="btn w-24 h-12 md:w-36 md:h-16 bg-orange-600 text-xl rounded-2xl text-white hover:bg-blue-950">
                            LogOut</button>
                        :
                        <Link to="/auth/login" className="btn w-24 h-12 md:w-36 md:h-16 bg-orange-600 text-xl rounded-2xl text-white hover:bg-blue-950 ">Login</Link>
                }


            </div>
        </div>
    );
};

export default Navbar;