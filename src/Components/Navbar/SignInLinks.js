import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../Store/Actions/authActions';
import { Sidenav } from 'materialize-css';

class SignInLinks extends Component {
    componentDidMount(){
        Sidenav.init(
            document.querySelectorAll('.sidenav')
        )
    }

    render() {
        const { dispatch, profile } = this.props;
        return (
            <div className="container">
                <Link to='/' className="brand-logo">Mario Plan</Link>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink className="sidenav-close" to='/create'>New Project</NavLink></li>
                    <li><a className="sidenav-close" href="/logout" onClick={ (e) => { e.preventDefault(); dispatch(signOut(e)) } }>Log Out</a></li>
                    <li><div className="btn btn-floating pink lighten-1">{profile.initials}</div></li>
                </ul>
                <ul className="right sidenav" id="nav-wrap">
                    <li><NavLink className="sidenav-close" to='/create'>New Project</NavLink></li>
                    <li><a className="sidenav-close" href="/logout" onClick={ (e) => { e.preventDefault(); dispatch(signOut(e)) } }>Log Out</a></li>
                    <li><div className="btn btn-floating pink lighten-1">{profile.initials}</div></li>
                </ul>
            </div>
        )
    }
}

export default connect()(SignInLinks)