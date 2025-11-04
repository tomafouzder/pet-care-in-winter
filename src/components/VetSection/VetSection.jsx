import React from 'react';
import useVets from '../../Hooks/useVets';
import VetDetails from '../VetDetails/VetDetails';

const VetSection = () => {
    const { vets, loading, error } = useVets()
    return (
        <div className='bg-gray-800'>
        <div>
            <h3 className='text-white hover:bg-orange-600 text-6xl font-semibold text-center py-10 bg-gray-800'>Meet Our Expert Vets</h3>
            <div className='grid mt-1 grid-cols-1 rounded-4xl bg-gray-900 w-11/12 mx-auto  gap-6 '>
                {
                    vets.map(vet => (
                        <VetDetails key={vet.id} vet={vet}></VetDetails>
                    ))
                }
            </div>
        </div>
        </div>
    );
};

export default VetSection;