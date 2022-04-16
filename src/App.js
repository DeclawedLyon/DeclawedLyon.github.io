import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import './App.css';
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

// ============================
//            Images
// ============================
import profilePicture from './images/20220321_184854.jpg'
import bridgePhoto from './images/projects/bridge-dashboard.png'
import bookWorldPhoto from './images/projects/bookWorld_2.png'
import tweeterPhoto from './images/projects/tweeter.png'
import schedulerPhoto from './images/projects/schedulerImage_2.png'
import jqueryLogo from './images/skills/jquery_logo_icon_167804.png'
import Projects from './components/projects/Projects';

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
  // const languagesList = ['JavaScript', 'HTML', 'CSS', 'SQL'] 
  // const techList = ['React', 'Angular', 'MongoDB']
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
      // logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
      logo: 'https://cdn.sanity.io/images/yl4vxloa/production/d8c8025b1695a3f14f849b99afc71d917ef40813-480x480.png' 
    },
    {
      skill: 'Git',
      // logo: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Git-logo-black.svg' 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Git_format.png' 
    },
    {
      skill: 'JavaScript',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Javascript_on_figma.png' 
    },
    {
      skill: 'HTML',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' 
    },
    {
      skill: 'CSS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' 
    },
    {
      skill: 'SASS',
      logo: 'https://cdn.sanity.io/images/yl4vxloa/production/2825d163301127c72b6121baebb5e570689596e5-480x480.png'
    },
    {
      skill: 'Ruby',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg' 
    },
    {
      skill: 'Rails',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Ruby_on_Rails_logo.svg' 
    },
    // {
    //   skill: 'C#',
    //   logo: 'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)#/media/File:C_Sharp_wordmark.svg' 
    // },
    {
      skill: 'Angular',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg' 
    },
    {
      skill: 'React.js',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' 
    },
    {
      skill: 'Redux',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png' 
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
      skill: 'JQuery',
      // logo: 'https://upload.wikimedia.org/wikipedia/commons/8/81/JQuery_logo_text.svg' 
      logo: jqueryLogo 
    },
    {
      skill: 'Socket.io',
      logo: 'https://cdn.sanity.io/images/yl4vxloa/production/c0941751c096119d67259c2b549f5a90e8c086dd-512x512.png' 
    },
    {
      skill: 'Twilio',
      // logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg' 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Cib-twilio_%28CoreUI_Icons_v1.0.0%29.svg' 
    },
    {
      skill: 'Netlify',
      logo: 'https://cdn.sanity.io/images/yl4vxloa/production/a585504e30bdadca447b3302af097fa769d6eb48-2400x2400.png' 
      // logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Netlify_logo.svg' 
    },
    {
      skill: 'PostgreSQL',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' 
    },
    {
      skill: 'MongoDB',
      logo: 'https://cdn.sanity.io/images/yl4vxloa/production/72eb74dae2b1a60c597435c1c3b0b4a7f087886b-650x650.png' 
    },
  ]
  const aboutMeObject = {
    name: 'Declan Lyons',
    description: "My name is Declan. I'm a Full Stack Web Developer out of Victoria, B.C. with a goal-driven creative mindset and passion for learning and innovating. My focus is on Front-end Web Development while staying up to date with the newest technologies to build creative apps in the most efficient way possible.  I am a graduate of Lighthouse Labs' Full Stack Web Development program."
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

  return (
    <div className="App">
      <NavBar />
      <QuickNav />
    
      <div id='content-container'>
        <h1 id="welcome-title">Welcome!</h1>
        <img className='profile-picture' src={profilePicture} alt='profile picture' id='profile-picture' width={300} height={300}></img>

        <AboutMe info={aboutMeObject}/>
        <Projects projectArray={projectsArray}/>
        <Skills skillArray={skillsArray} />
        <ContactMe icons={[fontAwesomeIcons.sms, fontAwesomeIcons.linkedIn, fontAwesomeIcons.email]} />
      </div>

      <WebsiteLinks 
        codePenLink={codePenLink}
        linkedInLink={linkedInLink}
        gitHubLink={gitHubLink} 
        codeCampLink={codeCampLink} 
        resume={resume}
        // icons={[]}
      /> 
    </div>
  );
}

export default App;
