import React, { Component } from 'react';
import { Progress } from 'reactstrap';

class Skills extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="skill-grid">
                        <p className="pr-3">{this.props.skill} </p>
                    
                        <Progress 
                        style={{margin:'auto',width:'75%'}}
                        value={this.props.progress}
                        />
                        </div>
                    </div>
                    </div>
                
                </div>
            
         );
    }
}
 
export default Skills;