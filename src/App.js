import './App.css';
// ============================
//          Components
// ============================
import NavBar from './components/NavBar';
import SideBar from './components/sidebars/SideBar';
import AboutMe from './components/AboutMe';
import WebsiteLinks from './components/WebsiteLinks';
import SkillCard from './components/SkillCard';
import QuickNav from './components/sidebars/QuickNav';
import ProjectCard from './components/ProjectCard';

// ============================
//            Images
// ============================
import bridgePhoto from './images/projects/bridge-dashboard.png'

function App() {
  const codePenLink = 'https://codepen.io/declawedlyon'
  const linkedInLink = 'https://www.linkedin.com/in/declan-lyons-099052223/'
  const gitHubLink = 'https://github.com/declawedlyon'
  const codeCampLink = "https://www.freecodecamp.org/Declawed_Lyon"
  const codeCampCertificates = {
    responsiveWebDesign: 'https://freecodecamp.org/certification/Declawed_Lyon/responsive-web-design',
  }
  const resume = 'link to resume file in ?public? file.'
  const languagesList = ['JavaScript', 'HTML', 'CSS', 'SQL'] 
  // consider turning languagelist into languageobject with {tech: image} pairs
  const techList = ['React', 'Angular', 'MongoDB']

  const projectsArray = [
    {
      projectName: 'Bridge',
      projectLink: 'https://github.com/DeclawedLyon/Bridge-Final-Project',
      projectImage: bridgePhoto,
      projectDescription: 'Bridge is a shipping logistics utility application. It helps businesses or people with intensive shipping requirements keep all of their information in one place. This makes supply chain management easier and more manageable for the user.',
      techStack: ['React', 'PostgreSQL', 'Ruby on Rails']
    },

  ]

  let x = 0;
  let projectArray = [];
  while(x < 6) {
    projectArray.push(
    <ProjectCard 
      projectName={projectsArray[0].projectName}
      projectLink={projectsArray[0].projectLink}
      projectImage={projectsArray[0].projectImage}
      projectDescription={projectsArray[0].projectDescription}
      techStack={projectsArray[0].techStack}
    />)
    x++
  }
  
  return (
    <div className="App">
      <NavBar />
      {/* <SideBar /> */}
      <QuickNav />
    
      <div id='content-container'>
        <br></br>
      {/* <Logo height={100} width={160}/> */}
      {/* <fieldset>
        <legend>Hello world</legend>
        <input type={'radio'} id={'test-1'} name={'test-buttons'} value={'button-1'}></input>
        <label for='test-1'>Test button 1</label>
        <input type={'radio'} id={'test-2'} name={'test-buttons'} value={'button-2'}></input>
        <label for='test-2'>Test button 2</label>
      </fieldset> */}


        <AboutMe languagesList={languagesList} techList={techList}/>

        <div id="skills-field">
          <SkillCard />
          <div className='content-card'>
            
            <h3>title</h3>
            <hr></hr>
          <p>Job experience and work experience. Describe working on a team in Lighthouse</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div id='project-field'>
            <h3>Projects</h3>
            <hr></hr>
          <div className='content-card'>
            {projectArray}
          </div>
        </div>

        <div id='contact-me-field'>
          <div claxssName='content-card'>
            {/* <div className='content-card-cover'>
                <h2>Contact</h2>
            </div> */}
            <h3>title</h3>
            <hr></hr>
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
      </div>

      <WebsiteLinks 
        codePenLink={codePenLink}
        linkedInLink={linkedInLink}
        gitHubLink={gitHubLink} 
        codeCampLink={codeCampLink} 
        resume={resume}
      />
      
    </div>
  );
}

export default App;
