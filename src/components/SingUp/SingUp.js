import React, { useState } from "react";
import "./SingUp.css";
import { Link } from "react-router-dom";

const SingUp = () => {
  return (
    <div className="container">
      <form action="" className="form">
        <label htmlFor="userName" className="name">
          Name
        </label>
        <input type="text" className="input name" />
        <label htmlFor="password" className="password">
          Password
        </label>
        <input type="password" name="password" className="input" />
        <label htmlFor="passwordConfirm" className="password">
          Confirm Password
        </label>
        <input type="password" name="passwordConfirm" className="input" />
        <Link to="/home">
          <input type="button" value="Sign Up" className="signUpButton" />
        </Link>
      </form>
    </div>
  );
};

export default SingUp;
