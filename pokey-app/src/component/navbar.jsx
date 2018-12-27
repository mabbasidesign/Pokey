import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav>
                <div className="nav-wrapper container">
                <Link to='/' className="brand-logo">Pokey</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/'>Home</Link></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
                </div>
            </nav>
         );
    }
}

export default Navbar;