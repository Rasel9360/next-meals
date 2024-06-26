"use client"
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";



const Header = () => {

    const pathName = usePathname();
    const router = useRouter();
    const session = useSession();
    console.log(session);

    const links = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Post',
            path: '/post'
        },
        {
            title: 'Meals',
            path: '/meals'
        },
        {
            title: 'Gallery',
            path: '/gallery'
        },
        {
            title: 'Dashboard',
            path: '/dashboard'
        },
        // {
        //     title: 'Blogs',
        //     path: '/blogs'
        // },
        // {
        //     title: 'Category',
        //     path: '/category'
        // }
    ]

    if (pathName.includes('dashboard'))
        return (
            <div className="bg-sky-500 p-5">
                Dashboard
            </div>
        )

    const handleLogin = () => {
        router.push('/api/auth/signin')
    }

    return (
        <div className="flex justify-around p-5 bg-blue-800 text-white">
            <div className="font-bold">Next Meals</div>
            <div>
                <ul className="flex gap-10">
                    {links.map((link) => <Link className={pathName === link.path && 'text-orange-600 border-b-4 font-bold border-orange-600'} key={link.path} href={link.path}>{link.title}</Link>)}
                </ul>
            </div>
            <div className="flex items-center">
                {!session.status === 'authenticated' ? <button onClick={handleLogin} className="font-bold">Login</button> :
                    <button onClick={()=> signOut()} className="font-bold">Logout</button>}
                <div  className="flex items-center ml-4 space-x-3">
                    <p>{session?.data?.user?.name}</p>
                    <p>{session?.data?.user?.type}</p>
                </div>
            </div>


        </div>
    );
};

export default Header;