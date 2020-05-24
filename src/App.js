import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import AboutMe from './components/AboutMe.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
//import VideoExpos from './side-components/VideoExpos.jsx';
//import AwesomeCarousel from './side-components/AwesomeCarousel.jsx';
//import VideoCarousel from './side-components/VideoCarousel.jsx';



function App() {
  return (
    <div>
      <Router>
        <Route exact path="/TheRealCJLewis" component={HomePage} />
        <Route exact path="/AboutMe" component={AboutMe} />
        <Route exact path="/Experience" component={Experience} />
        <Route exact path="/Projects" component={Projects} />
      </Router>
    </div>
  );
}

export default App;
