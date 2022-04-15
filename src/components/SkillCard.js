import './skill-card.css'

export default function SkillCard(props) {
  return (
    <div className="skill-card">
      <h1>{props.name}</h1>
      <img src={props.logo} alt="skill logo" className='skill-logo'></img>
    </div>
  )
}