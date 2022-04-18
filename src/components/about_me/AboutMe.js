import './about-me.css'

export default function AboutMe(props) {
  return (
    <div id="about-me-field">
      <div className='content-card'>
          <hr></hr>
          <h1>About Me</h1> 
        <div id='about-me-header'>
          <span>Hello World! My name is</span>
          <h2>Declan Lyons</h2>
          <h2 id='secondary-statement'>I love exploring new concepts!</h2>
        </div>
          <p>{props.info.description}</p>
      </div>
    </div>
  )
}