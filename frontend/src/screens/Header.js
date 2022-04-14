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

      <input
        type="text"
        id="header-search"
        placeholder="Search product"
        name="s"
      />
      <button type="submit">Search</button>
    </header>
  );
}

export default Header;
