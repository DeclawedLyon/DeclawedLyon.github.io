import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function NavBar() {

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      {/* These links will either be links to pages OR links to page locations */}
      <a href="#">Logo</a>
      <a href="#">About</a>
      <a href="#">Experience</a>
      <a href="#">Projects</a>
      <a href="#">Contact</a>
      <a href="#">Resume</a>
    </nav>
  )
}