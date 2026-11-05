import { Link } from "react-router-dom";
import { MdDeliveryDining } from "react-icons/md";

export default function FoodCard({
    dishName,
    dishImage,
    dishImageAlt,
    dishPrice,
    dishDescription
}) {
    return (
        <article className="dish-card">
            <div className="card-image">
                <img
                    src={dishImage}
                    alt={dishImageAlt}
                />
            </div>
            <div className="card-header">
                <h3>{dishName}</h3>
                <p>${dishPrice.toFixed(2)}</p>
            </div>
            <p>{dishDescription}</p>
            <Link to="#">
                Order a Delivery
                <MdDeliveryDining aria-hidden="true" />
            </Link>
        </article>
    );
}
