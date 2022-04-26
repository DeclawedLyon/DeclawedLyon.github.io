import React from 'react'
import GoogleMapReact from 'google-map-react'

import './map.css'

const GoogleMap = ({ location, zoomLevel }) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  console.log(apiKey)
  return (
    <div className="map">
      <h2 className="map-h2">Naden Route</h2>

      <div className="google-map" style={{ height: '40vh', width: '40vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
        </GoogleMapReact>
      </div>
    </div>
  )
}
export default GoogleMap