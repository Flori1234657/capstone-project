import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>Doormat Nav</li>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Menu</a>
        </li>
        <li>
          <a>Rezervations</a>
        </li>
        <li>
          <a>Order Online</a>
        </li>
        <li>
          <a>Login</a>
        </li>
      </ul>
      <ul>
        <li>Contact</li>
        <li>
          <a>Address</a>
        </li>
        <li>
          <a>Phone Number</a>
        </li>
        <li>
          <a>Email</a>
        </li>
      </ul>
      <ul>
        <li>Socail Media Links</li>
        <li>
          <a>Facebook</a>
        </li>
        <li>
          <a>Instagram</a>
        </li>
        <li>
          <a>GitHub</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
