import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import './quick-nav.css'

export default function QuickNav(props) {


  return (
    <aside id="sidebar">
      <nav id="sidebar-quicknav">
      <a href={props.gitHubLink} target="_blank">
          <FontAwesomeIcon className="footer-link" icon={brands('github-square')} /></a>
          <a href={props.linkedInLink} target="_blank">
          <FontAwesomeIcon className="footer-link" icon={brands('linkedin')} /></a>
       <a href={props.codePenLink} target="_blank">
          <FontAwesomeIcon className="footer-link" icon={brands('codepen')} /></a>
       <a href={props.codeCampLink} target="_blank">
          <FontAwesomeIcon className="footer-link" icon={brands('free-code-camp')} /></a>
       <a href={props.resume} download>
        <FontAwesomeIcon className="footer-link" icon={solid('file-download')} /></a>
        {/* <a href="#" id="about-me-anchor"><div className='quick-nav-link' id="about-me-QL"></div></a>
        <a href="#"><div className='quick-nav-link' id=''></div></a>
        <a href="#"><div className='quick-nav-link' id=''></div></a>
        <a href="#"><div className='quick-nav-link' id=''></div></a>
        <a href="#"><div className='quick-nav-link' id=''></div></a>  */}
      </nav>
    </aside>
  )
}