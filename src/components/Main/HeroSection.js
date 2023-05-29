import { useEffect, useState } from "react";
import HeroImg from "../.././assets/images/restaurant.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const nav = useNavigate();
  const [windo, setWindo] = useState(false);
  const windows = () => {
    window.innerWidth >= 320 && window.innerWidth <= 899
      ? setWindo(false)
      : setWindo(true);
  };
  useEffect(() => {
    windows();
  });
  return (
    <section className="HeroSection">
      <article>
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur Mdipiscing elit, sed do
          eiusmod.
        </p>
        <button type="button" onClick={() => nav("/booking")}>
          Reserve a table
        </button>
      </article>
      {windo ? <img src={HeroImg} alt="HeroImg" /> : ""}
    </section>
  );
};

export default HeroSection;
