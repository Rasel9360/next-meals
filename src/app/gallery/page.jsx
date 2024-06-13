
import Image from 'next/image';
import React from 'react';

const GalleryPage = () => {
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