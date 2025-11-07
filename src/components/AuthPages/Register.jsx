import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import GoogleLogin from '../GoogleLogin/GoogleLogin';


const Register = () => {

    const { createUser, setUser, updateUserProfile } = use(AuthContext)
    const navigate = useNavigate();


    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.target)
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log({ name, email, photo, password });
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
                    setUser({ ...user, displayName: name, photoURL: photo });
                    navigate("/");
                })
                    .catch((error) => {
                        console.log(error);
                        setUser(user);
                    })

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            })

    }

    return (
        <div className="flex justify-center min-h-screen w-11/12 bg- mx-auto rounded-2xl items-center bg-gradient-to-br from-indigo-500 via-purple-700 to-pink-500">
            <div className="card bg-gradient-to-br from-indigo-500 via-purple-700 to-pink-500 w-full max-w-sm shrink-0 shadow-2xl py-5 text-white">
                <h2 className="font-bold text-center text-3xl">Register your account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset text-white text-lg font-medium
                    ">
                        {/* Name */}
                        <label className="label text-white">Name</label>
                        <input type="text"
                            name='name'
                            className="input bg-gradient-to-br from-indigo-500  to-pink-200 "
                            required
                            placeholder="Name" />

                        {/* Email */}
                        <label className="label text-white">Email</label>
                        <input type="email"
                            name='email'
                            className="input bg-gradient-to-br from-indigo-500  to-pink-200 "
                            required
                            placeholder="Email" />

                        {/* Photo Url */}
                        <label className="label text-white">Photo URL</label>
                        <input type="Photo URL"
                            name='photo'
                            className="input bg-gradient-to-br from-indigo-500  to-pink-200  "
                            required
                            placeholder="Photo URL" />

                        {/* Password */}
                        <label className="label text-white">Password</label>
                        <input type="password"
                            name='password'
                            className="input bg-gradient-to-br from-indigo-500  to-pink-200 "
                            required
                            placeholder="Password" />

                        {/* button */}
                        <button type='submit' className="btn  bg-gradient-to-br from-indigo-500 via-purple-700 to-pink-500 text-white font-semibold text-xl mt-4">Register</button>

                    </fieldset>
                </form>
                
                {/* ...................................... */}

                <div className='px-6'>
                    {/* Divider horizontal */}
                    <div className="flex w-full flex-col">
                        <div className="divider divider-neutral">OR</div>
                    </div>

                    {/*  google */}
                    <div className='text-center'>
                        <GoogleLogin></GoogleLogin>
                    </div>

                    {/* Have an account */}
                    <div>
                        <p className="font-medium pt-1 text-lg">
                            Have an account ? please {' '}
                            <Link className=" text-white underline" to="/auth/login">  Login</Link>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;