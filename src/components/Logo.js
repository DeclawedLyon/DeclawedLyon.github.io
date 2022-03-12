import logo from '../images/logo192.png'
import testLogo from '../images/testLogo.png'
import './logo.css'

export default function Logo(props) {
  const mainStyle = {
    filter: 'invert(100%)',
    height: `${props.height}px`,
    width: `${props.width}px`,
    // overflow: 'hidden',
  }
  const croppedStyle = {
    // // filter: 'invert(100%)',
    height: `${props.height}px`,
    width: `${props.width}px`,
    // marginBottom: '-80px',
    // // overflow: 'hidden',
  }

  const secondaryStyle = {
    // color: "white",
    height: `${props.height}px`,
    width: `${Math.floor(props.width * 0.625)}px`
  }
  return (
    <div className="logo-container" style={{overflow: 'hidden', height: `${props.height}px,`, width: `${props.width}px`}}>
      <div className='logo-main-cropped-container' style={{height: `${props.height}`}}>
        <img src={testLogo} alt='logo' className='logo-main-cropped' style={croppedStyle}></img>
      </div>
      <img src={testLogo} alt='logo' className='logo-main' style={mainStyle}></img>
      <img src={logo} alt='logo' className='logo-right' style={secondaryStyle}></img>
      {/* <img src={logo} alt='logo' className='logo-left' style={secondaryStyle}></img> */}
    </div>
  )
}