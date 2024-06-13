"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const Header = () => {

    const pathName = usePathname();

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
        // {
        //     title: 'Contact',
        //     path: '/contact'
        // },
        // {
        //     title: 'Blogs',
        //     path: '/blogs'
        // },
        // {
        //     title: 'Category',
        //     path: '/category'
        // }
    ]

    if(pathName.includes('dashboard'))
        return (
            <div className="bg-sky-500 p-5">
                Dashboard
            </div>
        )

    return (
        <div className="flex justify-around p-5 bg-blue-800 text-white">
            <div className="font-bold">Next Meals</div>
            <div>
                <ul className="flex gap-10">
                    {links.map((link) => <Link className={pathName === link.path && 'text-orange-600 border-b-4 font-bold border-orange-600'} key={link.path} href={link.path}>{link.title}</Link>)}
                </ul>
            </div>
        </div>
    );
};

export default Header;