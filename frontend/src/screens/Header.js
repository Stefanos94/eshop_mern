import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">Mern</Link>
      <ul className="nav-bar">
        <li>Items</li>
        <li>Shop</li>
        <li>Profile</li>
      </ul>
    </header>
  );
}

export default Header;
