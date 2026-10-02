import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav aria-label="Main navigation">
                <ul className="main-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Menu</Link></li>
                    <li><Link to="/bookings">Reservations</Link></li>
                    <li><Link to="#">Order Online</Link></li>
                    <li><Link to="#">Login</Link></li>
                </ul>
            </nav>
    )
}


