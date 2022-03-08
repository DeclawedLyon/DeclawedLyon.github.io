import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function NavBar() {

  return (
    <nav id="nav-bar">
      {/* These links will either be links to pages OR links to page locations */}
      <a href="#" className="nav-item">Logo</a>
      <a href="#" className="nav-item">About</a>
      <a href="#" className="nav-item">Experience</a>
      <a href="#" className="nav-item">Projects</a>
      <a href="#" className="nav-item">Contact</a>
      {/* <a href="#">Resume</a> */}
    </nav>
  )
}