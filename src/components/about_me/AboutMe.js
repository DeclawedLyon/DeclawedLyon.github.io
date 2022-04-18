import './about-me.css'

export default function AboutMe(props) {
  return (
    <div id="about-me-field">
      <div className='content-card'>
        <hr></hr>
        <h1>About Me</h1> 
        <p>Hello World! My name is</p>
        <h3>Declan Lyons</h3>
        <h4>I love exploring new concepts!</h4>
        <p>{props.info.description}</p>
      </div>
    </div>
  )
}