import React, { useState } from "react";
import PropTypes from "prop-types";
const Password = () => {
  return (
    <>
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
    </>
  );
};
Password.propTypes = {};
export default Password;
