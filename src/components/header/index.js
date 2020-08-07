import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  
  return (
    <div className="header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
           <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" exact activeClassName="active" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/contact">
                    Contact
                </NavLink>             
              </li>            
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </nav> 
    </div>
    
  );
}
export default Header;