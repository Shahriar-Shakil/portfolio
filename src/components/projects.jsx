import React, { Component } from 'react';
import ProjectItem from './projectItem'
class Projects extends Component {
    state = {  }
    render() { 
        return ( 
            <section id={this.props.id} className="projects" >
<div className="container p-5">
        <div className="row">
            <div className="col-md-12 text-center">
            <h1>Recent Projects</h1>
            <hr className="star-primary"/> 
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
            <ProjectItem 
            img="https://i.postimg.cc/9X6csvTZ/asset2.png"
            title="Portfolio"
            description=""
            git="https://github.com/Shahriar-Shakil/first-resume.git"
            demo="https://pensive-einstein-1f0c4f.netlify.com/"
            />
      </div>
      <div className="col-md-4">
            <ProjectItem 
            img="https://i.postimg.cc/1tXdz3xX/asset1.png"
            title="Product Search"
            description=""
            git="https://github.com/Shahriar-Shakil/search-app.git"
            demo="https://serene-austin-ed8ae7.netlify.com/"
            />
      </div>
      <div className="col-md-4">
            <ProjectItem 
            img="https://i.postimg.cc/tRZXSX19/asset6.png"
            title="Pomodoro Clock"
            description=""
            git="https://codepen.io/shahriar-shakil/pen/RvMLrg"
            demo="https://codepen.io/shahriar-shakil/pen/RvMLrg"/>
      </div>
      {/* second row */}
            </div>
            <div className="row">
            <div className="col-md-4">
            <ProjectItem 
            img="https://i.postimg.cc/wvrGRYHV/asset3.png"
            title="Calculator"
            description=""
            git="https://github.com/Shahriar-Shakil/calculator-reactjs.git"
            demo="https://relaxed-wescoff-6855f6.netlify.com/"
            />
      </div>
      <div className="col-md-4">
            <ProjectItem 
            img="https://i.postimg.cc/z3Z2pwyH/asset5.png"
            title="University Website"
            description=""
            git="https://github.com/Shahriar-Shakil/bitm-project"
            demo="https://elastic-minsky-809e2f.netlify.com/"
            />
      </div>
      <div className="col-md-4">
            <ProjectItem 
            img="https://i.postimg.cc/4yhFz2xT/asset4.png"
            title="Random Quote Generator"
            description=""
            git="https://github.com/Shahriar-Shakil/random-quote-machine"
            demo="https://wonderful-hamilton-69d829.netlify.com/"/>
      </div>
      </div>
      <div className="row">
      <div className="col-md-4">
            <ProjectItem 
            img="https://i.postimg.cc/SNcm4D75/asset7.png"
            title="Markdown "
            description=""
            git="https://codepen.io/shahriar-shakil/pen/MLOKog"
            demo="https://codepen.io/shahriar-shakil/pen/MLOKog"/>
      </div>
      </div>
            

        </div>
            </section>
        

       
        
        );
    }
}
 
export default Projects;
