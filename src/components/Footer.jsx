import footerLogo from "../assets/footer-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
            <img src={footerLogo} alt="Little Lemon logo"/>
            <nav aria-label="Footer navigation">
                <h3>Doormat Navigation</h3>
                <ul className="footer-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Menu</Link></li>
                    <li><Link to="/bookings">Reservations</Link></li>
                    <li><Link to="#">Order Online</Link></li>
                    <li><Link to="#">Login</Link></li>
                </ul>
            </nav>
            <section>
                <h3>Contact</h3>
                <address>
                    <p>Address</p>
                    <p>Phone Number</p>
                    <p>Email</p>
                </address>
            </section>
            <section>
                <h3>Social Media Links</h3>
                <ul className="social-links">
                    <li>
                        <a href="#" aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                    <li>
                        <a href="#" aria-label="Facebook">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </li>
                </ul>
            </section>
            <small className="copyright">&copy; 2026 Little Lemon. All rights reserved.</small>
            </div>
        </footer>
    )
}