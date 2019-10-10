import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import About from './About/About'
import Projects from './Projects/Projects'

function App() {
  const [fixed, setFixed] = useState('')
  window.addEventListener('scroll', () => {
    window.pageYOffset >= 902 ? setFixed(' fixed') : setFixed('')
  })
  return (
    <div className="App">
      <Route
        path='/'
        component={ About }
      />
      <section className="portfolio">
        <Route
          path='/'
          component={ Projects }
        />
        <div className={`section_container${fixed}`}>
          <div className="section_mount">
            <h2 className="section">Portfolio</h2>
            </div>
        </div>
      </section>
    </div>
  );
}

export default App;
