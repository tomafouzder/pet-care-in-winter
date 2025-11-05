import React from 'react';
import HeroSlider from '../HeroSlider/HeroSlider';
import AllServices from '../AllServices/AllServices';
import useServices from '../../Hooks/useServices';
import 'animate.css';
import PetCareWinter from '../PetCareWinter/petCareWinter';

const Home = () => {
    const { services, loading, error } = useServices()

    return (
        <div className='bg-white'>
            <HeroSlider></HeroSlider>
            <div className='text-center pt-16'>
                <h1 className='text-7xl text-blue-950 hover:text-orange-600 font-extrabold hover:scale-115 transition ease-in-out animate__animated animate__fadeInDown'>Popular Winter Care Services
                </h1>
                <p className='pt-8 text-xl pb-24 text-gray-600 font-semibold'>Keep your furry friends warm, healthy, and happy this winter with our all-in-one pet care solutions. From custom winter coat fittings that protect against the cold, to heated pet bed setups for cozy rest, we make comfort a priority. Our skin and paw care treatments prevent dryness and cracking, while the warm bath and blow-dry package keeps coats clean, fluffy, and odor-free. Ensure optimal health through our winter nutrition consultations, offering energy-rich diets to boost immunity. Plus, enjoy the outdoors safely with our winter walk and safety service, featuring protective boots and reflective gear for stress-free adventures.</p>
            </div>
            <div className='grid grid-cols-1 bg-gray-200 w-11/12 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                {
                    services.map(service => (
                        <AllServices key={service.serviceId} service={service}></AllServices>
                    ))
                }
            </div>


            <div>
                <PetCareWinter></PetCareWinter>
            </div>
        </div>
    );
};

export default Home;