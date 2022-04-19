import './quick-nav.css'

export default function QuickNav(props) {


  return (
    <aside id="sidebar">
      <nav id="sidebar-quicknav">
        <a href="#welcome-title" id="about-me-anchor"><div className='quick-nav-link' id="about-me-QL"></div></a>
        <a href="#about-me-field"><div className='quick-nav-link' id=''></div></a>
        <a href="#project-field"><div className='quick-nav-link' id=''></div></a>
        <a href="#skills-field"><div className='quick-nav-link' id=''></div></a>
        <a href="#contact-me-field"><div className='quick-nav-link' id=''></div></a> 
      </nav>
    </aside>
  )
}