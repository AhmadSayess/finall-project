import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import { Navbar } from "../components/Nabbar/Navbar";
import "./ContactUs.css";
import { AiOutlineTwitter  ,AiFillLinkedin ,AiFillFacebook } from "react-icons/ai";
// import {toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import {toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
export const ContactUs = () => {
  toast.configure();

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
        toast.success("Message sended Successfully")

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
            T W I is a Charity Association is a non-political, non-profit
          organization. She holds a statement of knowledge and news No. 1350 on
          06/29/2015.
            </p>
            <div className="info">
              <div className="information">
                <p>                Through this National Assembly, we seek to dominate
</p>
              </div>
              <div className="information">
                <p>twi@gmail.com </p>
              </div>
              <div className="information">
                <p>+961-70 363 362 OR 06693540</p>
              </div>
            </div>
            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="https://www.facebook.com/%D8%AC%D9%85%D8%B9%D9%8A%D8%A9-%D8%A7%D9%84%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%88%D8%A7%D9%84%D8%A5%D8%B1%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D8%AE%D9%8A%D8%B1%D9%8A%D8%A9-796330657142889">
                  <AiFillFacebook  className="fronticon"/>
                </a>
                <a href="/">
                <AiOutlineTwitter  className="fronticon"/>

                </a>
                <a href="/">
                <AiFillLinkedin  className="fronticon"/>

                </a>
               
              </div>
              <br />
              {/* <div className="credit">Made with <span style={{color: 'blue'}}>❤</span> by <a href="https://www.learningrobo.com/">Learning Robo</a></div>   */}
            </div>
          </div>
          <div className="contact-form">
            <span className="circle one" />
            <span className="circle two" />
            <form>
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input
                  type="text"
                  name="name"
                  className="inpu"
                  placeholder="enter your full name"
                  onChange={(e) => setBody({ ...body, name: e.target.value })}
                />
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
                <span>Message</span>
              </div>
              <button className="btne" onClick={AddMessage}>submit</button>
              </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
