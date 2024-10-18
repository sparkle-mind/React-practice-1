import React from "react";
import netflixStyle from "../netflix/netflix.module.css";
import netflixData from "../../api/netflixApi.json";
import NetflixList from "./netflix-list/NetflixList";

const Netflix = () => {
  return (
    <>
      <div className={netflixStyle.netflixSection}>
        <div className={netflixStyle.netflixInner}>
          <h1>------ Netflix Series List -------- </h1>
          <ul className={netflixStyle.netflixList}>
     

            {netflixData.map((elem) => {
              // ----- without return its doesn't render component -------
              return (
                // ---- i want show only data which has rating more then 8.2 using ternory operater not if condition
                elem.rating > 8.2 ? (
                  <NetflixList
                  // ====== pass props to move/render data to another file like. NetflixList.jsx ======= 
                    key={elem.id}
                    name={elem.name}
                    rating={elem.rating}
                    description={elem.description}
                    imageSrc={elem.img_url}
                  />
                ) : null
              );
            })}
          
          </ul>
        </div>
      </div>
    </>
  );
};

export default Netflix;
