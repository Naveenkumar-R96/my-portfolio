import React from 'react'
import Project from '../Project/Project'
import { Element } from 'react-scroll'
import "./ProjectContainer.css"

const ProjectContainer = () => {
    const projects =[
        {
            img:"https://plus.unsplash.com/premium_photo-1681487906725-ecd65970ac66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title:"Travel Site",
            desc:"Browse premium related images on iStock | Save 20% with code UNSPLASH2",
            link:"www.google.com"
        },
        {
            img:"https://plus.unsplash.com/premium_photo-1681487906725-ecd65970ac66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title:"Travel Site",
            desc:"Browse premium related images on iStock | Save 20% with code UNSPLASH2",
            link:"www.google.com"
        },
        {
            img:"https://plus.unsplash.com/premium_photo-1681487906725-ecd65970ac66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title:"Travel Site",
            desc:"Browse premium related images on iStock | Save 20% with code UNSPLASH2",
            link:"www.google.com"
        },
    ]
  return (
    <div>
      <Element className="projectContainer" name="projects">
        <h1>Projects</h1>
        <p>Here are some projects which I done for making livies of people easy</p>
        <div className="projectcontainer__projects">
          {
            projects.map((projects,index)=>{
              return(
                <Project 
                  key={index}
                  img={projects.img}
                  title={projects.title}
                  desc={projects.desc}
                  link={projects.link}
                  />
              )
            })
          }
        </div>
      </Element>
    </div>
  )
}

export default ProjectContainer
