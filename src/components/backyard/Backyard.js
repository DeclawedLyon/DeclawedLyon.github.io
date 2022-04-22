import './back-yard.css'
// import React from 'react'
import Radio from './Radio'
import BookSearch from './textSearch/BookSearch'
import Logo from './logo/Logo'
import SiteLoading from './page_load/SiteLoading'
import ObservedContainer from './observer_test/ObservedContainer'
import GoogleMap from './map_test/GoogleMap'

export default function Backyard(props) {
  // console.log(process.env)
  const location = {
    address: 'Colville Park',
    lat: 48.437391,
    lng: -123.419482,
  }
  return (
    <div id="backyard">
      {/* <SiteLoading /> */}
      <BookSearch />
      <GoogleMap location={location} zoomLevel={8} />
      <ObservedContainer />
      {/* <Logo /> */}
      <button onClick={props.transition}>Back to App</button>
    </div>
  )
}