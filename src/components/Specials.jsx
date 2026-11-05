import greekSalad from "../assets/greek-salad.jpg";
import bruschetta from "../assets/bruschetta.jpg";
import lemonDessert from "../assets/lemon-dessert.jpg";
import FoodCard from "./FoodCard.jsx";

const dishes = [
    {
        dishName: "Greek Salad",
        dishImage: greekSalad,
        dishImageAlt: "Greek Salad",
        dishPrice: 12.99,
        dishDescription: `The famous Greek salad of crispy lettuce, peppers, olives and our  Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.`
    },
    {
        dishName: "Bruschetta",
        dishImage: bruschetta,
        dishImageAlt: "Bruschetta",
        dishPrice: 5.99,
        dishDescription: `Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.`
    },
    {
        dishName: "Lemon Dessert",
        dishImage: lemonDessert,
        dishImageAlt: "Lemon Dessert",
        dishPrice: 5.00,
        dishDescription: `This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.`
    }
];

export default function Specials() {
    return (
        <section
            className="specials-container"
            aria-labelledby="specials-heading"
        >
            <div className="specials-header">
                <h2 id="specials-heading">
                    This week's specials!
                </h2>
                <button>Our Menu</button>
            </div>
            <div className="specials-cards">
                {dishes.map((dish) => (
                    <FoodCard
                        key={dish.dishName}
                        dishName={dish.dishName}
                        dishImage={dish.dishImage}
                        dishImageAlt={dish.dishImageAlt}
                        dishPrice={dish.dishPrice}
                        dishDescription={dish.dishDescription}
                    />
                ))}
            </div>
        </section>
    );
}