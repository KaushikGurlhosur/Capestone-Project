import { Link } from "react-router-dom";
import restaurantFoodImage from "./assets/restaurant-food.jpg";
import "./Hero.css";
import pages from "../../../utils/pages";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.",
    ],
    loop: true,

    typeSpeed: 70,
    delaySpeed: 2000,
  });
  const [title, count2] = useTypewriter({
    words: ["Little Lemon"],
    loop: true,

    typeSpeed: 70,
    delaySpeed: 2000,
  });
  const [place, count3] = useTypewriter({
    words: ["Chicago"],
    loop: true,

    typeSpeed: 70,
    delaySpeed: 2000,
  });
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>
            {" "}
            {title}
            <Cursor cursorColor="#f7AB0A" />
          </h1>
          <h2>
            {place} <Cursor cursorColor="#f7AB0A" />
          </h2>
          <p>
            {text}
            <Cursor cursorColor="#f7AB0A" />
          </p>
          <Link className="button-primary" to={pages.get("bookings").path}>
            Reserve a table
          </Link>
        </div>
        <img
          className="hero-image"
          src={restaurantFoodImage}
          alt="Restaurant food"
        />
      </div>
    </section>
  );
};

export default Hero;
