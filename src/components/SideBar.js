import './nav-bars.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { useContext } from 'react';
import { StateContext } from '../context/StateContext';

export default function SideBar () {
  const { state } = useContext(StateContext)
  return (
    <aside className='side-bar'>
      {/* <a href="#" className="nav-item">Logo</a> */}
      <div className='side-bar-main'>
        <a href="#" className="menu-icon"><FontAwesomeIcon icon={solid('fire')} />{state.sideBarIsOpen && 'About'}</a>
        <a href="#" className="menu-icon"><FontAwesomeIcon icon={solid('tasks-alt')}/> {state.sideBarIsOpen && 'Skills'}</a>
        <a href="#" className="menu-icon"><FontAwesomeIcon icon={solid('history')}/>{state.sideBarIsOpen && 'Experience'}</a>
        <a href="#" className="menu-icon"><FontAwesomeIcon icon={solid('project-diagram')} />{state.sideBarIsOpen && 'Projects'}</a>
        <a href="#" className="menu-icon"><FontAwesomeIcon icon={solid('address-card')} />{state.sideBarIsOpen && 'Contact'}</a>
      </div>
      <div className='side-bar-end'>
        <h3 className='footer-id'>
          Declan Lyons
        </h3>
      </div>
    </aside>
  )
}