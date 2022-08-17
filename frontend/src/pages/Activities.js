import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "../components/Nabbar/Navbar";
import "./Activities.css";
import Moment from "moment";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { Loading } from "../components/Loading/Loading";
export const Activities = () => {
  const [activity, setActivity] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);


  const getActivities = async () => {
    await axios
      .get("http://localhost:5000/api/post")
      .then((res) => {

        if (res.status === 200) {
          setActivity(res.data.result);
        }
        setLoading(false);


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

  const { id } = useParams()

  useEffect(() => {
    getCategories();
    getActivities();

  }, []);
  return (
    <>
      <Navbar />
      {/* <div className="postes"> */}

      <div className="titile">
        <h2>Activities </h2>
      </div>
      <div className="filterSection">
        <label for="cat">Category :  </label>


        <select name="pets" id="cat" onChange={getActivitiesByCategory}>
          <option value="ALL">ALL</option>
          {category.map((e) => (
            <option value={e._id} key={e._id}>
              {e.name}
            </option>
          ))}
        </select>


      </div>
      {loading ? (
              <Loading />
            ) : (
       <>
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
                  <a href="/moreinfo">{item.title.substring(0,55)} .....</a>
                </Link>
                <p className="paragraph">{item.description.substring(0,245)} .....</p>
              </div>
            </div>
          );
        })}
       </>
            )}


        <Footer />
    </>
  );
};
