import {  FaStar, FaRegStarHalfStroke, FaRegStar  } from "react-icons/fa6";

const starPositions = [1, 2, 3, 4, 5];

export default function ReviewCard({
    reviewerRating,
    reviewerImage,
    reviewerAlt,
    reviewerName,
    reviewerReview
}) {
    return (
        <article className="review-card">
            <div
                className="rating"
                role="img"
                aria-label={`${reviewerRating} out of 5 stars`}
            >
                {starPositions.map((position) => (
                    reviewerRating >= position
                        ? <FaStar key={position} aria-hidden="true" />
                        : reviewerRating >= position - 0.5
                            ? <FaRegStarHalfStroke key={position} aria-hidden="true" />
                            : <FaRegStar key={position} aria-hidden="true" />
                ))}
            </div>
            <div className="reviewer">
                <div className="reviewer-image">
                    <img
                        src={reviewerImage}
                        alt={reviewerAlt}
                    />
                </div>
                <h3>{reviewerName}</h3>
            </div>
            <blockquote>{reviewerReview}</blockquote>
        </article>
    );
}
