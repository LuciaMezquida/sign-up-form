import "./Home.css";
import PropTypes from "prop-types";

const Home = ({ userName }) => {
  return (
    <div className="home">
      <p>{`Welcome ${userName}`}</p>
    </div>
  );
};
Home.propTypes = {
  userName: PropTypes.string.isRequired,
};
export default Home;
