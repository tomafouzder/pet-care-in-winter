import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import iconImg from "../../assets/icons8-user-50.png"
import toast from 'react-hot-toast';

const MyProfile = () => {
    const { user, setUser, updateUserProfile } = useContext(AuthContext);
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState(user?.displayName || "");
    const [photo, setPhoto] = useState(user?.photoURL || "");

    const handleUpdate = (e) => {
        e.preventDefault();

        updateUserProfile({ displayName: name, photoURL: photo })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photo });
                toast.success("Profile update successfully")
                setShowForm(false);
            })
            .catch((error) => {
                console.log(error);
                toast.error("Failed to update profile!")
            });
    };


    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className='w-11/12 mx-auto py-6'>
                <div className='flex my-6  bg-gradient-to-br from-indigo-500 via-purple-700 to-pink-500 justify-center  items-center'>
                    <div className='text-center text-white rounded-2xl shadow-2xl
                   
                      p-6 items-center'>
                        <figure className='flex justify-center my-5'>
                            <img src={user?.photoURL || iconImg}
                                alt="User Avatar"
                                className='rounded-full w-24 h-24 ' />
                        </figure>

                        <h1 className='text-2xl border-b-2 pb-2 font-bold'>{user?.displayName || "No Name"}</h1>
                        <h2 className='text-xl  border-b-2 pb-2 font-bold my-2'> {user?.email}</h2>
                        <button
                            className='btn  bg-gradient-to-br from-indigo-500 via-purple-700 to-pink-500 text-white font-bold text-xl mt-4'
                            onClick={() => setShowForm(!showForm)}
                        >
                            {showForm ? "Cancel" : "Update Profile"}
                        </button>
                    </div>
                </div>


                {/* update form */}
                <div className='flex justify-center bg-gradient-to-br from-pink-500 via-purple-800 to-indigo-500'>
                    <div className='card bg-base-100 w-full max-w-sm shrink-0 text-white shadow-2xl py-5 bg-gradient-to-br from-pink-500 via-purple-700 to-indigo-500'>
                        {showForm && (
                            <form
                                className='card-body'
                                onSubmit={handleUpdate} >
                                <fieldset className='fieldset  '>
                                    {/* Name */}
                                    <label className="label font-bold text-xl  text-white">Name</label>
                                    <input type="text"
                                        name='name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="input bg-gradient-to-br from-indigo-500  to-pink-200 "
                                        required
                                        placeholder="Enter new name" />

                                    {/* Photo URL */}
                                    <label className="label font-bold text-xl  text-white">Photo URL</label>
                                    <input type="Photo URL"
                                        name='photo'
                                        value={photo}
                                        onChange={(e) => setPhoto(e.target.value)}
                                        className="input bg-gradient-to-br from-indigo-500  to-pink-200  "
                                        required
                                        placeholder="Photo URL" />

                                    <button type='submit'
                                        className="btn  bg-gradient-to-br from-indigo-500 via-purple-700 to-pink-500 text-white font-semibold text-xl mt-4"
                                    >
                                        Save Change
                                    </button>
                                </fieldset>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </div>

    );
};

export default MyProfile;
