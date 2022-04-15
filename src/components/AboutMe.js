import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import './about-me.css'

export default function AboutMe(props) {
  // console.log(props.info)

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