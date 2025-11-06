import React from 'react';
import Img1 from "../../assets/medium-shot-girl-posing-with-dog.jpg"
import { Link } from 'react-router';
import { MdAdsClick } from 'react-icons/md';
import img1 from "../../assets/close-up-veterinary-doctor-taking-care-pet.jpg"
import img2 from "../../assets/brunette-girl-vet-clinic-examine-with-stethoscope-dog-breed-yorkshire-terrier.jpg"
import img3 from "../../assets/vet-holding-syringe-dog-lying-side.jpg"
import img4 from "../../assets/veterinarian-taking-care-pet-dog (1).jpg"
import img5 from "../../assets/professional-veterinarian-check-dog-breed-yorkshire-terrier-using-otoscope-pet-hospital.jpg"
import img6 from "../../assets/two-female-lovers-spending-time-with-their-boxer-camper-van-winter-trip.jpg"

const PetCareWinter = () => {
    return (
        <section className='bg-base-200'>
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
                    </div>
                </div>
            </div>

            {/* .....Meet Our Vets */}

            <div className='w-11/12 mx-auto pb-20 pt-28'>
                <p className='text-center border-b-8 text-6xl p-4 font-bold'>Details Our Vets and Book Our Services</p>

                <div className='  grid gap-4 lg:gap-0 grid-cols-1 lg:grid-cols-2 mt-24'>
                    <figure className="hover-gallery w-9/12 rounded-2xl ">
                        <img src={img1} />
                        <img src={img2} />
                        <img src={img3} />
                        <img src={img4} />
                    </figure>
                    <div className=' text-shadow-sm'>
                        <p className='text-2xl text-gray-600 border-y-2 border-gray-600 font-semibold p-2'>
                            Regular veterinary checkups are essential to keep your pet healthy and happy. A vet can detect early signs of illness, provide vaccinations, and offer nutrition advice. Always maintain proper hygiene, balanced diets, and exercise routines. Preventive care and timely medical attention greatly improve your pet’s quality of life.
                        </p>
                        <div className='grid grid-cols-1 gap-1 md:grid-cols-2 bg-gray-100 mt-22 '>
                            <img className='shadow-2xl rounded-2xl hover:scale-125 transition ease-in-out  ' src={img5} alt="" />
                            <img className='shadow-2xl rounded-2xl hover:scale-125 transition ease-in-out ' src={img6} alt="" />
                        </div>
                        <div className='mt-20'>
                            <div className='flex flex-col md:flex-row justify-center bg-blue-950 p-2 gap-4 items-center'>
                                <h2 className=' text-4xl text-white font-bold'>Click Here</h2>
                                <Link className='flex justify-center items-center ' to="/vetSection">
                                    <button className="btn mt-1 btn-xs bg-blue-950 hover:bg-orange-600 text-2xl rounded-2xl p-10 text-white  sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl ">Meet Our Expert Vets<MdAdsClick /></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    );
};

export default PetCareWinter;