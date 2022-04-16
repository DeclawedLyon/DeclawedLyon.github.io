import './quick-nav.css'

export default function QuickNav(props) {


  return (
    <aside id="sidebar">
      <nav id="sidebar-quicknav">
        <a href="#" id="about-me-anchor"><div className='quick-nav-link' id="about-me-QL"></div></a>
        <a href="#"><div className='quick-nav-link' id=''></div></a>
        <a href="#"><div className='quick-nav-link' id=''></div></a>
        <a href="#"><div className='quick-nav-link' id=''></div></a>
        <a href="#"><div className='quick-nav-link' id=''></div></a> 
      </nav>
    </aside>
  )
}