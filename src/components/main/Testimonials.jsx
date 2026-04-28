import { CardTestimonial } from "./CardTestimonial";
import person from "../../assets/person.png";

export const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="container ">
        <h1>Testimonials</h1>
      </div>
      <div className="container">
        <CardTestimonial
          image={person}
          name="Jhon Smith"
          review="Very good salad and brucheta."
        />
        <CardTestimonial
          image={person}
          name="Jhon Smith"
          review="Very good salad and brucheta."
        />
        <CardTestimonial
          image={person}
          name="Jhon Smith"
          review="Very good salad and brucheta."
        />
        <CardTestimonial
          image={person}
          name="Jhon Smith"
          review="Very good salad and brucheta."
        />
      </div>
    </div>
  );
};
