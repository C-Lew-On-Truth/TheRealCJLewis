import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import AboutMe from './components/AboutMe.jsx';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/AboutMe" component={AboutMe} />
      </Router>
    </div>
  );
}

export default App;
