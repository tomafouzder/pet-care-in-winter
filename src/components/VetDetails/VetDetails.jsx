import React from 'react';

const VetDetails = ({ vet }) => {
    const { id, name, expert, email, education, description, image } = vet;
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center  rounded-2xl bg-gray-900 shadow-sm">
            <figure>
                <img className='h-96 rounded-2xl object-cover'
                    src={image}
                    alt="Movie" />
            </figure>
            <div className=" my-4 bg-gray-700 rounded-2xl">
                <h2 className="text-4xl p-4 font-bold text-white ">{name}</h2>
                <div>
                    <h2 className="text-2xl px-4 font-semibold text-gray-200 "><span className='text-white'>Expert :</span> {expert}</h2>
                    <h2 className="text-2xl py-2 px-4 font-semibold text-gray-200 border-b-2 "><span className='text-white'>Email :</span> {email}</h2>
                </div>
                <p className='text-xl p-4 font-semibold text-gray-300'><span className='text-white text-2xl'>Education :</span> {education}</p>
                <p className='text-xl pb-4 px-4 font-semibold text-gray-300'><span className='text-white text-2xl'>Description :</span> {description}</p>
            </div>
        </div>
    );
};

export default VetDetails;