import React, { useState } from "react";
import "./SingUp.css";
import { Link } from "react-router-dom";

const SingUp = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  return (
    <div className="container">
      <form action="" className="form">
        <img src="../../images/devGirl.png" alt="Dev Girl" />
        <label htmlFor="userName" className="name">
          Name
        </label>
        <input
          type="text"
          className="input name"
          onChange={(ev) => {
            setUserName(ev.target.value);
          }}
        />
        <label htmlFor="password" className="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="input"
          onChange={(ev) => {
            setPassword(ev.target.value);
          }}
        />
        <label htmlFor="passwordConfirmed" className="password">
          Confirmed Password
        </label>
        <input
          type="password"
          name="passwordConfirmed"
          className="input"
          onChange={(ev) => {
            setConfirmedPassword(ev.target.value);
          }}
        />
        <Link to="/home">
          <input type="button" value="Sign Up" className="signUpButton" />
        </Link>
      </form>
    </div>
  );
};

export default SingUp;
