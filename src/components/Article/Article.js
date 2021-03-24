import "./Article.css";
import PropTypes from "prop-types";

const Article = ({ title, text, link }) => {
  return (
    <article className="article">
      <h3 className="article-title">{title}</h3>
      <p className="article-text">{text}</p>
      <a href={link} className="link">
        👉🏻 More info
      </a>
    </article>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
};
export default Article;
