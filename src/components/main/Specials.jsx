import { CardSpecials } from "./CardSpecials";
import greekSalad from "../../assets/greek salad.jpg";
import bruchetta from "../../assets/bruchetta.png";
import lemonDesert from "../../assets/lemon dessert.jpg";

export const Specials = () => {
  return (
    <>
      <div className="container specials">
        <h1>This weeks specials!</h1>
        <button>Order online</button>
      </div>
      <div className="container">
        <CardSpecials
          image={greekSalad}
          title="Greek salad"
          price="12.99"
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished whit crunchy garlic and rosemary croutons."
        />
        <CardSpecials
          image={bruchetta}
          title="Brucheta"
          price="5.99"
          description="Our Bruschetta is made from grilled bread that has been smeared whit garlic and seasoned whit salt and olive oil."
        />
        <CardSpecials
          image={lemonDesert}
          title="Lemon Dessert"
          price="5.00"
          description="This comes staright from grandma´s recipe book, every last ingredient has benn sourced and is as authentic as can be imagined."
        />
      </div>
    </>
  );
};
