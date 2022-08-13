import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "../components/Nabbar/Navbar";
import "./Activities.css";
// import logo from '../images/twi.jpeg'
// import lozo from "../images/1qq.jpeg";
import Moment from "moment";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";

// import { Footer } from "../components/Footer/Footer";
export const Activities = () => {
  const [activity, setActivity] = useState([]);
  const [category, setCategory] = useState([]);
  console.log({activity});

  const getActivities = async () => {
    await axios
      .get("http://localhost:5000/api/post")
      .then((res) => {
        if (res.status === 200) {
          setActivity(res.data.result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCategories = async () => {
    await axios
      .get("http://localhost:5000/api/category")
      .then((res) => {
        if (res.status === 200) {
          setCategory(res.data.response);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getActCat = async (value) => {
    await axios
      .get(`http://localhost:5000/api/post/getAllByCat/${value}`)
      .then((res) => {
        if (res.status === 200) {
          console.log({catData: res.data});
          setActivity(res.data.result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getActivitiesByCategory = (e) => {
    const value = e.target.value;
    console.log({ getActivitiesByCategory: value });

    if (value === "ALL") {
      getActivities();
    } else {
      getActCat(value)
    }
  };

  useEffect(() => {
    getActivities();
    getCategories();
  }, []);
  return (
    <>
      <Navbar />
      {/* <div className="postes"> */}

      <div className="titile">
        <h2>Activities</h2>
      </div>
      <div>
        <label for="cat">Category</label>


        <select name="pets" id="cat" onChange={getActivitiesByCategory}>
          <option value="ALL">ALL</option>
          {category.map((e) => (
            <option value={e._id} key={e._id}>
              {e.name}
            </option>
          ))}
        </select>


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
                  <a href="/moreinfo">{item.title}</a>
                </Link>
                <p className="paragraph">{item.description}</p>
              </div>
            </div>
          );
        })}
        <Footer />
    </>
  );
};
