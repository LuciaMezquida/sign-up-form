import React, { useState } from "react";
import "./SingUp.css";
import devGirl from "../../images/devGirl.png";
import { Link, Route, Switch } from "react-router-dom";

const SingUp = ({ setUserName, userName }) => {
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const saveUserName = (ev) => {
    const user = ev.target.value;
    setUserName(user);
  };

  return (
    <div className="container">
      <form action="" className="form">
        <img src={devGirl} alt="Dev Girl" className="formImage" />
        <label htmlFor="userName" className="name">
          Name
        </label>
        <input
          type="text"
          className="input name"
          onChange={saveUserName}
          value={userName}
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
          Confirm Password
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
