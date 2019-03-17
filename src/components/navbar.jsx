import React, { Component } from "react";

import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav navbar navbar-expand-md  " id="navbar" >
        <div className="container">
          <div className="navbar-header navbar-brand" onClick={this.scrollToTop}>
          <i className="fa fa-code" id="facolor" aria-hidden="true"></i>
          Mr. Shahriar
          </div>
          <button type="button" className="navbar-toggler " data-toggle="collapse" data-target="#bitm">
                <span  className="navbar-toggler-icon " >MENU <i style={{paddingLeft:"2px"}} className="fas fa-bars"></i></span>
            </button>
            <div className="collapse navbar-collapse" id="bitm">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
              className="nav-link"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                PROJECTS
              </Link>
            </li>
            <li className="nav-item">
              <Link
              className="nav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                ABOUT ME
              </Link>
            </li>
            <li className="nav-item">
              <Link
              className="nav-link"
                activeClass="active"
                to="resume"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                RESUME
              </Link>
            </li>
            <li className="nav-item">
              <Link
              className="nav-link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                CONTACT
              </Link>
            </li>
            
          </ul>
            </div>
          
        </div>
      </nav>
    );
  }
}