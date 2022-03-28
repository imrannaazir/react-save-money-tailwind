import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuAlt1Icon, MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Shop', link: './shop' },
        { id: 2, name: 'Deals', link: './deals' },
        { id: 3, name: 'Coupons', link: './coupons' },
        { id: 4, name: 'Contact', link: './contact' },
    ]
    return (
        <div className='bg-indigo-200'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>

                {open ? <XIcon></XIcon> : <MenuAlt1Icon></MenuAlt1Icon>}
            </div>

            <ul className={`md:flex justify-center absolute md:static duration-300 ease-in w-full bg-indigo-200 ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)}</ul>
        </div>
    );
};

export default Navbar;