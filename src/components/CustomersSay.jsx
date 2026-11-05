import ReviewCard from "./ReviewCard.jsx";
import Noah from "../assets/pexels-noah.jpg";
import Dakota from "../assets/pexels-dakota.jpg";
import Kendall from "../assets/pexels-kendall.jpg";
import Charles from "../assets/pexels-charles.jpg";

const reviewers = [
    {
        reviewerRating: 4.5,
        reviewerImage: Noah,
        reviewerAlt: "Noah, Little Lemon customer",
        reviewerName: "Noah",
        reviewerReview: "Amazing food and a really welcoming atmosphere. I’ll definitely be back!"
    },
    {
        reviewerRating: 4,
        reviewerImage: Dakota,
        reviewerAlt: "Dakota, Little Lemon customer",
        reviewerName: "Dakota",
        reviewerReview: "Everything was fresh and delicious. The Greek salad was my favourite!"
    },
    {
        reviewerRating: 5,
        reviewerImage: Kendall,
        reviewerAlt: "Kendall, Little Lemon customer",
        reviewerName: "Kendall",
        reviewerReview: "Great service, lovely atmosphere, and fantastic Mediterranean food."
    },
    {
        reviewerRating: 4,
        reviewerImage: Charles,
        reviewerAlt: "Charles, Little Lemon customer",
        reviewerName: "Charles",
        reviewerReview: "The food was delicious, although the service was a little slow. Still a great experience overall!"
    }
];

export default function CustomersSay() {
    return (
        <section
            className="testimonials-container"
            aria-labelledby="testimonials-heading"
        >
            <h2 id="testimonials-heading">
                Testimonials
            </h2>
            <div className="review-cards-container">
                {reviewers.map((reviewer) => (
                    <ReviewCard
                        key={reviewer.reviewerName}
                        reviewerRating={reviewer.reviewerRating}
                        reviewerImage={reviewer.reviewerImage}
                        reviewerAlt={reviewer.reviewerAlt}
                        reviewerName={reviewer.reviewerName}
                        reviewerReview={reviewer.reviewerReview}
                    />
                ))}
            </div>
        </section>
    );
}
