import "./Home.css";
import PropTypes from "prop-types";
import belikelogo from "../../images/belikelogo.png";

const Home = ({ userName }) => {
  return (
    <div className="home">
      <p className="welcome-message">{`Welcome ${userName}`}</p>
    </div>
  );
};
Home.propTypes = {
  userName: PropTypes.string.isRequired,
};
export default Home;
