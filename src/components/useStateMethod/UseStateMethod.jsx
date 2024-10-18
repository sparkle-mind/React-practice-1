import React, { useState } from "react";
import useStateStyle from "../useStateMethod/useStateStyle.module.css";

const UseStateMethod = () => {
  // State for the current count
  const [current, updated] = useState(0); // initial value is 0 it means current = 0 

  function increase() {
    updated(current + 1);
  }

  function decrease() {
    updated(current - 1);
  }

  function reset() {
    updated(0);
  }

  // State for toggling class
  const [initialClass, SetClass] = useState(true);

  function toggleClass() {
    SetClass(!initialClass);
  }

  //   ======= form handling --- onChange()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, Email: ${email}`);
  };

  //   --------- conditionally components render ----
  const ComponentA = () => <h1>A</h1>; // function/component
  const ComponentB = () => <h1>B</h1>;// function/component
  const ComponentC = () => <h1>C</h1>// function/component
    

  const obj = {
    a: <ComponentA />,
    b: <ComponentB />,
    c: <ComponentC />,
  };

  const [state1, setState1] = useState("a");

  return (
    <>
      <div className={useStateStyle.buttonContainer}>
        <button onClick={decrease}> - </button>
        <button onClick={reset}> Reset </button>
        <button onClick={increase}> + </button>
      </div>
      <h5>{current}</h5>

      <button onClick={toggleClass}>Click me</button>

      <div className={initialClass ? useStateStyle.show : useStateStyle.hide}>
        <h2> {initialClass ? "show" : "hide"} </h2>
      </div>

      <form className={useStateStyle.formContainer} onSubmit={handleSubmit}>
        <div className={useStateStyle.formGroup}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={useStateStyle.formGroup}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" style={{ marginLeft: "0" }}>
          Submit
        </button>
        <br />
        <br />
        <p>
          Your name is
          <span style={{ color: "green", fontWeight: "bold" }}>{name} </span>&
          Your email address is
          <span style={{ color: "green", fontWeight: "bold" }}>{email}</span>
        </p>
      </form>
      <br />
      <br />
      <br />

      <h5> --------- conditionally components render ----</h5>

      <input onChange={(e) => setState1(e.target.value)} />
      {obj[state1]}
    </>
  );
};

export default UseStateMethod;
