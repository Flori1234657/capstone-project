import Logo from "../../assets/images/Logo.svg";
import ShowMenu from "./ShowMenu";
import { useState } from "react";

const PhnMenu = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div>
        <img src={Logo} alt="logo" />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          onClick={handleShow}
        >
          <path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"></path>
        </svg>
      </div>
      {show ? <ShowMenu /> : ""}
    </>
  );
};

export default PhnMenu;
