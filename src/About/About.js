import React from 'react'
import './About.css'

export default function About() {
    return(
        <section className="about">
          <div className="inner_container">
            <div className="banner_section">
              <img 
                className="banner"
                src={require('./images/banner.jpg')}/>
              <img 
                className="headshot"
                src={require('./images/headshot.jpg')}/>
            </div>
            <div className="main_section">
              <header className="header">
                <h2 className="subtitle">Software Engineer</h2>
                <h1 className="title">Josh Lear</h1>
                <a className="email"
                   target="_blank"
                   href="mailto:joshrlear@gmail.com"
                >joshrlear@gmail.com</a>
              </header>
              <div className="btn_container">
                <a className="btn_noback"
                   target="_blank"
                   href="https://www.linkedin.com/in/weshouldhirejosh/"
                >LinkedIn</a>
                <a className="btn_noback"
                   target="_blank"
                   href="https://github.com/Joshrlear"
                >Github</a>
              </div>
              <article className="info_section">
                <h2>About</h2>
                <p>Background in real estate, marketing, sales and 
                  project management. Student of Thinkful's Engineering
                  flex program. Avid tennis player, mountain bike 
                  enthusiast and music production hobbyist.
                </p>
                <p>I am proficient in React, nodejs, postgres, HTML, 
                  websockets, css/sass, jQuery, and I plan to add 
                  neural networks to that list next.
                </p>
                <p>My ideal position would be at a company that
                  specializes in either artificial intelligence or
                  with a creative company like Adobe or Spotify.
                </p>
              </article>
            </div>
          </div>
      </section>
    )
}