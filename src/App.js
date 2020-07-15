import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import AboutMe from './components/AboutMe.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import ThirdPartyExpo from './side-components/ThirdPartyExpo.jsx';
import ExpoModal from './side-components/ExpoModal.jsx'


function App() {
  return (
    <div>
      <Router basename="/TheRealCJLewis" forceRefresh={true}>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/AboutMe" component={AboutMe}/>
        <Route exact path="/Experience" component={ExpoModal}/>
        <Route exact path="/Projects" component={Projects}/>
      </Router>
    </div>
  );
}

export default App;
