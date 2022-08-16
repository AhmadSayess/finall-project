import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Nabbar/Navbar";
import "../pages/Activitiess.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Moment from "moment";
import { RecommendedPost } from "../components/Recommendedpost/RecommendedPost";






export const Activitiess = () => {
  const { id } = useParams();
  const [singleActivity, setSingleActivity] = useState([]);
  const [recomended, setRecomended] = useState([]);
  const [images,setImages] = useState([])

  useEffect(() => {
    const getSingleActivities = async (id) => {
      await  axios
          .get(`http://localhost:5000/api/post/${id}`)
          .then((res) => {
            if (res.status === 200) {
              let data = res.data.response
              console.log({data});
              setImages(data.image);
              setSingleActivity(data);
              getLatestByCategory(data.category)
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };
    if (id) {
      getSingleActivities(id);
    }
  }, []);

  const getLatestByCategory = async (category) => {
  await  axios
      .get(`http://localhost:5000/api/post/getLatestByCat/${category}`)
      .then((res) => {
        if (res.status === 200) {
          setRecomended(res.data.result)
          console.log({dataCat: res.data.result});
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  return (
    <>
      <Navbar />

      <div className="more-info-title">
        <h4>{singleActivity.title}</h4>
      </div>

      <div>
        <p className="more-info-date">
          posted on {Moment(singleActivity.date).format("DD-MM-YY")}
        </p>
      </div>

      <div>
        <p className="more-info-paragraph">{singleActivity.description}</p>
      </div>

      <div className="all-photo">
        <div className="more-info-photo">
        {images && images.map(img => {
          return (
          <img src={img} alt="img" />
          )
        })}
        </div>

      </div>
      <RecommendedPost
        post={recomended}
        title={"Recomended posts"}
        showDescription={false}
      />
    </>
  );
};
