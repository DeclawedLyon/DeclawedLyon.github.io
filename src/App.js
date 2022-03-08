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
        <div className='content-card'>
          <div className='content-card-cover'>
            <h2>About Me</h2>
          </div>
          <ul>
            <li>list of skills and languages</li>
            <li>list of languages and skills</li>
          </ul>
        <p><FontAwesomeIcon icon={faFire} /> Description about myself. How I got into coding and where I'd like to take it</p>
        </div>
        {/* <FontAwesomeIcon icon={solid('fire')} /> */}
      </div>

      <div id="experience-field">
        <div className='content-card'>
          <div className='content-card-cover'>
              <h2>Experience (certifications?)</h2>
          </div>
        <p>Job experience and work experience. Describe working on a team in Lighthouse</p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
          </div>
      </div>

      <div id='project-field'>
        <div className='content-card'>
          <div className='content-card-cover'>
              <h2>Projects</h2>
          </div>
        link to projects. Include: Bridge. Tweeter(?). (want to build app for Elevation. link to that(?))
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <a href='#'>Bridge</a>
        </div>
      </div>

      <div id='contact-me-field'>
        <div className='content-card'>
          <div className='content-card-cover'>
              <h2>Contact</h2>
          </div>
          Quick link to automate emailing me.
          contact and phone information.
          Location / working hours / contact hours.
          <br></br>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
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
        <div id='quick-links'>
          <a href='#'>
            {/* <span>github</span> */}
            <FontAwesomeIcon icon={brands('github-square')} /></a>
          <a href='#'>
            {/* <span>linkedIn</span> */}
            <FontAwesomeIcon icon={brands('linkedin')} /></a>
          <a href='#'>
            {/* <span>resume</span> */}
          <FontAwesomeIcon icon={solid('file-download')} /></a>

        </div>
      </footer>
    </div>
  );
}

export default App;
