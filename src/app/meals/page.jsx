import Meals from '@/components/Meals';
import React from 'react';

const MealsPage = () => {
    return (
        <div className='w-11/12 mx-auto mt-10'>
            <h1 className='text-2xl font-serif font-semibold text-blue-800'>Chose Your Favorite Meals</h1>
            <p>chose your favorite meals searching by input field below</p>

            <Meals></Meals>
        </div>
    );
};

export default MealsPage;