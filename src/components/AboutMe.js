import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import profilePicture from '../images/20220321_184854.jpg'

export default function AboutMe(props) {
  console.log(props)

  return (
    <div id="about-me-field">
      <img className='profile-picture' src={profilePicture} alt='profile picture' id='profile-picture' width={300} height={300}></img>
      <div className='content-card'>
        <h3>title</h3> 
        <hr></hr>
        <ul>
          <li>list of skills and languages</li>
          <li>list of languages and skills</li>
        </ul>
      <p><FontAwesomeIcon icon={solid('fire')} /> Description about myself. How I got into coding and where I'd like to take it</p>
      </div>
    </div>
  )
}