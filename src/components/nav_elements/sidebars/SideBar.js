import '../nav-bars.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { useContext } from 'react';
import { StateContext } from '../../../context/StateContext';
// import testLogo from '../images/testLogo.png'
// import Logo from './Logo';

export default function SideBar () {
  const { state } = useContext(StateContext)
  return (
    <aside className={`side-bar ${state.sideBarIsOpen ? 'open' : 'closed'}`}>
      {/* <a href="#" className="nav-item">Logo</a> */}
      <div className='side-bar-logo'>
      </div>
      <div className='side-bar-main'>
        <a href="#" className={`menu-icon ${state.sideBarIsOpen ? 'open' : ''}`}><div><FontAwesomeIcon icon={solid('fire')} />{state.sideBarIsOpen && 'About'}</div></a>
        <a href="#" className={`menu-icon ${state.sideBarIsOpen ? 'open' : ''}`}><div><FontAwesomeIcon icon={solid('tasks-alt')}/> {state.sideBarIsOpen && 'Skills'}</div></a>
        <a href="#" className={`menu-icon ${state.sideBarIsOpen ? 'open' : ''}`}><div><FontAwesomeIcon icon={solid('history')}/>{state.sideBarIsOpen && 'Experience'}</div></a>
        <a href="#" className={`menu-icon ${state.sideBarIsOpen ? 'open' : ''}`}><div><FontAwesomeIcon icon={solid('project-diagram')} />{state.sideBarIsOpen && 'Projects'}</div></a>
        <a href="#" className={`menu-icon ${state.sideBarIsOpen ? 'open' : ''}`}><div><FontAwesomeIcon icon={solid('address-card')} />{state.sideBarIsOpen && 'Contact'}</div></a>
      </div>
      <div className='side-bar-end'>
        <h3 className={`footer-id ${state.sideBarIsOpen ? 'open' : 'closed'} ${state.isIcon ? 'is-icon' : 'isnt-icon'}`}>
          declan.e.lyons@gmail.com
        </h3>
      </div>
    </aside>
  )
}