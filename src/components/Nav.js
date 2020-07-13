import React, { Component } from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

class Nav extends Component{
    render(){
        return(
        <nav>
            <ul className='nav-links'>
                <Link to='/Aranka'><li>Aranka</li></Link>
                <Link to='Evelyn'><li>Evelyn</li></Link>
                <Link to='Floris'><li>Floris</li></Link>
                <Link to='Hector'><li>Hector</li></Link>
                <Link to='Martina'><li>Martina</li></Link>
                <Link to='Maurits'><li>Maurits</li></Link>
                <Link to='Rahima'><li>Rahima</li></Link>
                <Link to='Sandra'><li>Sandra</li></Link>
                <Link to='Storm'><li>Storm</li></Link>
                <Link to='Wietske'><li>Wietske</li></Link>
            </ul>
        </nav>
    
    )}
}

export default Nav;