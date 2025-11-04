import React from 'react';
import Img1 from "../../assets/medium-shot-girl-posing-with-dog.jpg"
import { Link } from 'react-router';
import { MdAdsClick } from 'react-icons/md';
import { BsArrowDownSquareFill } from 'react-icons/bs';

const PetCareWinter = () => {
    return (
        <div className='w-11/12 mx-auto rounded-3xl bg-fuchsia-300 mt-24'>
            <h1 className='text-center text-7xl font-extrabold text-white hover:text-orange-500 hover:text-shadow-neutral-50 bg-gray-900 py-5'>Winter Care Tips for Pets</h1>
            <div className='grid grid-cols-1 items-center shadow-2xl gap-5 md:grid-cols-1 lg:grid-cols-2 p-10'>
                <div className='p-2 shadow-2xl rounded-2xl bg-gray-900'>
                    <div className='mb-5 p-1 animate__animated animate__fadeInDown'>
                        <h2 className='text-3xl font-bold my-2 text-gray-200 '>🧣 1. Keep Them Warm</h2>
                        <p className='text-lg text-gray-300 font-semibold'>Ensure your pet stays cozy by providing warm bedding and limiting outdoor time during extreme cold. Use pet sweaters or jackets for short-haired breeds.</p>
                    </div>
                    <div className='mb-5 p-1 animate__animated animate__fadeInDown  animate__delay-1s'>
                        <h2 className='text-3xl font-bold my-2 text-gray-200 '>🍲 2. Balanced Winter Diet</h2>
                        <p className='text-lg text-gray-300 font-semibold'>Pets burn more energy in winter to stay warm. Provide nutritious, protein-rich meals and make sure they always have access to fresh water — not ice-cold!</p>
                    </div>
                    <div className='mb-5 p- animate__animated animate__fadeInDown
                    animate__delay-2s'>
                        <h2 className='text-3xl font-bold my-2 text-gray-200 '>🧼 3. Paw & Skin Protection</h2>
                        <p className='text-lg text-gray-300 font-semibold'>Cold air and road salt can harm your pet’s paws and skin. Use pet-safe balms and wipe their paws after walks to prevent irritation or dryness.</p>
                    </div>
                    <div className='mb-5 p-1 animate__animated animate__fadeInDown
                    animate__delay-3s'>
                        <h2 className='text-3xl font-bold my-2 text-gray-200 '>🏠 4. Indoor Exercise</h2>
                        <p className='text-lg text-gray-300 font-semibold'>Keep your pet active indoors with games, toys, and short training sessions. Physical activity prevents winter weight gain and keeps them mentally sharp.</p>
                    </div>
                    <div className='mb-5 p-1 animate__animated animate__fadeInDown
                    animate__delay-4s'>
                        <h2 className='text-3xl font-bold my-2 text-gray-200 '>💧 5. Hydration & Humidity</h2>
                        <p className='text-lg text-gray-300 font-semibold'>Winter heating can cause dry air that dehydrates pets. Use a humidifier and ensure they drink enough water to maintain healthy skin and fur.</p>
                    </div>
                    <div className='mb- p-1 animate__animated animate__fadeInDown animate__delay-5s'>
                        <h2 className='text-3xl font-bold mb-2 text-gray-200  '>🩺 6. Regular Vet Checkups</h2>
                        <p className='text-lg text-gray-300 font-semibold'>Cold weather can worsen joint pain and health conditions. Schedule regular vet visits to monitor your pet’s health, especially for senior pets.</p>
                    </div>

                </div>
                <div>
                    <figure className='shadow-2xl hover:scale-105 transition ease-in-out'>
                        <img className='rounded-2xl '
                            src={Img1} alt="" />
                    </figure>

                    <div className='text-center pt-10 '>
                        <h1 className='text-white rounded-2xl text-center text-2xl bg-blue-950 p-2 font-bold animate__animated animate__backInLeft animate__delay-4s'>Click Expert Our Vets Button 
                            <span className='flex items-center justify-center pt-4'><BsArrowDownSquareFill /></span>
                        </h1>
                        <Link to="/vetSection">
                        <button className="btn mt-1 btn-xs bg-blue-950 hover:bg-orange-600 text-2xl rounded-2xl p-10 text-white  sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl animate__animated animate__backInRight animate__delay-5s">Meet Our Expert Vets<MdAdsClick /></button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PetCareWinter;