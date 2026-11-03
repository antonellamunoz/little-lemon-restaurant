import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                className="toggle-menu"
                type="button"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
                aria-controls="main-navigation-menu"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? (
                    <IoClose aria-hidden="true" />
                ) : (
                    <GiHamburgerMenu aria-hidden="true" />
                )}
            </button>
            <nav className="header-nav" aria-label="Main navigation">
                <ul
                    id="main-navigation-menu"
                    className={isOpen ? "main-nav open" : "main-nav"}
                    onClick={() => setIsOpen(false)}
                >
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="#">About</Link>
                    </li>
                    <li>
                        <Link to="#">Menu</Link>
                    </li>
                    <li>
                        <Link to="/bookings">Reservations</Link>
                    </li>
                    <li>
                        <Link to="#">Order Online</Link>
                    </li>
                    <li>
                        <Link to="#">Login</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}


