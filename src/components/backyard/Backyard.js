import './back-yard.css'
// import React from 'react'
import Radio from './Radio'
import BookSearch from './textSearch/BookSearch'
import Logo from './logo/Logo'
import SiteLoading from './page_load/SiteLoading'
import ObservedContainer from './observer_test/ObservedContainer'
<<<<<<< HEAD
=======
import GoogleMap from './map_test/GoogleMap'
import initMap from './map_test/initMap'
>>>>>>> development

export default function Backyard(props) {
  const polygonObjects = [
    {
      coordinates: [
        [48.43113194793202, -123.42071126138042],
        [48.431135507329365, -123.4205127779083],
        [48.431893653283915, -123.42050741349016],
        [48.431893653283915, -123.42041085396316],
        [48.43103940351321, -123.42042694721768],
        [48.43103940351321, -123.42070589696226],
        [48.43113194793202, -123.42071126138042]
      ]
    }
  ]
  // console.log(process.env)
  const location = {
    address: 'Colville Park',
    lat: 48.437391,
    lng: -123.419482,
  }
  return (
    <div id="backyard">
      <div id='map'></div>
      {/* <SiteLoading /> */}
<<<<<<< HEAD
      <BookSearch />
      <ObservedContainer />
=======
      {/* <BookSearch /> */}
      <GoogleMap location={location} zoomLevel={16} />
      
      {/* <ObservedContainer /> */}
>>>>>>> development
      {/* <Logo /> */}
      <button onClick={props.transition}>Back to App</button>
    </div>
  )
}