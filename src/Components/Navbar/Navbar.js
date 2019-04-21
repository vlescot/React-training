import React from 'react'
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';
import { connect } from 'react-redux';

const Navbar = ({ auth, profile }) => {
    const navLinks = auth.uid ? <SignInLinks profile={profile} /> : <SignOutLinks profile={profile} /> ;

    return (
        <nav className="nav-wrapper grey darken-3">
            <a href="#sidenav" onClick={(e) => {e.preventDefault()}} data-target="nav-wrap" className="sidenav-trigger">
                <i className="material-icons">menu</i>
            </a>

            { navLinks }

        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);