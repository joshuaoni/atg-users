import React from 'react';
import './Navbar.css';
import Typography from '@mui/material/Typography';

const Navbar = () => {
    return (
        <nav>
            <Typography variant="h6" gutterBottom component="div" className='text-align-center'>
                ATG ADMIN DASHBOARD
            </Typography>
        </nav>
    );
}
 
export default Navbar;