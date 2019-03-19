import React, { Component } from 'react';

class About extends Component {
    state = {  }
    render() { 
        return ( 
           <section id={this.props.id} className="about">
<div className="container ">
<div className="row">
<div className="col-lg-12 text-center text-uppercase">
<h2 className="font-weight-bold">About Me</h2>
<hr className="star-light"></hr>
</div>
</div>
<div className="row">
<div className="col-md-12 about-text">
<p className="about-me-paragraph">
Front End Web Developer using  React.Common use of UI libraries: Bootstrap 4, React-Bootstrap, MaterializeCSS, Material-UI, Elemental-UI .
Tools I use : GitHub,Sublime Text,Visual Studio,Chrome Developer Tools,Command Line
</p>
</div>
</div>
</div>
           </section>
         );
    }
}
 
export default About;