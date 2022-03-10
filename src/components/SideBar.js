import './nav-bars.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

export default function SideBar () {
  return (
    <div className='side-bar'>
      {/* <a href="#" className="nav-item">Logo</a> */}
      <h1>hello world</h1>
      <a href="#" className="menu-icon"><FontAwesomeIcon icon={solid('fire')} />About</a>
      <a href="#" className="menu-icon"><FontAwesomeIcon icon={solid('tasks-alt')}/> Skills</a>
      <a href="#" className="menu-icon"><FontAwesomeIcon icon={solid('history')}/>Experience</a>
      <a href="#" className="menu-icon"><FontAwesomeIcon icon={solid('project-diagram')} />Projects</a>
      <a href="#" className="menu-icon"><FontAwesomeIcon icon={solid('address-card')} />Contact</a>
    </div>
  )
}