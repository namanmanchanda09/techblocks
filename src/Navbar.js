import React from 'react';

import image from './icon.png'
import 'tachyons'
import './Navbar.css'

const Navbar = () =>{
    return(
        <div className='navbar tc'>
            <nav className='fixed'><img className='grow' src={image} alt='techblocks'></img></nav>
            
        </div>


    );
}

export default Navbar;

