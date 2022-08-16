import React, { useEffect, useState, Fragment } from "react";
import Footer from "../components/Footer/Footer";
import { Navbar } from "../components/Nabbar/Navbar";
import axios from "axios";
import "./Home.css";
// import { Link } from "react-router-dom";
import { RecommendedPost } from "../components/Recommendedpost/RecommendedPost";
import Carousal from "../components/carousal/Carousal";
// import {BsArrowBarUp} from 'react-icons/bs'

export const Home = () => {
  const [post, setPosts] = useState([]);

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
      
      <div className="description">
        <h2>About Us</h2>
        <p>
          T W I is a Charity Association is a non-political, non-profit
          organization. She holds a statement of knowledge and news No. 1350 on
          06/29/2015.<br></br>
          <br></br>
          Through this National Assembly, we seek to dominate
        </p>
      </div>
      {/* for the cards of goals  */}
      <div className="wrapper">
        <h2>Among its main objectives:</h2>
        <div className="cols">
          <div className="col" ontouchstart="this.classList.toggle('hover');">
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: "url(https://unsplash.it/500/500/)" }}
              >
                <div className="inner">
                  <p>first goal</p>
                  {/* <span>Lorem ipsum</span> */}
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>Helping the poor, needy and orphans..</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" ontouchstart="this.classList.toggle('hover');">
            <div className="container">
              <div className="front" style={{ backgroundImage: "url(https://unsplash.it/500/500/)" }}>
                <div className="inner">
                  <p>second </p>
                  {/* <span>Lorem ipsum</span> */}
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    {" "}
                    Organizing seminars, lectures, recreational and cultural
                    meetings, and children's clubs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" ontouchstart="this.classList.toggle('hover');">
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: "url(https://unsplash.it/502/502/)" }}
              >
                <div className="inner">
                  <p>third</p>
                  {/* <span>Lorem ipsum</span> */}
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    {" "}
                    Contribute to securing scholarships for students in need
                    professionally and academically.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" ontouchstart="this.classList.toggle('hover');">
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: "url(https://unsplash.it/503/503/)" }}
              >
                <div className="inner">
                  <p>fourth</p>
                  {/* <span>Lorem ipsum</span> */}
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    {" "}
                    Organizing courses: sewing, literacy, computers, and
                    contributing to the establishment .
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" ontouchstart="this.classList.toggle('hover');">
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: "url(https://unsplash.it/504/504/" }}
              >
                <div className="inner">
                  <p>fifth</p>
                  {/* <span>Lorem ipsum</span> */}
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>Environmental awareness of all kinds.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" ontouchstart="this.classList.toggle('hover');">
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: "url(https://unsplash.it/505/505/)" }}
              >
                <div className="inner">
                  <p>sixth</p>
                  {/* <span>Lorem ipsum</span> */}
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>Improving and developing livelihoods in the region.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" ontouchstart="this.classList.toggle('hover');">
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: "url(https://unsplash.it/506/506/)" }}
              >
                <div className="inner">
                  <p>seventh</p>
                  {/* <span>Lorem ipsum</span> */}
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Alias cum repellat velit quae suscipit c.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" ontouchstart="this.classList.toggle('hover');">
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: "url(https://unsplash.it/508/508/)" }}
              >
                <div className="inner">
                  <p>eighth</p>
                  {/* <span>Lorem ipsum</span> */}
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Alias cum repellat velit quae suscipit c.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* for the cards of goals  */}
      <RecommendedPost
        post={post}
        title={"Activities"}
        showDescription={true}
        p={true}
      />
      <Footer />
    </Fragment>
  );
};
