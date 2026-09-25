import headerLogo from "../assets/header-logo.svg"
import Nav from "./Nav.jsx"

export default function Header() {
    return (
        <header className="header-container">
            <img src={headerLogo} alt="Little Lemon logo"/>
            <Nav />
        </header>
    )
}