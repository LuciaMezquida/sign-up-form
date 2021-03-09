import React, { useState } from "react";
import "./Home.css";

const Home = ({ userName }) => {
  return (
    <div className="home">
      <p>Welcome{userName}</p>
    </div>
  );
};
Home.propTypes = {};
export default Home;
