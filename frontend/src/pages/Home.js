import React, { useEffect, useState, Fragment } from "react";
import Footer from "../components/Footer/Footer";
import { Navbar } from "../components/Nabbar/Navbar";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";
import { RecommendedPost } from "../components/Recommendedpost/RecommendedPost";
import Carousal from "../components/carousal/Carousal";
import {BsArrowBarUp} from 'react-icons/bs'

export const Home = () => {
  
  const [post, setPosts] = useState([]);

  console.log(post);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/post/latest")
      .then((res) => {
        if (res.status === 200) {
          setPosts(res.data.result);
          console.log(res.data.result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Fragment>
      <Navbar />
      <Carousal />
      <div className="about-us">
        <h2>
          <a href="/aboutus">About Us</a>
        </h2>
        <p>Through this National Assembly, we seek to dominate</p>
      </div>
      <div className="description">
        <p>
          The Design and Will Charity Association is a non-political, non-profit
          organization. She holds a statement of knowledge and news No. 1350 on
          06/29/2015.
        </p>
      </div>
      <div className="goal">
        <p>Among its main objectives:</p>
        <li>Helping the poor, needy and orphans.</li>
        <li>
          Organizing seminars, lectures, recreational and cultural meetings, and
          children's clubs.
        </li>
        <li>
          Contribute to securing scholarships for students in need
          professionally and academically.
        </li>
        <li>
          Organizing courses: sewing, literacy, computers, and contributing to
          the establishment of a public library.
        </li>
        <li>Environmental awareness of all kinds.</li>
        <li>Improving and developing livelihoods in the region.</li>
        <li>
          Strengthening community communication and improving capabilities
        </li>
        <li>
          Contribute to securing scholarships for students in need
          professionally and academically.
        </li>{" "}
        <li>
          Contribute to securing scholarships for students in need
          professionally and academically.
        </li>
        <li>
          Organizing seminars, lectures, recreational and cultural meetings, and
          children's clubs.
        </li>
      </div>

      {/* Activities */}
      <RecommendedPost 
      
        post={post}
        title={"Activities"}
        showDescription={true}
        button={true}
      />

      {/* <button className="btnq card_btn">Read More</button> */}
      <Footer />
    </Fragment>
  );
};
