import './back-yard.css'
// import React from 'react'
import Radio from './Radio'
import BookSearch from './textSearch/BookSearch'
import Logo from './logo/Logo'
import SiteLoading from './page_load/SiteLoading'

export default function Backyard(props) {
  return (
    <div id="backyard">
      {/* <SiteLoading /> */}
      <BookSearch />
      {/* <Logo /> */}
      <button onClick={props.transition}>Back to App</button>
    </div>
  )
}