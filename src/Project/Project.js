import React from 'react'
import details from '../projectsData'

function Project() {

    projects = () => {
        details.map(project => {
            console.log(project)
        })
        return (
            <li>
          <div>
            <img/>
            <div>
              <button></button>
              <button></button>
            </div>
            <p></p>
          </div>
          <div>
            <h2></h2>
            <p></p>
          </div>
        </li>
        )
    }

    return (
        <>
            { projects }
        </>
    )
}