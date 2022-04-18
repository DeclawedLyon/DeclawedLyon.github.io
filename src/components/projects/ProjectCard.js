import { Fragment } from "react";
import './project-card.css'

export default function ProjectCard(props) {

  // console.log(props)
  return (
    <div className="project-card">
      <a href={props.projectLink} target="_blank" className="project-link"><img src={props.projectImage} alt={`${props.projectName} link`} className="project-image"></img></a>
      <h1 className="project-title">{props.projectName}</h1>
      <p className="project-description">{props.projectDescription}</p>
      <h3 className="tech-stack-title">Tech Stack</h3>
      <span>{props.techStack}</span>
    </div>
  )
}