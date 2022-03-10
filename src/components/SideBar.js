import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons'
import { faFire } from '@fortawesome/free-solid-svg-icons';


export default function SideBar () {
  return (
    <div class='side-bar'>
      {/* <a href="#" className="nav-item">Logo</a> */}
      hello world
      <a href="#" className="nav-item"><FontAwesomeIcon icon={faFire} />About</a>
      <a href="#" className="nav-item">Experience</a>
      <a href="#" className="nav-item">Projects</a>
      <a href="#" className="nav-item">Contact</a>
    </div>
  )
}