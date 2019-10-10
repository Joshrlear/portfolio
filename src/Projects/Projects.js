import React from 'react'
import details from '../projectsData'
import './Projects.css'

export default class Projects extends React.Component {
    constructor() {
        super()
        this.image = ([React.createRef(), React.createRef()])
        this.state = {
            hover: false
        }
    }

    hover = () => {
        this.setState({ hover: true })
    }

    leave = () => {
        this.setState({ hover: false })
    }

    render() {
        return (
            <ul className="projects">
                {details.projects.map((project, i) => {
                    return (
                    <li key={i} 
                        className="project"
                        onMouseOver={() => this.hover()}
                        onMouseLeave={() => this.leave()}
                    >
                        <div className="section_one">
                            <div className="img_container">
                                <img
                                    ref={ this.image[i] }
                                    className={`app_image ${this.state.hover}`} 
                                    src={project.img}/> {/* when running locally add http://localhos:3000/ + */}
                                <div className="button_container">
                                  <a 
                                    className="btn_noback"
                                    target="_blank"
                                    href={project.live}>Live</a>
                                  <a 
                                    className="btn_noback btn_bottom"
                                    target="_blank"
                                    href={project.github}>Github</a>
                                </div>
                            </div>
                            <p className="tech_used_medium">{project.tech}</p>
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