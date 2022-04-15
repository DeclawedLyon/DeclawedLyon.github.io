import SkillCard from "./SkillCard"

export default function Skills(props) {

  return (
    <div id="skills-field">
      <div className='content-card'>
        <h3>Tech Skills</h3>
        <hr></hr>
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