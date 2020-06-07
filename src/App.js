import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import AboutMe from './components/AboutMe.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';


function App() {
  return (
    <div>
      <Router>
        <Route exact path="/TheRealCJLewis" component={HomePage}/>
        <Route exact path="/TheRealCJLewis/AboutMe" component={AboutMe}/>
        <Route exact path="/TheRealCJLewis/Experience" component={Experience}/>
        <Route exact path="/TheRealCJLewis/Projects" component={Projects}/>
      </Router>
    </div>
  );
}

export default App;
