
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import React from 'react';
import { authOption } from '../api/auth/[...nextauth]/route';

const GalleryPage = async () => {
    const session = await getServerSession(authOption);
    console.log({session});
    return (
        <div className=''>
            {
                [1,2,3,4].map(img => (
                    <Image key={img} src={`/image/${img}.jpg`} alt='fjjf' height={1080} width={1920}/>
                ))
            }
            {/* <Image src='/image/1.jpg' alt='fjjf' height={1080} width={1920}/> */}
        </div>
    );
};

export default GalleryPage;