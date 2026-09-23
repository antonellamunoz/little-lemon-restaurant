import Logo from "../assets/Logo.svg"

export default function Footer() {
    return (
        <footer>
            <nav aria-label="Footer navigation">
                <h3>Doormat Navigation</h3>
                <ul>
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
                <ul>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Facebook</a></li>
                </ul>
            </section>
                <div>
                    <img src={Logo} alt="Little Lemon Logo"/>
                    <small>&copy; 2026 Little Lemon. All rights reserved.</small>
                </div>
        </footer>
        
    )
}