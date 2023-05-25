import img from "../.././assets/images/aboutImg.png";

const About = () => {
  return (
    <section className="About">
      <article>
        <div>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          doloribus repellendus quibusdam, reiciendis beatae sit? Quos harum
          dolor voluptatum molestiae eveniet dolorem culpa. Laboriosam soluta et
          officia magni ex at, aliquid, sapiente illo quas quos repudiandae,
          ipsam sequi! Nisi, quisquam!
        </p>
      </article>

      <img src={img} alt="RestorantImgs" />
    </section>
  );
};

export default About;
