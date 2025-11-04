import React from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FcRating } from 'react-icons/fc';
import { Link } from 'react-router';

const AllServices = ({ service }) => {
    const {serviceId, image, serviceName, rating, price } = service;
    return (
        <div className="card bg-base-100 border hover:text-white hover:bg-orange-600 shadow-2xl object-cover hover:scale-105 transition ease-in-out ">
            <figure className="h-48 overflow-hidden">
                <img
                    src={image}
                    alt="Pets"
                    className="rounded-xl w-full object-cover hover:scale-125 transition ease-in-out" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-2xl">{serviceName}</h2>
                <p className='flex items-center text-xl font-semibold pl-2 gap-2'>Rating:  <FaStarHalfAlt /> { rating}</p>
                <p className='text-xl font-semibold'>Price : $ {price}</p>

                <div className="card-actions">
                    <Link to={`/cardDetails/${serviceId}`}> <button className="btn rounded-2xl text-xl py-8 px-8  bg-blue-950  hover:bg-orange-500 text-white">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AllServices;