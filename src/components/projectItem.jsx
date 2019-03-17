import React, { Component } from 'react';
import { Card, CardImg  } from 'reactstrap';
class ProjectItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
      const {img,git,demo}=this.props
        return ( 
            <div className="project-item shadow-lg rounded my-3">
            <Card >
            <div className="caption">
              <div className="caption-content">
                <a href={git} target="_blank">
                <i className="fab fa-github-square"></i>
                Repo
                </a>
                <a href={demo} target="_blank">
                <i className="fas fa-desktop"></i>
                Live
                </a>
              </div>
            </div>
              <CardImg top width="100%" style={{height:"200px"}} src= {img} />
              
            </Card>
          </div>
         );
    }
}
 
export default ProjectItem;