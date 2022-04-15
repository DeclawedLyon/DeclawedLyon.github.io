import './skill-card.css'

export default function SkillCard(props) {

  return (
    <div className="skill-card">
      <div className='image-container'>
        <img src={props.logo} alt="skill logo" className='skill-logo'></img>
      </div>
      <h1>{props.name}</h1>
    </div>
  )
}