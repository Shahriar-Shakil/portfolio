import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar'
import About from './components/about'
import LandingPage from './components/landingPage'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <LandingPage
       img="https://i.postimg.cc/GmrmtPVS/aa.jpg"
      id="landingpage"/>
      <Projects id="projects"/>

      <About
      id="about"
      />
      {/* <Resume
      id="resume"
      /> */}
      <Contact id="contact"/>
      <Footer />

 {/* <Section
 title="section 2"
 id="section2"
 />
 <Section
 title="section 3"
 id="section3"
 /> */}
      </div>


    );
  }
}

export default App;
