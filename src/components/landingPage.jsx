import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl/lib/Grid' 
class LandingPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div id={this.props.id} style={{width: '100%', margin: 'auto'}}>
         <Grid className="landing-grid">
            <Cell col={12}>
                <img 
                src={this.props.img}
                alt="avatar"
                className="avatar-img px-3"
                />
                <div className="banner-text ">
                    <h1>Front-End Web Developer</h1>
                   
                    <hr className="star-light" />
                    <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJs</p>
               <div className="social-link">
                
                {/* GitHub */}
                <a className="" href="https://github.com/Shahriar-Shakil" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-github" aria-hidden="true"/>
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/shahriar-shakil/" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-linkedin" aria-hidden="true"/>
                </a>
                {/* Freecodecamp */}
                <a href="https://www.freecodecamp.org/shahriar-shakil" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-free-code-camp" aria-hidden="true"/>
                </a>
                {/* codepen */}
                <a href="https://codepen.io/shahriar-shakil/#" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-codepen" aria-hidden="true"/>
                </a>
               </div>
                </div>
            </Cell> 
         </Grid>
         </div>
         );
    }
}
 
export default LandingPage;