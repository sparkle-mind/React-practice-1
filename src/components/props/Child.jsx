import React from "react";
import propsStyle from "../props/props.module.css";

// const Child = (props) => {
//   // console.log(props) // props in a one type of an objects

//   return (
//     <>
//       <li key={props.data.id}>
//         <div className={propsStyle.emplImg}>
//           <img src={props.data.employeeImg} alt={props.data.name} />
//         </div>
//       </li>
//     </>
//   );
// };

// export default Child;

// ====== props destructuring =========

const Child = ({ emplName, emplImg, empPosition, salary, empId ,onBtnClick }) => {

  // note :- we can pass props like this also ...
//   const Child = (props ) => {
//   const { emplName, emplImg, empPosition, salary, empId ,onBtnClick } = props;

  return (
    <>
      <li>
        <div className={propsStyle.left}>
          <div className={propsStyle.emplImg}>
            <img src={emplImg} alt={emplName} />
          </div>
          <div className={propsStyle.emplCont}>
            <h2>{emplName}</h2>
            <p>{empPosition}</p>
            <button onClick={onBtnClick}>view salary</button>
            <span style={{display:"block", marginTop:"10px"}}>Salary :{salary} </span>
          </div>
        </div>
        <div className={propsStyle.right}>
          <p>Employee's Id: {empId}</p>
        </div>
      </li>
    </>
  );
};

export default Child;
