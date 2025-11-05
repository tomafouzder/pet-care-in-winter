import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';


const Login = () => {
    const [error, setError] = useState("")
    const { signIn } = use(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
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
                // const errorMessage = error.message;
                // alert(errorCode, errorMessage);
                setError(errorCode)
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
                            className="input bg-gradient-to-br from-indigo-500  to-pink-200"
                            placeholder="Email"
                            required
                        />
                        {/* Password */}
                        <label className="label text-white">Password</label>
                        <input type="password"
                            name='password'
                            className="input bg-gradient-to-br from-indigo-500  to-pink-200"
                            placeholder="Password"
                            required
                        />

                        {
                            error && <p className='text-red-200'>{error}</p>
                        }

                        {/* Button */}
                        <button className="btn  bg-gradient-to-br from-indigo-500 via-purple-700 to-pink-500 text-white font-semibold text-xl mt-4">Login</button>
                        <div className='text-white mt-4'>

                            {/* forget password */}
                            <p className="font-medium  text-lg">
                                Forgot password?
                                <Link className="  underline" to="/auth/register">  Reset password</Link>
                            </p>

                            {/* Register */}
                            <p className="font-medium text-lg">
                                Dnt't have an account ?
                                <Link className="   underline" to="/auth/register">  Register/Signup</Link>
                            </p>
                        </div>
                    </fieldset>
                </form>
                
            </div>
        </div>
    );
};

export default Login;