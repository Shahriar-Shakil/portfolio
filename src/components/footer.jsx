import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const year= new Date().getFullYear();
        
        return ( 
            <footer className="text-center ">
            <div className="footer-above">
              <div className="container py-5">
                <div className="row">
                  <div className="footer-col col-md-4">
                    <h3>Current Location:</h3>
                    <p>Uttara, Dacca</p>
                    <br />
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29187.47758708365!2d90.3636966037418!3d23.874199544984776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d05e7074dd%3A0xd1c58803049f00c7!2sUttara%2C+Dhaka!5e0!3m2!1sen!2sbd!4v1552815255245" style={{borderRadius: '20px'}} allowFullScreen width={300} height={200} frameBorder={0} />
                  </div>
                  <div className="footer-col col-md-4">
                    <h3>Find me on:</h3>
                    <ul className="list-inline">
                      <li>
                        <a href="https://github.com/Shahriar-Shakil" target="_blank" className="btn-social btn-outline">
                          <span className="sr-only">Github</span>
                          <i className="fab  fa-github" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.freecodecamp.org/shahriar-shakil" target="_blank" className="btn-social btn-outline">
                          <span className="sr-only">Free Code Camp</span>
                          <i className="fab fa-free-code-camp"></i>
                        </a>
                      </li>
                      
                      <li>
                        <a href="https://www.linkedin.com/in/shahriar-shakil/" target="_blank" className="btn-social btn-outline">
                          <span className="sr-only">Linked In</span>
                          <i className="fab fa-linkedin" />
                        </a>
                      </li>
                      
                    </ul>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="footer-below">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <strong>Copyright © Shahriar {year}
                      
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </footer>
         );
    }
}
 
export default Footer;