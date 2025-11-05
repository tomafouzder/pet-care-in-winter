import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="flex justify-center min-h-screen w-11/12 bg- mx-auto rounded-2xl items-center bg-gradient-to-br from-indigo-500 via-purple-700 to-pink-500">
            <div className="card bg-gradient-to-br from-indigo-500 via-purple-700 to-pink-500 w-full max-w-sm shrink-0 shadow-2xl py-5 text-white">
                <h2 className="font-bold text-center text-3xl">Register your account</h2>
                <div className="card-body">
                    <fieldset className="fieldset text-white text-lg font-medium
                    ">
                        {/* Name */}
                        <label className="label text-white">Name</label>
                        <input type="text" className="input bg-gradient-to-br from-indigo-500  to-pink-200 " placeholder="Name" />

                        {/* Email */}
                        <label className="label text-white">Email</label>
                        <input type="email" className="input bg-gradient-to-br from-indigo-500  to-pink-200 " placeholder="Email" />

                        {/* Photo Url */}
                        <label className="label text-white">Photo URL</label>
                        <input type="Photo URL" className="input bg-gradient-to-br from-indigo-500  to-pink-200  " placeholder="Photo URL" />

                        {/* Password */}
                        <label className="label text-white">Password</label>
                        <input type="password" className="input bg-gradient-to-br from-indigo-500  to-pink-200 " placeholder="Password" />

                        {/* button */}
                        <Link to="/" className="btn  bg-gradient-to-br from-indigo-500 via-purple-700 to-pink-500 text-white font-semibold text-xl mt-4">Register</Link>
                        <div>
                            <p className="font-medium text-lg">
                                Have an account ? please {' '}
                                <Link className=" text-white underline" to="/auth/login">  Login</Link>
                            </p>
                        </div>


                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Register;