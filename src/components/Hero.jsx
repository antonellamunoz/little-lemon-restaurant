import restaurantFood from "../assets/restaurant-food.png";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section
          className="hero"
          aria-labelledby="hero-heading"
        >
          <div className="hero-container">
            <div className="hero-description">
              <h1 id="hero-heading">
                Little Lemon
              </h1>
              <p>Chicago</p>
              <p>
                We are a family owned Mediterranean restaurant, focused on traditional recipes served with a
                modern twist.
              </p>
              <Link to="/bookings">Reserve a Table</Link>
            </div>
            <div className="hero-image">
              <img
                src={restaurantFood}
                alt="Assorted appetizers served on a black slate platter" />
            </div>
          </div>
        </section>
    )
}