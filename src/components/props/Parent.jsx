import React, { useState } from "react";
import Child from "./Child";
import EmployeeData from "../../api/EmployeeApi.json";
import propsStyle from "../props/props.module.css";

const Parent = () => {
  // event handler -------

  const clickHandler = (salaryAmt) => {
    alert(`Your salary is: ${salaryAmt}`);
  };
  return (
    <>
      <div className={propsStyle.employeeDataSection}>
        <h2>Emloyee's Data</h2>

        <ul>
          {EmployeeData.map((EmpData) => {
            return (
              <>
                {/* <Child
                  key={EmpData.id}
                  data={EmpData}
                /> */}

                {/* ====== props destructuring  ========= */}

                <Child
                  key={EmpData.id} // pass key is must...
                  data={EmpData}
                  emplName={EmpData.name}
                  emplImg={EmpData.employeeImg}
                  salary={EmpData.salary}
                  empPosition={EmpData.position}
                  empId={EmpData.id}
                  // we can pass event handler as props as well like...
                  onBtnClick={() => clickHandler(EmpData.salary)}
                />
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Parent;
