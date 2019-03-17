import React, { Component } from 'react';
import Education from './education'
import Experience from './experience'
import Skills from './skill'
class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <section id={this.props.id} className="py-3">
<div style={{width:"90%",margin:"auto"}}>
<div className="row">
<div className = "col-md-4 resume-left-side">
<div style={{textAlign:'center'}}>
                  <img src ="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                  alt="avatar"
                  style={{height:'200px'}}
                  />
                </div>

                <h2 style={{paddingTop:'2em'}}>Shahriar Shakil</h2>
                <h4 style={{color:'gray'}}>Front-end Developer</h4>
                <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                  <h5>Address</h5>
                  <p>Dhaka,Bangladesh</p>
                  <h5>Phone</h5>
                  <p>+88017xxxxxxxx</p>
                  <h5>Email</h5>
                  <p>someone@example.com</p>
                  <h5>Web</h5>
                  <p>mywebsite.com</p>
                  <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>

</div>
<div className="col-md-8 resume-right-col">
<div className="resume-wraper">
<h2>Education</h2>
                <Education 
                startYear={2015}
                endYear={2019}
                schoolName="IUBAT"
                schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
                <Education 
                startYear={2012}
                endYear={2014}
                schoolName="Intermediate"
                schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
                <hr style={{borderTop:"3px solid #e22947"}}/>
                <h2>Experience</h2>
                <Experience
              startYear={2018}
              endYear="present"
              jobName="FreeLancer"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
              <hr style={{borderTop:"3px solid #e22947"}}/>
              <h2>Skills</h2>
                <Skills
                skill="JavaScript"
                progress={75}
                />
                <Skills
                skill="React"
                progress={30}
                />
                <Skills
                skill="HTML/CSS"
                progress={85}
                />
                <Skills
                skill="NodeJs"
                progress={50}
                />
                
     
</div>
           
</div>
</div>

</div>
            </section>
         );
    }
}
 
export default Resume;