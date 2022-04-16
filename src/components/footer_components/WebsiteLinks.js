import './websiteLinks.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


export default function WebsiteLinks(props) {
  return (
    <footer>
      <ul id='quick-links'>
        <li><a href={props.gitHubLink} target="_blank">
          <FontAwesomeIcon className="footer-link" icon={brands('github-square')} /></a></li>
        <li><a href={props.linkedInLink} target="_blank">
          <FontAwesomeIcon className="footer-link" icon={brands('linkedin')} /></a></li>
        <li><a href={props.codePenLink} target="_blank">
          <FontAwesomeIcon className="footer-link" icon={brands('codepen')} /></a></li>
        <li><a href={props.codeCampLink} target="_blank">
          <FontAwesomeIcon className="footer-link" icon={brands('free-code-camp')} /></a></li>
       <li> <a href={'#'}>
        <FontAwesomeIcon className="footer-link" icon={solid('file-download')} /></a></li>
      </ul>
    </footer>
  )
}