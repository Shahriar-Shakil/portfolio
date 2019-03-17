import React, { Component } from 'react';

class Education extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="row">
                <div className="col-md-4">
                <p>{this.props.startYear}-{this.props.endYear}</p>
                </div>
                <div className="col-md-8">
                <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
                <p>{this.props.schoolDescription}</p>
                </div>

            </div>
         );
    }
}
 
export default Education;