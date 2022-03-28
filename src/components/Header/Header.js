import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='text-6xl'>Welcome to my pricing club.</h1>
            <p className='text-4xl'>Save most of money </p>
            <p>by giving your money to me.</p>

        </div>
    );
};

export default Header;