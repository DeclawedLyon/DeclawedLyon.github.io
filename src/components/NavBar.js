import './nav-bars.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { useContext } from 'react'
import { StateContext } from '../context/StateContext'
import testLogo from '../images/testLogo.png'
import logo from '../images/logo192.png'
import Logo from './Logo'

export default function NavBar(props) {
  const { state, changeMenuState } = useContext(StateContext);
  // console.log(logo)
  const menuClick = () => {
    // open / close sidebar
    console.log(state.test, state.isLoggedIn)
    
  }
  return (
    <nav id="nav-bar">
      {/* These links will either be links to pages OR links to page locations */}
      <Logo height={60} />
      <a href="#welcome-title" className="nav-item">Home</a>
      <a href="#about-me-field" className="nav-item">About Me</a>
      <a href="#" className="nav-item">Projects</a>
      <a href="#" className="nav-item">Tech Skills</a>
      <a href="#" className="nav-item">Contact Me</a>
      <button className='menu-icon-btn' style={{opacity: '0%'}}>
        <FontAwesomeIcon icon={solid('bars')} className="menu-icon" onClick={() => changeMenuState()}/>
      </button>

      {/* <a href="#">Resume</a> */}
    </nav>
  )
}