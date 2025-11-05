import React, { use } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const MyProfile = () => {
    const { user } = use(AuthContext);
    return (
        <div className='pt-4 min-h-screen'>
            <h1>My Profile</h1>
         <h2> {user && user.email}</h2>
        </div>
    );
};

export default MyProfile;
