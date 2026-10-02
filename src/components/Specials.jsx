import { Link } from "react-router-dom";
import greekSalad from "../assets/greek-salad.jpg";
import bruschetta from "../assets/bruschetta.jpg";
import lemonDessert from "../assets/lemon-dessert.jpg";
import { MdDeliveryDining } from "react-icons/md";


export default function Specials() {
    return (
        <section className="specials-container">
            <div className="specials-header">
                <h2>This week's specials!</h2>
                <button>Our Menu</button>
            </div>
            <div className="specials-cards">
                <article className="dish-card">
                    <div className="card-image">
                        <img src={greekSalad} alt="Greek salad" />
                    </div>
                    <div className="card-header">
                        <h3>Greek Salad</h3>
                        <p>$12.99</p>
                    </div>
                    <p>
                       The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta
                       cheese, garnished with crunchy garlic and rosemary croutons.
                    </p>
                    <Link to="#">
                        Order a Delivery
                        <MdDeliveryDining />
                    </Link>
                </article>
                <article className="dish-card">
                    <div className="card-image">
                        <img src={bruschetta} alt="Bruschetta" />
                    </div>
                    <div className="card-header">
                        <h3>Bruschetta</h3>
                        <p>$5.99</p>
                    </div>
                    <p>
                       Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned
                       with salt and olive oil.
                    </p>
                    <Link to="#">
                        Order a Delivery
                       <MdDeliveryDining />
                    </Link>
                </article>
                <article className="dish-card">
                    <div className="card-image">
                        <img src={lemonDessert} alt="Lemon dessert" />
                    </div>
                    <div className="card-header">
                        <h3>Lemon Dessert</h3>
                        <p>$5.00</p>
                    </div>
                    <p>
                       This comes straight from grandma’s recipe book, every last ingredient has been sourced
                       and is as authentic as can be imagined.
                    </p>
                    <Link to="#">
                        Order a Delivery
                        <MdDeliveryDining />
                    </Link>
                </article>
            </div>
        </section>
    )
}