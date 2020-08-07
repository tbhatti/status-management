import React from "react";
import { NavLink, Redirect } from "react-router-dom";

class Header extends React.Component { 
  constructor (props) {
		super(props)
		this.state = {
            redirect: false
		}
		
    }
  logout = () => {
    localStorage.setItem("name", false);
    this.setState({redirect: true})
  }
  render () {
    return (
      <div className="header">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <a className="nav-link"  onClick={this.logout}>
                    Logout
                  </a>
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
          {this.state.redirect && <Redirect to={`/`} />}
      </div>
      
    );
  }
}
export default Header;