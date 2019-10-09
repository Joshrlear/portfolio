import React from 'react'
import details from '../projectsData'
import './Projects.css'

export default class Projects extends React.Component {
    render() {
        return (
            <ul className="projects">
                {details.projects.map((project, i) => {
                    return (
                    <li key={i} className="project">
                        <div className="section_one">
                            <div className="img_container">
                                <img
                                    className="app_name" 
                                    src={require(`../images/chatr.png`)}/>
                                <div className="button_container">
                                  <button 
                                    className="btn_noback" 
                                    src={project.live}>Live</button>
                                  <button 
                                    className="btn_noback btn_bottom" 
                                    src={project.github}>Github</button>
                                </div>
                            </div>
                        </div>
                        <div className="section_two">
                            <h2 className="app_name">{project.name}</h2>
                            <p className="app_description">{project.description}</p>
                            <p className="tech_used">{project.tech}</p>
                        </div>
                    </li>
                    )
                })}
            </ul>
        )
    }
}