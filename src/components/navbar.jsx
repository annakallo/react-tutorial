import React, {Component} from "react";

// stateless functional component
const NavBar = ({totalCounters}) => {
    console.log('NavBar-Rendered');
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <h1 className="title center">ParmTracker</h1>
            </div>
            <span>{totalCounters}</span>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start center">
                    <a className="navbar-item" href="https://bulma.io">
                        Expenses
                    </a>
                    <a className="navbar-item" href="https://bulma.io">
                        Grafs
                    </a>
                </div>
            </div>
        </nav>
    );
};


export default NavBar;