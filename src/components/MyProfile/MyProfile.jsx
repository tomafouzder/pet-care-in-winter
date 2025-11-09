import React, { use } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import iconImg from "../../assets/icons8-user-50.png"

const MyProfile = () => {
    const { user } = use(AuthContext);
    return (
        <div className='pt-4 min-h-screen'>
            <img src={user ? user.photoURL : iconImg} alt="" />
            <h1>Name : {user ? user.displayName : " "}</h1>
            <h2>Email : {user && user.email}</h2>
            <button className='btn'>Update Profile</button>
        </div>
    );
};

export default MyProfile;
