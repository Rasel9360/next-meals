import { getPostData } from '@/postApi/postApi';
import Link from 'next/link';
import React from 'react';
import { Playfair_Display } from 'next/font/google';

const play = Playfair_Display({ weight: ['400', '600', '700', '900'], subsets: ['latin'] })

export const metadata = {
    title: {
        absolute: 'Post'
    },
    description: "Chose you favorite meals",
};

const getTime = async () => {
    const res = await fetch('http://localhost:3000/time', {cache: 'no-store'} )
    const time = await res.json()
    return time.currentTime
}

const page = async () => {
    // console.log(name);
    const getPost = await getPostData();

    const currentTime = await getTime();
    // console.log(currentTime);

    

    return (
        <div>
            <h1 className="text-4xl text-center font-serif my-5">All Post</h1>
            <h1 className="text-4xl text-center font-serif my-5 text-red-600">Time : {currentTime}</h1>
            <div className='w-11/12 mx-auto grid grid-cols-3 gap-5'>
                {
                    getPost.slice(0, 15).map(post => (
                        <div key={post.id} className={`${play.className}border-2 p-4 space-y-2 font-serif`}>
                            <h2 className='text-2xl font-semibold'>{post.title}</h2>
                            <p>{post.body}</p>
                            <Link href={`/post/${post.id}`}><button className='bg-blue-600 p-2 rounded-md text-white mt-3'>See Details</button></Link>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default page;