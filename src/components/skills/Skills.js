import SkillCard from "./SkillCard"

export default function Skills(props) {

  return (
    <div id="skills-field">
        <hr></hr>
      <div className='content-card'>
        <h1>Tech Skills</h1>
        <div id='skills-container'>
          {props.skillArray.map((skill, x) => {
            return (
              <SkillCard
                key={`${x}-${skill.skill}`}
                name={skill.skill}
                logo={skill.logo}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}