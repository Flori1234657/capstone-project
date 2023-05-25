import Nav from "./Nav";
import PhnMenu from "./Header/PhnMenu";
import Logo from "../assets/images/Logo.svg";

const Header = () => {
  return (
    <header>
      {window.innerWidth >= 320 && window.innerWidth <= 899 ? (
        <PhnMenu />
      ) : (
        <>
          <img src={Logo} alt="Logo" />
          <Nav />
        </>
      )}
    </header>
  );
};

export default Header;
