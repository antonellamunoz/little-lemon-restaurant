import Noah from "../assets/pexels-noah.jpg"
import Dakota from "../assets/pexels-dakota.jpg"
import Kendall from "../assets/pexels-kendall.jpg"
import Charles from "../assets/pexels-charles.jpg"
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

export default function CustomersSay() {
    return (
        <section className="testimonials-container">
          <h2>Testimonials</h2>
          <div className="review-cards-container">
            <article className="review-card">
              <div className="rating" aria-label="4.5 out of 5 stars">
                <FaStar aria-hidden="true"/>
                <FaStar aria-hidden="true"/>
                <FaStar aria-hidden="true"/>
                <FaStar aria-hidden="true"/>
                <FaRegStarHalfStroke aria-hidden="true"/>
              </div>
              <div className="reviewer">
                <div className="reviewer-image">
                  <img src={Noah} alt="Noah, Little Lemon customer" />
                </div>
                <h3>Noah</h3>
              </div>
              <p>“Amazing food and a really welcoming atmosphere. I’ll definitely be back!”</p>
            </article>
            <article className="review-card">
              <div className="rating" aria-label="4 out of 5 stars">
                <FaStar aria-hidden="true"/>
                <FaStar aria-hidden="true"/>
                <FaStar aria-hidden="true"/>
                <FaStar aria-hidden="true"/>
                <FaRegStar aria-hidden="true"/>
              </div>
              <div className="reviewer">
                <div className="reviewer-image">
                  <img src={Dakota} alt="Dakota, Little Lemon customer" />
                </div>
                <h3>Dakota</h3>
              </div>
                <p>“Everything was fresh and delicious. The Greek salad was my favourite!”</p>
            </article>
            <article className="review-card">
              <div className="rating" aria-label="5 out of 5 stars">
                <FaStar aria-hidden="true"/>
                <FaStar aria-hidden="true"/>
                <FaStar aria-hidden="true"/>
                <FaStar aria-hidden="true"/>
                <FaStar aria-hidden="true"/>
              </div>
              <div className="reviewer">
                <div className="reviewer-image">
                  <img src={Kendall} alt="Kendall, Little Lemon customer" />
                </div>
                <h3>Kendall</h3>
              </div>
                <p>“Great service, lovely atmosphere, and fantastic Mediterranean food.”</p>
            </article>
            <article className="review-card">
              <div className="rating" aria-label="4 out of 5 stars">
                <FaStar aria-hidden="true"/>
                <FaStar aria-hidden="true"/>
                <FaStar aria-hidden="true"/>
                <FaStar aria-hidden="true"/>
                <FaRegStar aria-hidden="true"/>
              </div>
              <div className="reviewer">
                <div className="reviewer-image">
                  <img src={Charles} alt="Charles, Little Lemon customer" />
                </div>
                <h3>Charles</h3>
              </div>
                <p>“The food was delicious, although the service was a little slow. Still a great experience
                  overall!”
                </p>
            </article>
          </div>
        </section>
    )
}