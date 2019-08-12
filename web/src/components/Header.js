import React from 'react';

const Header = () => {
    return (
        <>
        <h1>Book Time with an Advisor</h1>
        <span id="today">Today is {new Date().toLocaleDateString()}.</span>
        </>
    )
}

export default Header;