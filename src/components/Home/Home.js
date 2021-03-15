import "./Home.css";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import belikelogo from "../../images/belikelogo.png";

const Home = ({ userName, inputsAreValid }) => {
  const history = useHistory();
  const goSignUp = () => history.push("/");

  useEffect(() => {
    if (!inputsAreValid) {
      console.error("not user ");
      goSignUp();
    }
    console.log(userName);
  }, []);

  return (
    <main className="home">
      <header className="logo-container">
        <img
          src={belikelogo}
          className="belike-logo"
          alt="Belike logo"
          title="Belike logo"
        />
        <p className="welcome-message">{`Welcome, ${userName}!`}</p>
      </header>
      <section className="news">
        <h2 className="news-title">Novedades</h2>
        <article className="article">
          <h3 className="article-title">We are hiring!</h3>
          <p className="hiring">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
            totam necessitatibus. Amet earum voluptate, magnam veritatis numquam
            dolores esse doloribus expedita, minus perferendis unde eligendi
            aliquid culpa nemo totam error. Earum, tempore voluptatibus delectus
            sit cum ipsam explicabo exercitationem facilis ipsum unde,
            inventore, consectetur nam error architecto obcaecati quos
            temporibus rem doloremque. Itaque id et optio. Ea dolor
            exercitationem expedita! Nobis eligendi cumque rerum quos nam itaque
            magnam iste, hic saepe libero, labore quia. Distinctio cupiditate
            architecto ex aut ad beatae nulla quis, aperiam ullam natus quam
            labore obcaecati magni. Assumenda expedita culpa ullam harum, unde
            voluptatem dolor ipsa consectetur libero laudantium nostrum hic
            amet! In sapiente, laudantium accusantium vel et soluta quasi
            tenetur error a vero, eius vitae nihil. Autem modi sequi eaque
            voluptate est consectetur soluta voluptatibus illo ex labore
            consequuntur odit minus quas quis possimus facilis, at voluptatum
            totam maiores tempore nostrum! Ex a harum animi blanditiis.
            Pariatur, nisi quas? Odio, quis neque! Modi harum repellat
            consequuntur praesentium magnam reprehenderit eum dolores fugiat
            dolorem! Ad asperiores blanditiis, perferendis dignissimos repellat
            totam, dolor quasi quo ab soluta veritatis. Enim eaque qui impedit
            aspernatur corporis et temporibus accusantium blanditiis nihil porro
            nesciunt corrupti amet ullam eius quo laudantium reprehenderit dolor
            mollitia alias, voluptatem voluptas earum?
          </p>
        </article>
      </section>
    </main>
  );
};

Home.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Home;
