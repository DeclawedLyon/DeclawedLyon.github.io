import './App.css';

// consider moving styles to css style page

function App() {
  return (
    <div className="App">
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        {/* These links will either be links to pages OR links to page locations */}
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Experience</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
        <a href="#">Resume</a>
      </nav>

      <div id="about-me-field">
        <img src='https://media-exp1.licdn.com/dms/image/C5603AQGBQ9umKsqvrw/profile-displayphoto-shrink_800_800/0/1634181442830?e=1652313600&v=beta&t=6JRYUmH2ZypD9du4ubhjhN9CRsiwAvR9cnuNQmPsfOQ' id='profile-picture' alt='profile picture' width={300} height={300}></img>
        <p>Description about myself. How I got into coding and where I'd like to take it</p>
      </div>

      <div id="experience-field">
        <p>Job experience and work experience. Describe working on a team in Lighthouse</p>
      </div>

      <div id='project-field'>
        link to projects. Include: Bridge. Tweeter(?). (want to build app for Devon. link to that(?))
        <br></br>
        <a href='#'>Bridge</a>
      </div>

      <div id='contact-me-field'>
        Quick link to automate emailing me.
        contact and phone information.
        Location / working hours / contact hours.
        <br></br>
        <a href='#'>Link to my current resume</a>
      </div>

      <footer style={{
        display: 'flex',
        'justifyContent': 'flex-end'
        // justifyContent: 'space-between',
        // 'flexDirection': 'column'
      }}>
        <a href='#'>github</a>
        <a href='#'>linkedIn</a>
        <a href='#'>linkedIn</a>
      </footer>
    </div>
  );
}

export default App;
