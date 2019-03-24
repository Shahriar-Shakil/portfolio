import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl/lib/Grid' 
class LandingPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div id={this.props.id} style={{width: '100%', margin: 'auto'}}>
         <Grid className="landing-grid">
            <div className="col-md-12">
                <img 
                src={this.props.img}
                alt="avatar"
                className="avatar-img "
                />
                </div>
                <div className="banner-text p-3">
                    <h1>Front-End Web Developer</h1>
                   
                    <hr className="star-light" />
                    <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJs</p>
               <div className="social-link">
                <ul className="flex-container">
                {/* GitHub */}
                    <li className="flex-item">
                    <a className="" href="https://github.com/Shahriar-Shakil" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-github" aria-hidden="true"/>
                </a>
                    </li>
                    <li className="flex-item">
                     {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/shahriar-shakil/" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-linkedin" aria-hidden="true"/>
                </a>
                    </li>
                    <li className="flex-item">
                     {/* Freecodecamp */}
                <a href="https://www.freecodecamp.org/shahriar-shakil" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-free-code-camp" aria-hidden="true"/>
                </a>
                    </li>
                    <li className="flex-item">
                    {/* codepen */}
                <a href="https://codepen.io/shahriar-shakil/#" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-codepen" aria-hidden="true"/>
                </a>
                    </li>
                   
                </ul>
                
                
               
               
                
               
               </div>
                </div>
            
         </Grid>
         </div>
         );
    }
}
 
export default LandingPage;