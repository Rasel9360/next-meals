import { getPostData } from '@/postApi/postApi';
import Link from 'next/link';
import React from 'react';

const page = async () => {
    // console.log(name);
    const getPost = await getPostData();
    // console.log(getPost);
    return (
        <div>
            <h1 className="text-4xl text-center font-serif my-5">All Post</h1>
            <div className='w-11/12 mx-auto grid grid-cols-3 gap-5'>
                {
                    getPost.slice(0,15).map(post => (
                        <div key={post.id} className='border-2 p-4 space-y-2 font-serif'>
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