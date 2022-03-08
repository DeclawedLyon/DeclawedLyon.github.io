import './App.css';
import NavBar from './components/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
// consider moving styles to css style page

function App() {
  return (
    <div className="App">
      <NavBar />

      <div id="about-me-field">
        <img class='profile-picture' src='https://media-exp1.licdn.com/dms/image/C5603AQGBQ9umKsqvrw/profile-displayphoto-shrink_800_800/0/1634181442830?e=1652313600&v=beta&t=6JRYUmH2ZypD9du4ubhjhN9CRsiwAvR9cnuNQmPsfOQ' id='profile-picture' alt='profile picture' width={300} height={300}></img>
        <p><FontAwesomeIcon icon={faFire} /> Description about myself. How I got into coding and where I'd like to take it</p>
        <FontAwesomeIcon icon={solid('fire')} />
      </div>

      <div id="experience-field">
        <p>Job experience and work experience. Describe working on a team in Lighthouse</p>
      </div>

      <div id='project-field'>
        link to projects. Include: Bridge. Tweeter(?). (want to build app for Elevation. link to that(?))
        <br></br>
        <a href='#'>Bridge</a>
      </div>

      <div id='contact-me-field'>
        Quick link to automate emailing me.
        contact and phone information.
        Location / working hours / contact hours.
        <br></br>
        {/* <a href='#'>Link to my current resume</a> */}
      </div>

      <footer style={{
        display: 'flex',
        'justifyContent': 'flex-end',
        // 'border-width': '10px',
        // 'borderBlockStyle': 'solid',
        // 'borderColor': 'green'
        // justifyContent: 'space-between',
        // 'flexDirection': 'column'
      }}>
        <a href='#'>github<FontAwesomeIcon icon={brands('github-square')} /></a>
        <a href='#'>linkedIn<FontAwesomeIcon icon={brands('linkedin')} /></a>
        <a href='#'>resume<FontAwesomeIcon icon={solid('file-download')} /></a>
      </footer>
    </div>
  );
}

export default App;
