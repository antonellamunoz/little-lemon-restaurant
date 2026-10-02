import ownersLeft from "../assets/mario-and-adrian.jpg";
import ownersRight from "../assets/little-lemon-owners.jpg";

export default function About() {
    return (
        <section className="about-container">
            <div className="about-content">
              <h2>Little Lemon</h2>
              <p>Chicago</p>
              <p>
                Little Lemon was founded by Mario and Adrian, who share a passion for Mediterranean cuisine.
                Inspired by traditional family recipes, they created a welcoming neighbourhood restaurant where
                fresh ingredients and familiar flavours are served with a modern twist.
              </p>
            </div>
            <div className="about-images">
              <div className="owners-image-left">
                <img src={ownersLeft} alt="Mario and Adrian, owners of Little Lemon" />
              </div>
              <div className="owners-image-right">
                <img src={ownersRight} alt="Mario and Adrian, owners of Little Lemon" />
              </div>
            </div>
        </section>
    )
}