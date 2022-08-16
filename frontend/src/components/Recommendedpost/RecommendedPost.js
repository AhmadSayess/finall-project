import React from "react";
import { Link, NavLink } from "react-router-dom";

export const RecommendedPost = ({ post, title, showDescription, button }) => {
  return (
    <>
      <div className="main">
        <h2>{title}</h2>
        <ul className="cardss">
          {post &&
            post.map((item, index) => {
              return (
                <li key={index} className="cards_item">
                  <div className="card">
                    <div className="card_image">
                      <img src={item.image[0]} alt="img" />
                    </div>

                    <div className="card_content">
                      <h1 className="card_title">
                        <Link
                          className="card-title-link"
                          to={`/activitie/${item._id}`}
                        >
                          {item.title.substring(0, 31)}...
                        </Link>
                      </h1>
                      {showDescription && (
                        <p className="card_text">
                          {item.description.substring(0, 195)}...
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
        <Link to={"/activities"}>
          {button && <button className="btnq card_btn">ALL ACTIVITIES</button>}
        </Link>
      </div>
    </>
  );
};
