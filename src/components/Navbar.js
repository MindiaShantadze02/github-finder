import { Link } from 'react-router-dom';
const Navbar = () =>{
        return (
            <nav className="navbar">
                <div className="logo-wrapper">
                    <Link to="/" className="logo">Github Finder</Link>
                    <span className="website-author">
                        By <a href="https://github.com/MindiaShantadze02" target="blank">Mindia Shantadze</a>
                    </span>
                </div>
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                </ul>
            </nav>
        )
}

export default Navbar;