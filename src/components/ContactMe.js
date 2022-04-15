import './contact-me.css'

export default function ContactMe(props) {

  return(
    <div id="contact-me-field">
      <h1>Contact Me</h1>
      <button>Phone</button>
      <button>declan.e.lyons@outlook.com</button>
      <form id="contact-me-form">
        <input id="user-name" type={'text'} placeholder='Enter your name' required></input>
        <input id="email-address" type={'email'} placeholder='Enter your email address' required></input>
        <input id="email-message" type={'text'} placeholder='Enter your message...' required></input>
        <button id="enter-button" type={'submit'} onClick={() => {}}>Send Message</button>
      </form>
    </div>
          
  )
}