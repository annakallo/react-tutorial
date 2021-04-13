import React from "react";
import NavLink from "react-router-dom/NavLink";

const NavBar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <h1 className="title center">ParmTracker</h1>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                   data-target="navbarBasicExample">
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                { /* <div className="navbar-start center">
                    <NavLink className="navbar-item" to="/home">
                        Home
                    </NavLink>
                </div> */ }
                <div className="navbar-end center">
                    <NavLink className="navbar-item" to="/incomes">
                        Incomes
                    </NavLink>
                    <NavLink className="navbar-item" to="/expenses">
                        Expenses
                    </NavLink>
                    <NavLink className="navbar-item" to="/overview">
                        Overview
                    </NavLink>
                    { /* <NavLink className="navbar-item" to="/login">
                        Login
                    </NavLink>
                        <NavLink className="navbar-item" to="/register">
                        Register
                        </NavLink> */ }
                </div>
            </div>
        </nav>
    );
};


export default NavBar;