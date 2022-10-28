import React, { useState } from 'react';
import './NavigationBar.css'

const NavigationBar = (props) => {
    return (  
        <nav className='nav-bar'>
            <h1 className='nav-text'>Social<small className='text-muted feed-text'>Feed</small></h1>
        </nav>
    );
}
 
export default NavigationBar;