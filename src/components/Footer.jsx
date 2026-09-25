import footerLogo from "../assets/footer-logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
            <img src={footerLogo} alt="Little Lemon logo"/>
            <nav aria-label="Footer navigation">
                <h3>Doormat Navigation</h3>
                <ul className="footer-nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
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