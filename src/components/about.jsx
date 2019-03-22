import React, { Component } from 'react';

class About extends Component {
    state = {  }
    render() { 
        return ( 
           <section id={this.props.id} id="about">
<div className="container about my-5">
<div className="row">
<div className="col-lg-12 text-center text-uppercase ">
<h2 className="font-weight-bold">About Me</h2>
<hr className="star-light"></hr>
<p className="about-me-paragraph px-3">
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