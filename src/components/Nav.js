import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>About</li>
        <li>Menu</li>
        <li>Rezervations</li>
        <li>
          <Link to="/booking">Order Online</Link>
        </li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Nav;
