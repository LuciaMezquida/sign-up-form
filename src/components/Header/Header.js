import "./Header.css";
import PropTypes from "prop-types";
import belikelogo from "../../images/belikelogo.png";

const Header = ({ userName }) => {
  return (
    <header className="logo-container">
      <img
        src={belikelogo}
        className="belike-logo"
        alt="Belike logo"
        title="Belike logo"
      />
      <p className="welcome-message">{userName}</p>
    </header>
  );
};
Header.propTypes = {
  userName: PropTypes.string.isRequired,
};
export default Header;
