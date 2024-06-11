"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';



const Meals = () => {
    const [search, setSearch] = useState('a');
    const [error, setError] = useState('');
    const [meals, setMeal] = useState([]);
    console.log(meals);


    const getSearchData = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
            const data = await res.json();
            setMeal(data.meals)
            setError('')
            
        } catch (error) {
            console.log(error);
            setError('No data found')
            
        }
    }

    const handler = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value);
    }

    useEffect(()=> {
        getSearchData()
    },[])

    return (
        <div className='text-white mt-5'>
            <input
                onChange={handler}
                type="text"
                className='border-transparent outline-none p-3 bg-blue-300 text-white'
                placeholder='search your meals' />
            <button
            onClick={() => getSearchData()}
            className='p-3 bg-blue-600 text-white'>Search</button>

            {/* search result */}

            <div className='grid grid-cols-3 gap-6 mt-10'>
                {
                    meals?.length > 0 && !error && meals?.map(meal => (
                        <div key={meal.idMeal} className='border-2 text-black p-3 space-y-3'>
                            <Image src={meal.strMealThumb} alt='meal img' width={500} height={300}/>
                            <h2 className='text-2xl font-serif font-semibold'>{meal.strMeal}</h2>
                            <p className='text-justify'>{meal.strInstructions}</p>
                        </div>
                    ))
                }
                {
                    error && <div>No data found</div>
                }
            </div>
        </div>
    );
};

export default Meals;