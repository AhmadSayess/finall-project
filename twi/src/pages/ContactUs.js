import React from 'react'
import Footer from '../components/Footer/Footer'
// import { Footer } from '../components/Footer/Footer'
import { Navbar } from '../components/Nabbar/Navbar'
import './ContactUs.css'
export const ContactUs = () => {
  return (
    <>
      <Navbar/>
  
  <div className="contain">
  <div className="form">
    <div className="contact-info">
      <h3 className="title">Let's get in touch</h3>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
        dolorum adipisci recusandae praesentium dicta!
      </p>
      <div className="info">
        <div className="information">
          <p>92 Cherry Drive Uniondale, NY 11553</p>
        </div>
        <div className="information">
          <p>lorem@ipsum.com</p>
        </div>
        <div className="information">
          <p>123-456-789</p>
        </div>
      </div>
      <div className="social-media">
        <p>Connect with us :</p>
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="#">
            <i className="fab fa-instagram" />
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in" />
          </a>
        </div><br />
        {/* <div className="credit">Made with <span style={{color: 'blue'}}>❤</span> by <a href="https://www.learningrobo.com/">Learning Robo</a></div>   */}
      </div>
    </div>
    <div className="contact-form">
      <span className="circle one" />
      <span className="circle two" />
      <form action="index.html" autoComplete="off">
        <h3 className="title">Contact us</h3>
        <div className="input-container">
          <input type="text" name="name" className="input" placeholder='enter your emill'/>
          {/* <label >Username</label> */}
          <span>Username</span>
        </div>
        <div className="input-container">
          <input type="email" name="email" className="input" placeholder='enter your emill' />
          {/* <label >Email</label> */}
          <span>Email</span>
        </div>
        <div className="input-container">
          <input type="tel" name="phone" className="input" placeholder='enter your emill'  />
          {/* <label >Phone</label> */}
          <span>Phone</span>
        </div>
        <div className="input-container textarea">
          <textarea name="message" className="input" defaultValue={""} placeholder='enter your emill'/>
          {/* <label >Message</label> */}
          <span>Message</span>
        </div>
        <input type="submit" defaultValue="Send" className="btne" />
      </form>
    </div>
  </div>
</div>
{/* <Footer/> */}
<Footer />

    </>
  )
}
