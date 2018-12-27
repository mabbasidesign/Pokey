import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav>
                <div class="nav-wrapper container">
                <a href="#" class="brand-logo">Pokey</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
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