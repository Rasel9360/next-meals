"use client"
import React from 'react';

const page = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newUser = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
            image: event.target.image.value,
            type: event.target.type.value
        }

        const resp = fetch('http://localhost:3000/api/auth/signup/new-user', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(resp);
    };

    return (
        <div className='flex justify-center items-center mt-20 '>
            <form 
            className='border p-5 bg-slate-100 shadow-lg rounded-md'
            onSubmit={handleSubmit}>
                <label>Your Name</label>
                <br />
                <input type="text"
                    className='border-2 p-2'
                    name="name" id=""
                    placeholder='enter your name' />
                <br />
                <label>Your Email</label>
                <br />
                <input type="email"
                    className='border-2 p-2'
                    name="email" id=""
                    placeholder='enter your email' />
                <br />
                <label>Your Password</label>
                <br />
                <input type="password"
                    className='border-2 p-2'
                    name="password" id=""
                    placeholder='********' />
                <br />
                <label>Your Image</label>
                <br />
                <input type="text"
                    className='border-2 p-2'
                    name="image" id=""
                    placeholder='enter your image' />
                <br />
                <select name="type" id="" className='border-2 mt-2'>
                    <option value="admin">Admin</option>
                    <option value="moderator">Moderator</option>
                    <option value="member">Member</option>
                </select>
                <br />
                <input className='mt-5 border-2 p-1 bg-blue-400 text-white cursor-pointer' type="submit" value="Sign Up" />
            </form>
        </div>
    );
};

export default page;