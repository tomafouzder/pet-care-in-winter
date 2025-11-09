import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router';




const GoogleLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()

    const handleGoogleSignin = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                // console.log(user);
                navigate(`${location.state ? location.state : "/"}`)

            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage);

            })
    }

    return (
        <div>
            <Link 
                onClick={handleGoogleSignin}
                className="btn w-full font-semibold text-xl mt-4">
                <FcGoogle />Continue with Google</Link>

        </div>
    );
};

export default GoogleLogin;