import React from 'react';
import Nav from '../Component/Shared/Navber/Nav';
import { Outlet } from 'react-router';

const Mainlayout = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            
        </div>
    );
};

export default Mainlayout;