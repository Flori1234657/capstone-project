import { Link } from "react-router-dom";
import alSalad from "../.././assets/images/higlights/albanianSalad.jpg";
import lobster from "../.././assets/images/higlights/lobster.jpg";
import desert from "../.././assets/images/higlights/lemonDesert.jpg";

const Highlights = () => {
  return (
    <section className="Highlights">
      <div>
        <h2>This Week Specials</h2>
        <button>Online Menu</button>
      </div>
      <article>
        <section>
          <img src={alSalad} alt="FoodPhoto" />
          <div>
            <h3>Albanian Salad</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
              nulla quisquam exercitationem inventore fuga quibusdam quod
              laborum eligendi? Commodi amet quis iure similique quo placeat
              sapiente blanditiis laborum, magnam illo.
            </p>
          </div>
          <a>Order now $25</a>
        </section>
        <section>
          <img src={lobster} alt="FoodPhoto" />
          <div>
            <h3>Lobster</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
              nulla quisquam exercitationem inventore fuga quibusdam quod
              laborum eligendi? Commodi amet quis iure similique quo placeat
              sapiente blanditiis laborum, magnam illo.
            </p>
          </div>
          <a>Order now $150</a>
        </section>
        <section>
          <img src={desert} alt="FoodPhoto" />
          <div>
            <h3>Lemon Dessert</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
              nulla quisquam exercitationem inventore fuga quibusdam quod
              laborum eligendi? Commodi amet quis iure similique quo placeat
              sapiente blanditiis laborum, magnam illo.
            </p>
          </div>
          <a>Order now $15</a>
        </section>
      </article>
    </section>
  );
};

export default Highlights;
