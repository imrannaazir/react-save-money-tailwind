import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {
    const routes = [
        { id: 1, name: 'Shop', link: './shop' },
        { id: 2, name: 'Deals', link: './deals' },
        { id: 3, name: 'Coupons', link: './coupons' },
        { id: 4, name: 'Contact', link: './contact' },
    ]
    return (
        <div>

            <ul>{
                routes.map(route => <Link key={route.id} route={route}></Link>)}</ul>
        </div>
    );
};

export default Navbar;