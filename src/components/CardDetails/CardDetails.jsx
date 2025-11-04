import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../Hooks/useServices';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaCheckToSlot } from 'react-icons/fa6';

const CardDetails = () => {
    const { id } = useParams()
    const { services, loading } = useServices();

    const service = services.find(s => s.serviceId === parseInt(id))
    if (loading) return <p>Loading....</p>

    const { serviceName,
        providerName,
        providerEmail,
        price,
        rating,
        slotsAvailable,
        description,
        image,
        category } = service || {};

    return (
        <div className=" bg-base-200 min-h-screen">
            <div>
                <div className="text-6xl bg-gray-800 text-white py-10 text-center  font-bold">
                    {serviceName}</div>
                    <div className='pb-8 pt-4 text-center text-3xl font-bold text-gray-800'>
                        <p>Price : $ {price}</p>
                         <p className='flex items-center mt-2 text-lg border-y-2 border-gray-100 justify-center text-gray-500 p-1  pl-2 gap-2'>Rating:  <FaStarHalfAlt /> { rating}</p>
                         <p className='flex items-center mt-2 text-lg border-y-2 border-gray-100 justify-center text-gray-500 p-1  pl-2 gap-2'>SlotsAvailable:  <FaCheckToSlot /> { slotsAvailable}</p>
                    </div>

                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img 
                        src={image}
                        className="max-w-sm rounded-lg shadow-2xl w-full object-cover hover:scale-105 transition ease-in-out"
                    />

                    <div className='pt-10 '>
                        <div className=' border-y-2 border-gray-300 '>
                            <h1 className='text-4xl  font-bold text-gray-700'>Provider by :</h1>

                            <p className="text-xl py-2 text-gray-600 font-semibold">
                                Provider Name : {providerName}</p>
                            <p className="pb-4 text-xl text-gray-600 font-semibold">
                                Provider Email : {providerEmail}</p>
                        </div>
                        <p className="py-4 text-xl text-gray-600 font-semibold">
                            Category :  {category}</p>
                        <p className="pb-4 text-xl text-gray-600 font-semibold">
                            description: {description}
                        </p>
                    </div>

                    <div className="card bg-base-100 hover:text-white  hover:bg-gray-800  w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold">Book Our Service</h1>

                            <form >
                                <fieldset className="fieldset">
                                    {/* Name */}
                                    <label className="label text-lg font-medium">Name</label>
                                    <input type="text"
                                        className="input text-black"
                                        placeholder="Your Name" />
                                    {/* Email */}
                                    <label className="label text-lg font-medium">Email</label>
                                    <input type="email"
                                        className="input text-black"
                                        placeholder="Email" />

                                    <button className="btn bg-blue-950 text-white text-lg p-6 hover:bg-orange-600 mt-4">Book Service</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>

            </div>







        </div>
    );
};

export default CardDetails;