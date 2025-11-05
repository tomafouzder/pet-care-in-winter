import React from 'react';
import Navbar from '../components/Header/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <header className='fixed top-0 left-0 w-full z-50 bg-white shadow-md'>
                <Navbar></Navbar>
            </header>
            <main className='min-h-screen pt-28 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;