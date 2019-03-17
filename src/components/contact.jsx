import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <section id={this.props.id} className="my-5">
            <div className="container pb-5">
            <div className="row">
            <div className="col-lg-12 text-center">
            <h2>Contact Me</h2>
            </div>
            </div>
            <div className="row">
            <div className="col-lg-12 col-lg-offset-2">
            <div className="cont">
            <ul className="contact">
            <li style={{textAlign : "left"}}>
                <p>
                  <i className="fab fa-skype fa-3x"></i>
                </p>
                <p>
                  <strong>Skype</strong>
                  <br/>shakil_f@ymail.com
                  </p>
              </li>
              <li style={{textAlign : "left"}}>
                <p>
                  <i className="fa fa-phone fa-3x"></i>
                </p>
                <p>
                  <strong>Phone:</strong>
                  <br/>01780503417</p>
              </li>
              <li style={{textAlign : "left"}}>
                <p>
                  <i className="fa fa-envelope fa-3x"></i>
                </p>
                <p>
                  <strong>E-mail:</strong>
                  <br/>toshahriarshakil@gmail.com</p>
              </li>
            </ul>
            </div>
            </div>
            </div>
            </div>
            </section>
         );
    }
}
 
export default Contact;