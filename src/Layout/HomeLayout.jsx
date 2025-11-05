import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Loading/Loading';

const HomeLayout = () => {
    const { state } = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    const isCardDetailsPage = location.pathname.startsWith("/cardDetails")

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);

    }, [location])

    return (
        <div>
            <header className='fixed top-0 left-0 w-full z-50 bg-white shadow-md'>
                <Navbar></Navbar>
            </header>

            {loading ? (<Loading></Loading>) :
                (<main className='pt-20'>
                    <Outlet></Outlet>
                </main>)
            }



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