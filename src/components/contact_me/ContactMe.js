import { useState } from 'react';
import './contact-me.css'

export default function ContactMe(props) {
  // const [emailAddress, setEmailAddress] = useState('')
  const [emailSubject, setEmailSubject] = useState('')
  const [emailMessage, setEmailMessage] = useState('')
  // const 
  return(
    <div id="contact-me-field">
      <h1>Contact Me</h1>
      <div id="contact-buttons">
        <button className='contact-button'>{props.icons[0]}</button>
        <button className='contact-button' onClick={() => {window.open('mailto:declan.e.lyons@outlook.com');}}>{props.icons[2]}</button>
        <button className='contact-button'>{props.icons[1]}</button>
      </div>
      <form id="contact-me-form">
        {/* <input id="email-address" type={'email'} placeholder='Email Address' onChange={e => {setEmailAddress(e.target.value)}} required></input> */}
        <input id="email-subject" type={'text'} placeholder='Subject' onChange={e => {setEmailSubject(e.target.value)}}></input>
        <textarea id="email-message" type={'text'} placeholder='Enter your message...' onChange={e => {setEmailMessage(e.target.value)}} required></textarea>
        <button id="enter-button" type={'submit'} onClick={(e) => {
          e.preventDefault();
          if(emailMessage === '') {
            window.open(`mailto:declan.e.lyons@outlook.com?subject=${emailSubject ? emailSubject : ''}&body=${emailMessage}`)
          } else {
            //set error message
          }
          console.log(e)
        }}>Send Message</button>
      </form>
    </div>
          
  )
}