import React from "react";
import netflixStyle from "../netflix.module.css";

const NetflixCard = ({ name, rating, description, imageSrc }) => {
  console.log("name ------", rating);

  const dynamicClassRating =
    rating > 8.5 ? netflixStyle.superhit : netflixStyle.hit;
  return (
    <>
      <li className={netflixStyle.netflixCard}>
        <img src={imageSrc} alt={name} />
        <div className={netflixStyle.netflixContent}>
          <h2>Name: {name}</h2>
          <h4>
            Ratting :
            <span
              // -------- conditional styling -------------
              // className={`${netflixStyle.rattingDefaultClass} ${
              //   rating > 8.5 ? netflixStyle.superhit : netflixStyle.hit
              // }`}

              // ---- we can use below methods by help of create variable

              className={`${netflixStyle.rattingDefaultClass} ${dynamicClassRating}`}
            >
              {rating}
            </span>
          </h4>

          <p>
            <b>description :</b>
            {description}
          </p>
        </div>
      </li>
    </>
  );
};

export default NetflixCard;
