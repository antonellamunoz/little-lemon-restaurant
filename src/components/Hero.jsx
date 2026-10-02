import restaurantFood from "../assets/restaurant-food.png";

export default function Hero() {
    return (
        <section className="hero">
          <div className="hero-container">
            <div className="hero-description">
              <h1>Little Lemon</h1>
              <p>Chicago</p>
              <p>
                We are a family owned Mediterranean restaurant, focused on traditional recipes served with a
                modern twist.
              </p>
              <button>Reserve a Table</button>
            </div>
            <div className="hero-image">
              <img src={restaurantFood} alt="Restaurant food" />
            </div>
          </div>
        </section>
    )
}