import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';

const HomeLayout = () => {
    const location = useLocation();

    const isCardDetailsPage = location.pathname.startsWith("/cardDetails")

    return (
        <div>
            <header className='fixed top-0 left-0 w-full z-50 bg-white shadow-md'>
                <Navbar></Navbar>
            </header>
            <main className='pt-20'>
                <Outlet></Outlet>
            </main>

            {
                !isCardDetailsPage &&
                (<footer>
                    <Footer></Footer>
                </footer>
                )

            }

        </div>
    );
};

export default HomeLayout;