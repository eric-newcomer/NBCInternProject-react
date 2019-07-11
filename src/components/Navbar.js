import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="Navbar">
                <a href="/" title="Home" rel="home" class="Navbar-brand">
                    <img src="themes/custom/nbcucareers/logo.svg" alt="Home"/>
                </a>
            </nav>
        );
    }
}

export default Navbar;