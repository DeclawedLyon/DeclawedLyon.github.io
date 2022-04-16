import './about-me.css'

export default function AboutMe(props) {
  return (
    <div id="about-me-field">
      <div className='content-card'>
        <h3>About Me</h3> 
        <hr></hr>
        <p>{props.info.description}</p>
      </div>
    </div>
  )
}