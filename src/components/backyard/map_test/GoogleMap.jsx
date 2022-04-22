import React from 'react'
// npm i --save google-map-react
import GoogleMapReact from 'google-map-react'
// import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker'

// import Loader from 'google-maps-js-api-loader'
// import { Loader } from '@googlemaps/js-api-loader';


export default function GoogleMap({location, zoomLevel}) {
  const apiKey = process.env.REACT_APP_API_KEY;
  console.log(apiKey)

  
  return (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>

      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          {/* <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          /> */}
        </GoogleMapReact>
      </div>
    </div>
  )
}

// const LocationPin = ({ text }) => (
  //   <div className="pin">
  //     <Icon icon={locationIcon} className="pin-icon" />
  //     <p className="pin-text">{text}</p>
  //   </div>
  // )

  // const test = async static load(options: LoaderOptions, onLoadingStart?: () => void): Promise<void>
  // const loader = new Loader({
  //   apiKey: "",
  //   version: "weekly",
  //   libraries: ["places"]
  // });

  // const mapOptions = {
  //   center: {
  //     lat: 0,
  //     lng: 0
  //   },
  //   zoom: 4
  // };
  // const location = {
  //   address: 'Colville Park',
  //   lat: 48.437391,
  //   lng: -123.419482,
    


  // }

  // loader.loadCallback(e => {
  //   if (e) {
  //     console.log(e);
  //   } else {
  //     new window.google.maps.Map(document.getElementById("map"), mapOptions);
  //   }
  // });

  // const mapPromise = new Promise((resolve, reject) => {
  //   let x = true;
  //   let error = false;
  //   if (x) {
  //     resolve('success')
  //   }
  //   if(error) {
  //     reject('fail')
  //   }
  // })

  // mapPromise
  //   .then((res) => console.log('does it work?', res))



//   function run() {
  
//     // Creating Our XMLHttpRequest object 
//     var xhr = new XMLHttpRequest();

//     // Making our connection  
//     var url = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
//     xhr.open("GET", url, true);

//     // function execute after request is successful 
//     xhr.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             console.log(this.responseText);
//         }
//     }
//     // Sending our request 
//     xhr.send();
// }
// run();
  // await Loader.load({
  //   apiKey: apiKey
  // })
  // console.log(apiKey)