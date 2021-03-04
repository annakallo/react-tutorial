import React from "react";
import NavLink from "react-router-dom/NavLink";

// stateless functional component
const NavBar = ({totalCounters}) => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <h1 className="title center">ParmTracker</h1>
            </div>
            <span>{totalCounters}</span>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start center">
                    <NavLink className="navbar-item" to="/incomes">
                        Incomes
                    </NavLink>
                    <NavLink className="navbar-item" to="/expenses">
                        Expenses
                    </NavLink>
                    <NavLink className="navbar-item" to="/overview">
                        Overview
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};


export default NavBar;