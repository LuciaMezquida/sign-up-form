import React, { useState } from "react";
import "./SingUp.css";
import devGirl from "../../images/devGirl.png";
import { Link } from "react-router-dom";

const SingUp = ({ setUserName, userName }) => {
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [userNameMessage, setUserNameMessage] = useState("");
  const [passwordMessage, setPassWordNameMessage] = useState("");
  const [matchPasswordMessage, setMatchPassWordNameMessage] = useState("");

  const saveUserName = (ev) => {
    const user = ev.target.value;
    setUserName(user);
  };
  const confirmCorrectUserName = () => {
    const noSpecialCharactersRegex = /[^A-Za-z\s]/;
    const correctUserName = noSpecialCharactersRegex.test(userName);
    if (!correctUserName) {
      setUserNameMessage("");
    } else {
      setUserNameMessage("Username can't have special characters");
    }
  };
  const confirmCorrectPassword = () => {};
  const confirmMatchPasswords = () => {};

  return (
    <div className="container">
      <form action="" className="form">
        <img src={devGirl} alt="Dev Girl" className="formImage" />
        <label htmlFor="userName" className="name">
          Username
        </label>
        <input
          type="text"
          className="input name"
          onChange={saveUserName}
          onBlur={confirmCorrectUserName}
          value={userName}
          required
        />
        <p className="message">{userNameMessage}</p>
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
          required
        />

        <p className="message">{passwordMessage}</p>
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
          required
        />

        <p className="message">{matchPasswordMessage}</p>
        <Link to="/home">
          <input type="button" value="Sign Up" className="signUpButton" />
        </Link>
      </form>
    </div>
  );
};

export default SingUp;
