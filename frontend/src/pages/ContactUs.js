import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import { Navbar } from "../components/Nabbar/Navbar";
import "./ContactUs.css";
import { FiFacebook } from "react-icons/fi";
import axios from "axios";

export const ContactUs = () => {
  //// for to add a admin ///
  const [body, setBody] = useState({
    name: "",
    phone: "",
    email: "",
    messages: "",
  });
  const AddMessage = () => {
    axios
      .post("http://localhost:5000/api/messages", body)
      .then((res) => {
        setBody({});
        alert('sent')
      })
      .catch((err) => {
        console.log(err);
      });

  };

  //// for to add a admin ///

  return (
    <>
      <Navbar />

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
                  {/* <i className="fab fa-facebook-f" /> */}
                  <FiFacebook />
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
              </div>
              <br />
              {/* <div className="credit">Made with <span style={{color: 'blue'}}>❤</span> by <a href="https://www.learningrobo.com/">Learning Robo</a></div>   */}
            </div>
          </div>
          <div className="contact-form">
            <span className="circle one" />
            <span className="circle two" />
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input
                  type="text"
                  name="name"
                  className="inpu"
                  placeholder="enter your full name"
                  onChange={(e) => setBody({ ...body, name: e.target.value })}
                />
                {/* <label >Username</label> */}
                <span>Username</span>
              </div>
              <div className="input-container">
                <input
                  type="email"
                  name="email"
                  className="inpu"
                  placeholder="enter your email"
                  onChange={(e) => setBody({ ...body, email: e.target.value })}
                />
                {/* <label >Email</label> */}
                <span>Email</span>
              </div>
              <div className="input-container">
                <input
                  type="tel"
                  name="phone"
                  className="inpu"
                  placeholder="enter your phone"
                  onChange={(e) => setBody({ ...body, phone: e.target.value })}
                />
                {/* <label >Phone</label> */}
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea
                  name="message"
                  className="inpu"
                  defaultValue={""}
                  placeholder="enter your message"
                  onChange={(e) =>
                    setBody({ ...body, messages: e.target.value })
                  }
                />
                {/* <label >Message</label> */}
                <span>Message</span>
              </div>
              <button className="btne" onClick={AddMessage}>submit</button>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
      <Footer />
    </>
  );
};
