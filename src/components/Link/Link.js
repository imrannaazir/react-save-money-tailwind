import React from 'react';

const Link = ({ route: { name, link } }) => {
    return (
        <li><a href={link}>{name}</a></li>
    );
};

export default Link;