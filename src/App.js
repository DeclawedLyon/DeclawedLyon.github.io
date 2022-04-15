import { useEffect, useState } from 'react';
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
import ContactMe from './components/ContactMe';

// ============================
//            Images
// ============================
import bridgePhoto from './images/projects/bridge-dashboard.png'
import bookWorldPhoto from './images/projects/bookWorld_2.png'
import tweeterPhoto from './images/projects/tweeter.png'
import schedulerPhoto from './images/projects/schedulerImage_2.png'

function App() {
  // ==========================
  //       App Variables
  // ==========================
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
      techStack: ['Node,js', 'React', 'PostgreSQL', 'Ruby on Rails']
    },
    {
      projectName: 'Book World',
      projectLink: 'https://github.com/DeclawedLyon/midterm_store',
      projectImage: bookWorldPhoto,
      projectDescription: 'Book World is a buy-and-sell app built with Node.js, Express and PostgreSQL. The app features a homepage, a favorites page, a shopping cart as well as the ability to message sellers. Users can favourite items to come back to later and can use the search feature to find specific items and filter them by price. Users have a converstations page where they can access their messages with buyers, and can mark items as sold.',
      techStack: ['Node.js', 'Express', 'PostgreSQL']
    },
    {
      projectName: 'SPW Stock Display',
      projectLink: 'https://github.com/DeclawedLyon/Store_Display',
      projectImage: bridgePhoto,
      projectDescription: 'Product display app for front of store staff use.',
      techStack: []
    },
    {
      projectName: 'Scheduler',
      projectLink: 'https://github.com/DeclawedLyon/Scheduler',
      projectImage: schedulerPhoto,
      projectDescription: 'A demo React Application designed to help schedule interviews between students and teachers.',
      techStack: []
    },
    {
      projectName: 'Tweeter',
      projectLink: 'https://github.com/DeclawedLyon/tweeter',
      projectImage: tweeterPhoto,
      projectDescription: 'Tweeter is a simple, single-page Twitter clone.',
      techStack: ['Node.js', 'Express', 'Mongo']
    }
  ]

  const skillsArray = [
    {
      skill: 'Node.js',
      logo: '' 
    },
    {
      skill: 'Git',
      logo: '' 
    },
    {
      skill: 'HTML',
      logo: '' 
    },
    {
      skill: 'CSS',
      logo: '' 
    },
    {
      skill: 'JavaScript',
      logo: '' 
    },
    {
      skill: 'Ruby',
      logo: '' 
    },
    {
      skill: 'Rails',
      logo: '' 
    },
    {
      skill: 'C#',
      logo: '' 
    },
    {
      skill: 'Express.js',
      logo: '' 
    },
    {
      skill: 'JQuery',
      logo: '' 
    },
    {
      skill: 'Socket.io',
      logo: '' 
    },
    {
      skill: 'React.js',
      logo: '' 
    },
    {
      skill: 'Redux',
      logo: '' 
    },
    {
      skill: 'Angular',
      logo: '' 
    },
    {
      skill: 'Twilio',
      logo: '' 
    },
    {
      skill: 'Netlify',
      logo: '' 
    },
    {
      skill: 'Material UI',
      logo: '' 
    },
    {
      skill: 'PostgreSQL',
      logo: '' 
    },
    {
      skill: 'MongoDB',
      logo: '' 
    },
  ]
  const aboutMeObject = {
    name: 'Declan Lyons',
    // languagesList: ['JavaScript', 'HTML', 'CSS', 'SQL'],
    techList: ['React', 'Angular', 'MongoDB'],
    description: "My name is Declan and I'm a Full Stack Web Developer out of Victoria, B.C. My focus is on Front-end Web Development while staying up to date with the newest technologies to build creative apps in the most efficient way possible. A graduate of Lighthouse Labs Full Stack Web Development program."
  }
  // ==========================
  //      State Variables
  // ==========================
  const [projectElementArray, setProjectElementArray] = useState([])

  const formatProjectArray = (arr) => {
    let projectArray = arr.map(element => {
      console.log('element--', element.projectName);
      return (
        <ProjectCard 
          projectName={element.projectName}
          projectLink={element.projectLink}
          projectImage={element.projectImage}
          projectDescription={element.projectDescription}
          techStack={element.techStack}
        />
      )
    });
    console.log(projectArray)
    setProjectElementArray(projectArray)
  }

  useEffect(() => {
    formatProjectArray(projectsArray)
  }, [])

  
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
          {skillsArray.map(skill => {
            return (
              <SkillCard
                name={skill.skill}
                logo={skill.logo}
              />
            )
          })}
          <div className='content-card'>
            
            <h3>title</h3>
            <hr></hr>
          <p>Tech Skills</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div id='project-field'>
            <h3>Projects</h3>
            <hr></hr>
          <div className='content-card'>
            {projectElementArray}
          </div>
        </div>

        <ContactMe />
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
