import profilImg from "../.././assets/images/profile.png";

const Testimonials = () => {
  return (
    <section className="Testimonials">
      <h1>Testimonails</h1>
      <article>
        <section>
          <h4>5 star's</h4>
          <div>
            <img src={profilImg} alt="PersonPhoto" />
            <h2>Ahmed</h2>
          </div>
          <h3>
            <i>
              "This Website is very simple to use!I really like it.And i give it
              5 stars."
            </i>
          </h3>
        </section>
        <section>
          <h4>5 star's</h4>
          <div>
            <img src={profilImg} alt="PersonPhoto" />
            <h2>Maryam</h2>
          </div>
          <h3>
            <i>
              "This Website is very easy and esthetic.Really good job on making
              this!"
            </i>
          </h3>
        </section>
        <section>
          <h4>5 star's</h4>
          <div>
            <img src={profilImg} alt="PersonPhoto" />
            <h2>Is'hak</h2>
          </div>
          <h3>
            <i>
              "In this Website is very easy to navigate!I can find things easy."
            </i>
          </h3>
        </section>
        <section>
          <h4>5 star's</h4>
          <div>
            <img src={profilImg} alt="PersonPhoto" />
            <h2>Ismail</h2>
          </div>
          <h3>
            <i>
              "This Web is very simple to remember after you have done
              something once."
            </i>
          </h3>
        </section>
      </article>
    </section>
  );
};

export default Testimonials;
