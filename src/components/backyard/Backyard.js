import './back-yard.css'
// import React from 'react'
import Radio from './Radio'
import BookSearch from './textSearch/BookSearch'
import Logo from './logo/Logo'
import SiteLoading from './page_load/SiteLoading'

export default function Backyard() {
  return (
    <div id="backyard">
      {/* <SiteLoading /> */}
      <BookSearch />
      {/* <Logo /> */}
    </div>
  )
}