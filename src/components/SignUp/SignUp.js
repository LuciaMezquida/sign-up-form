import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SignUp.css";
import devGirl from "../../images/devGirl.png";
import { Link } from "react-router-dom";

const SignUp = ({ setUserName, userName }) => {
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [userNameMessage, setUserNameMessage] = useState("");
  const [passwordMessage, setPassWordMessage] = useState("");
  const [matchPasswordMessage, setMatchPassWordMessage] = useState("");

  const saveUserName = (ev) => {
    const user = ev.target.value;
    setUserName(user);
    confirmCorrectUserName(user);
  };
  const confirmCorrectUserName = (user) => {
    const noSpecialCharactersRegex = /[^A-Za-z\s]/;
    const correctUserName = noSpecialCharactersRegex.test(user);
    !correctUserName
      ? setUserNameMessage("ok")
      : setUserNameMessage("Username can't have special characters");
  };
  const confirmCorrectPassword = (ev) => {
    const upperCaseMatchRegex = /[A-Z]/;
    const passwordValue = ev.target.value;
    const upperCaseMatch = upperCaseMatchRegex.test(passwordValue);
    setPassword(passwordValue);
    console.log(passwordValue);
    if (passwordValue.length > 1 && passwordValue.length < 7) {
      setPassWordMessage("Password must contains at least 7 characters");
    } else if (upperCaseMatch) {
      setPassWordMessage("Password must contains at least a capital letter");
    } else if (!passwordValue.includes("#")) {
      setPassWordMessage("Password must contains at least one #");
    }
    if (
      passwordValue.length >= 7 &&
      passwordValue.includes("#") &&
      upperCaseMatch
    )
      setPassWordMessage("ok");
  };

  const confirmMatchPasswords = (ev) => {
    const passwordValue = ev.target.value;
    setConfirmedPassword(passwordValue);
    password !== passwordValue
      ? setMatchPassWordMessage("Passwords don't match")
      : setMatchPassWordMessage("ok");
  };

  const disableButton = () => {
    if (
      setPassWordMessage === "ok" &&
      setMatchPassWordMessage === "ok" &&
      userNameMessage === "ok"
    ) {
      console.log("muka");
      return "";
    } else {
      return "disabled";
    }
  };

  return (
    <div className="container">
      <img src={devGirl} alt="Dev Girl" className="formImage" />
      <form action="" className="form">
        <label htmlFor="userName" className="label name">
          Username <span className="arter">*</span>
        </label>
        <input
          type="text"
          className="input name"
          onChange={saveUserName}
          defaultValue={userName}
          required
        />
        <p className="message">{userNameMessage}</p>
        <label htmlFor="password" className="label password">
          Password <span className="arter">*</span>
        </label>
        <input
          type="password"
          name="password"
          className="input"
          onChange={confirmCorrectPassword}
          defaultValue={password}
          required
        />

        <p className="message">{passwordMessage}</p>
        <label htmlFor="passwordConfirmed" className="label password">
          Confirm Password <span className="arter">*</span>
        </label>
        <input
          type="password"
          name="passwordConfirmed"
          className="input"
          onChange={confirmMatchPasswords}
          defaultValue={confirmedPassword}
          required
        />

        <p className="message">{matchPasswordMessage}</p>
        <Link to="/home" onClick={(ev) => ev.preventDefault()}>
          <input
            type="button"
            value="Sign Up"
            className="input signUpButton"
            disabled={disableButton()}
          />
        </Link>
      </form>
    </div>
  );
};

SignUp.propTypes = {
  setUserName: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
};
export default SignUp;
