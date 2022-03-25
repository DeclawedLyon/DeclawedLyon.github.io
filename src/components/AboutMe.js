import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function AboutMe() {


  return (
    <div id="about-me-field">
      <img className='profile-picture' src='https://media-exp1.licdn.com/dms/image/C5603AQGBQ9umKsqvrw/profile-displayphoto-shrink_800_800/0/1634181442830?e=1652313600&v=beta&t=6JRYUmH2ZypD9du4ubhjhN9CRsiwAvR9cnuNQmPsfOQ' alt='profile picture' id='profile-picture' alt='profile picture' width={300} height={300}></img>
      <div className='content-card'>
        {/* <div className='content-card-cover'>
          <h2>About Me</h2>
        </div> */}
        <h3>title</h3> 
        <hr></hr>
        <ul>
          <li>list of skills and languages</li>
          <li>list of languages and skills</li>
        </ul>
      <p><FontAwesomeIcon icon={solid('fire')} /> Description about myself. How I got into coding and where I'd like to take it</p>
      </div>
      {/* <FontAwesomeIcon icon={solid('fire')} /> */}
    </div>
  )
}