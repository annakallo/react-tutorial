import React, {Component} from "react";

class NavBar extends Component {

    render() {
      return (
          <nav className="navbar" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
                  <h1 className="title center">ParmTracker</h1>
              </div>
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
    }
}

export default NavBar;