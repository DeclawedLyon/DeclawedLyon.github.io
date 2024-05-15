// ============================
//            Styles
// ============================
import './App.css';
// ============================
//            Macros
// ============================
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
// ============================
//            Hooks
// ============================
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useVisualMode from './hooks/useVisualMode';
// ============================
//          Components
// ============================
// import SideBar from './components/sidebars/SideBar';
import NavBar from './components/nav_elements/NavBar';
import AboutMe from './components/about_me/AboutMe';
import WebsiteLinks from './components/footer_components/WebsiteLinks';
import Skills from './components/skills/Skills';
import QuickNav from './components/nav_elements/sidebars/QuickNav';
import ContactMe from './components/contact_me/ContactMe';
import Projects from './components/projects/Projects';

// ============================
//            Images
// ============================
import profilePicture from './images/20220321_184854.jpg'
import bridgePhoto from './images/projects/bridge-dashboard.png'
import bookWorldPhoto from './images/projects/bookWorld_2.png'
import tweeterPhoto from './images/projects/tweeter.png'
import schedulerPhoto from './images/projects/schedulerImage_2.png'
import jqueryLogo from './images/skills/jquery_logo_icon_167804.png'
import resumePDF from './images/DeclanLyonsResume.pdf'
import spwImage from './images/projects/SPWStore.png'
import Backyard from './components/backyard/Backyard';
import sagelyPhoto from './images/projects/Sagely.png'

function App() {
  // ==========================
  //       App Variables
  // ==========================
  const [dev, setDev] = useState(false);
  const apiKey = process.env.REACT_APP_API_KEY;


  const codePenLink = 'https://codepen.io/declawedlyon'
  const linkedInLink = 'https://www.linkedin.com/in/declan-lyons-099052223/'
  const gitHubLink = 'https://github.com/declawedlyon'
  const codeCampLink = "https://www.freecodecamp.org/Declawed_Lyon"
  const codeCampCertificates = {
    responsiveWebDesign: 'https://freecodecamp.org/certification/Declawed_Lyon/responsive-web-design',
  }
  // const languagesList = ['JavaScript', 'HTML', 'CSS', 'SQL'] 
  // const techList = ['React', 'Angular', 'MongoDB']
  const projectsArray = [
    {
      projectName: 'Sagely',
      projectLink: 'https://github.com/DeclawedLyon/k2-demo-next-tailwind',
      projectImage: sagelyPhoto,
      projectDescription: `Sagely is an evolving project tracker designed to simplify the management of financial documents related to your projects. While it doesn’t currently integrate with Sage 50, it offers a user-friendly interface for tracking quotes, invoices, and work orders. As you continue to develop Sagely, it aims to provide a comprehensive solution for project management, allowing you to associate these financial documents with larger project files.`,
      techStack: ['Node.JS', 'Next.JS', 'SQLite', 'Prisma ORM'],
      development: true
    },
    {
      projectName: 'Bridge',
      projectLink: 'https://github.com/DeclawedLyon/Bridge-Final-Project',
      projectImage: bridgePhoto,
      projectDescription: 'Bridge is a shipping logistics utility application. It helps businesses or people with intensive shipping requirements keep all of their information in one place. This makes supply chain management easier and more manageable for the user.',
      techStack: ['Node.JS', 'React', 'PostgreSQL', 'Ruby on Rails'],
      development: false
    },
    {
      projectName: 'Book World',
      projectLink: 'https://github.com/DeclawedLyon/midterm_store',
      projectImage: bookWorldPhoto,
      projectDescription: 'Book World is a buy-and-sell app built with Node.js, Express and PostgreSQL. The app features a homepage, a favorites page, a shopping cart as well as the ability to message sellers. Users can favourite items to come back to later and can use the search feature to find specific items and filter them by price. Users have a converstations page where they can access their messages with buyers, and can mark items as sold.',
      techStack: ['Node.JS', 'Express', 'PostgreSQL'],
      development: false
    },
    {
      projectName: 'SPW Stock Display',
      projectLink: 'https://github.com/DeclawedLyon/Store_Display',
      projectImage: spwImage,
      projectDescription: 'Product display app for front of store staff use.',
      techStack: ['Node.JS', 'Ruby', 'Rails'],
      development: false
    },
    {
      projectName: 'Scheduler',
      projectLink: 'https://github.com/DeclawedLyon/Scheduler',
      projectImage: schedulerPhoto,
      projectDescription: 'A demo React Application designed to help schedule interviews between students and teachers.',
      techStack: ['Node.JS', 'React', 'Express'],
      development: false
    },
    {
      projectName: 'Tweeter',
      projectLink: 'https://github.com/DeclawedLyon/tweeter',
      projectImage: tweeterPhoto,
      projectDescription: 'Tweeter is a simple, single-page Twitter clone.',
      techStack: ['Node.js', 'Express', 'Mongo'],
      development: false
    }
  ]

  const skillsArray = [
    {
      skill: 'TypeScript',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
    },
    {
      skill: 'JavaScript',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Javascript_on_figma.png' 
    },
    {
      skill: 'React.js',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' 
    },
    {
      skill: 'NextJs',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg'
    },
    {
      skill: 'Node.js',
      logo: 'https://cdn.sanity.io/images/yl4vxloa/production/d8c8025b1695a3f14f849b99afc71d917ef40813-480x480.png' 
    },
    {
      skill: 'Git',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Git_format.png' 
    },
    {
      skill: 'Tailwind',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png?20230715030042'
    },
    {
      skill: 'Material UI',
      logo: 'https://cdn.sanity.io/images/yl4vxloa/production/5b6e5467f6d7136061937b59d6ec3639f775e61b-820x820.png' 
    },
    {
      skill: 'Express.js',
      logo: 'https://cdn.sanity.io/images/yl4vxloa/production/fd636cb44ce8d52b8a70c399cec0bab2c51b39f4-1024x1024.png' 
    },
    {
      skill: 'Socket.io',
      logo: 'https://cdn.sanity.io/images/yl4vxloa/production/c0941751c096119d67259c2b549f5a90e8c086dd-512x512.png' 
    },
    {
      skill: 'Twilio',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Cib-twilio_%28CoreUI_Icons_v1.0.0%29.svg' 
    },
    {
      skill: 'Netlify',
      logo: 'https://cdn.sanity.io/images/yl4vxloa/production/a585504e30bdadca447b3302af097fa769d6eb48-2400x2400.png'
    },
    {
      skill: 'Redux',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png' 
    },
    {
      skill: 'PostgreSQL',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' 
    },
    {
      skill: 'MongoDB',
      logo: 'https://cdn.sanity.io/images/yl4vxloa/production/72eb74dae2b1a60c597435c1c3b0b4a7f087886b-650x650.png' 
    },
    {
      skill: 'Prisma',
      logo: 'https://prismalens.vercel.app/header/logo-white.svg'
    }
  ]
  const aboutMeObject = {
    name: 'Declan Lyons',
    description: "I'm a Full Stack Web Developer with a solid foundation in TypeScript, Next.js, and React. My approach to web development is rooted in a deep understanding of both front-end and back-end technologies, enabling me to build comprehensive web solutions. I specialize in the full development lifecycle, from conceptualizing and designing scalable architectures to implementing responsive UIs. "
  }
  const fontAwesomeIcons = {
    sms: <FontAwesomeIcon icon={solid('comment-sms')} />,
    fire: <FontAwesomeIcon icon={solid('fire')} />,
    gitHub: <FontAwesomeIcon icon={brands('github-square')} />,
    linkedIn: <FontAwesomeIcon icon={brands('linkedin')} />,
    codePen: <FontAwesomeIcon icon={brands('codepen')} />,
    codeCamp: <FontAwesomeIcon icon={brands('free-code-camp')} />,
    fileDownload: <FontAwesomeIcon className="footer-link" icon={solid('file-download')} />,
    email: <FontAwesomeIcon icon={solid('envelope')} />
  }
  // ==========================
  //          Modes
  // ==========================
  const APP = 'APP'
  const DEVENV = 'DEVENV'
  // ==========================
  //        Functions
  // ==========================

  const {mode, transition, back } = useVisualMode(
    dev ? DEVENV : APP 
  )

  return (
    <div className="App">
      {mode === DEVENV && <Backyard transition={() => transition(APP)}/>}

      {mode === APP && <NavBar />}
      {mode === APP && <QuickNav 
        codePenLink={codePenLink}
        linkedInLink={linkedInLink}
        gitHubLink={gitHubLink} 
        codeCampLink={codeCampLink} 
        resume={resumePDF}
      />}
    
      {mode == APP && (<div id='content-container'>
        <h1 id="welcome-title">Welcome!</h1>
        <img className='profile-picture' src={profilePicture} alt='profile picture' id='profile-picture' width={300} height={300}></img>

        {mode === APP && <AboutMe info={aboutMeObject}/>}
        {mode === APP && <Projects projectArray={projectsArray}/>}
        {mode === APP && <Skills skillArray={skillsArray} />}
        {mode === APP && (
        <ContactMe 
          linkedIn={linkedInLink} 
          icons={[fontAwesomeIcons.sms, fontAwesomeIcons.linkedIn, fontAwesomeIcons.email]} 
        />)}
      </div>)}

      
      {/* {mode === APP && <button onClick={() => transition(DEVENV)}>backyard</button>} */}
    </div>
  );
}

export default App;
