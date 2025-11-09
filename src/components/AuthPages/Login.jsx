import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';



const Login = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState("")
    const { user, signIn, resetPassword } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const emailRef = useRef(null);

    useEffect(() => {
        if (user) {
             navigate("/");
         }
    }, [user, navigate])

    console.log(location)
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(`${location.state ? location.state : "/"}`)

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode);
                toast.error(errorMessage);

            })
    }

    const handleForgetPassword = (e) => {
        const email = emailRef.current.value;
        console.log(email);

        resetPassword(email)
            .then(() => {
                toast.success("Check your email and reset password");
            })
            .catch((error) => {
                toast.error(error.message);
            })

    }

    return (
        <div className="flex justify-center min-h-screen w-11/12 mx-auto items-center rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-700 to-pink-500">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 text-white shadow-2xl py-5 bg-gradient-to-br from-indigo-500 via-purple-700 to-pink-500">
                <h2 className="font-bold text-center text-white text-3xl">Login your account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset font-medium text-lg">
                        {/* Email */}
                        <label className="label text-white">Email</label>
                        <input type="email"
                            name='email'
                            ref={emailRef}
                            className="input bg-gradient-to-br from-indigo-500  to-pink-200"
                            placeholder="Email"
                            required
                        />
                        {/* Password */}
                        <div className='relative'>
                            <label className="label text-white">Password</label>
                            <input type={show ? "text" : "password"}
                                name='password'
                                className="input bg-gradient-to-br from-indigo-500  to-pink-200"
                                placeholder="Password"
                                required
                            />
                            <span onClick={() => setShow(!show)} className='absolute right-6 top-10 cursor-pointer z-50'>
                                {show ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>

                        {
                            error && <p className='text-red-200'>{error}</p>
                        }

                        {/* Button */}
                        <button className="btn  bg-gradient-to-br from-indigo-500 via-purple-700 to-pink-500 text-white font-semibold text-xl mt-4">Login</button>

                        {/* forget password */}
                        <p className="font-medium  text-lg">
                            Forgot password?
                            <button
                                onClick={handleForgetPassword}
                                className=" underline cursor-pointer"
                                type='button'
                            >  Reset password</button>
                        </p>
                    </fieldset>
                </form>

                <div className='text-white px-6'>

                    {/* Divider horizontal */}
                    <div className="flex w-full flex-col">
                        <div className="divider divider-neutral">OR</div>
                    </div>

                    {/* google  */}
                    <div className='text-center '>
                        <GoogleLogin></GoogleLogin>
                    </div>

                    {/* Register */}
                    <p className="font-medium text-lg pt-2">
                        Dnt't have an account ?
                        <Link className=" underline" to="/auth/register">  Register/Signup</Link>
                    </p>
                </div>


            </div>
        </div>
    );
};

export default Login;