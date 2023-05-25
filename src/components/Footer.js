import logo from ".././assets/images/footericon.png";
import Nav from "./Footer/Nav";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Logo" />
      <Nav />
    </footer>
  );
};

export default Footer;
