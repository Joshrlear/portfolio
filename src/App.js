import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import About from './About/About'
import Projects from './Projects/Projects'

function App() {
  return (
    <div className="App">
      <Route
        path='/'
        component={ About }
      />
      <Route
        path='/'
        component={ Projects }
      />
      <div className="section_container">
        <div className="section_mount">
          <h2 className="section">Portfolio</h2>
          </div>
      </div>
    </div>
  );
}

export default App;
