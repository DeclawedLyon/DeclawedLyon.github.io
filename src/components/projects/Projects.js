import ProjectCard from "./ProjectCard";

export default function Projects(props) {

  return (
    <div id='project-field'>
        <h3>Projects</h3>
        <hr></hr>
      <div className='content-card'>
        {/* {projectElementArray} */}
        {props.projectArray.map((element, x) => {
          // console.log('element--', element.projectName);
          return (
            <ProjectCard 
              key={`${x}-${element.projectName}`}
              projectName={element.projectName}
              projectLink={element.projectLink}
              projectImage={element.projectImage}
              projectDescription={element.projectDescription}
              techStack={element.techStack}
            />
          )
        })}
      </div>
    </div>
  )
}