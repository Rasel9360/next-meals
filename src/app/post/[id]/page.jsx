import React from 'react';


export const generateMetadata = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const postData = await res.json();
    return {
        title: {
            absolute: `${postData.title}`
        },
        description: postData.body,
        keywords: postData.title.split(' ')
    }

}

const postDetailsDataGet = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json();
    // console.log(data);
    return data
}

const PostDetailsPage = async ({ params }) => {
    const { title, body } = await postDetailsDataGet(params.id);
    // console.log(postDetails);
    return (
        <div className='p-20 space-y-3 font-serif'>
            <h2 className='text-2xl font-semibold'>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default PostDetailsPage;