import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Sidenav } from 'materialize-css';

class SignOutLinks extends Component {
    componentDidMount(){
        Sidenav.init(
            document.querySelectorAll('.sidenav')
        )
    }

    render() {
        return (
            <div className="container">
                <Link to='/' className="brand-logo">Mario Plan</Link>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink className="sidenav-close" to='/signin'>Sign In</NavLink></li>
                    <li><NavLink className="sidenav-close" to='/signup'>Sign Up</NavLink></li>
                </ul>
                <ul className="right sidenav" id="nav-wrap">
                    <li><NavLink className="sidenav-close" to='/signin'>Sign In</NavLink></li>
                    <li><NavLink className="sidenav-close" to='/signup'>Sign Up</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default SignOutLinks;