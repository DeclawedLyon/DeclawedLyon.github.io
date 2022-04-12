import { Fragment } from "react";
import './project-card.css'

export default function ProjectCard(props) {


  return (
    <div className="project-card">
      <a href={props.projectLink} target="_blank" className="project-link"><img src={props.projectImage} alt={`${props.projectName} link`} className="project-image"></img></a>
    </div>
  )
}