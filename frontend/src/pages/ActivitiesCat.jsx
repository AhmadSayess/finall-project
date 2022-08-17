import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "../components/Nabbar/Navbar";
import "./Activities.css";
import Moment from "moment";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";

export const ActivitiesCat = () => {
  const [activity, setActivity] = useState([]);
  const { id } = useParams();
  const getActCat = async () => {
    await axios
      .get(`http://localhost:5000/api/post/getAllByCat/${id}`)
      .then((res) => {
        if (res.status === 200) {
          console.log({ catData: res.data });
          setActivity(res.data.result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getActCat();
  }, []);
  return (
    <>
      <Navbar />
      {/* <div className="postes"> */}

      <div className="titile">
        <h2>Activities </h2>
      </div>
      <div>
        <Link to={"/activities"}>
          <button className="btnqq" for="cat"> Show All Activities</button>
        </Link>
      </div>
      {activity &&
        activity.map((item, index) => {
          return (
            <div className="cardse" key={index}>
              <div>
                <img src={item.image[0]} alt="logo" />
                <p className="date">
                  posted on : {Moment(item.date).format("DD-MM-YYYY")}
                </p>
              </div>

              <div className="seconds">
                <Link to={`/activitie/${item._id}`}>
                  <a href="/moreinfo">{item.title.substring(0,40)} ...</a>
                </Link>
                <p className="paragraph">{item.description.substring(0,250)} ...</p>
              </div>
            </div>
          );
        })}
      <Footer />
    </>
  );
};
