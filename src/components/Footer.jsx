import { ItemsNav } from "./ItemsNav";
import image_footer from "../assets/restaurant.jpg";

export const Footer = () => {
  return (
    <footer className="container">
      <img src={image_footer} alt="restaurant" className="img_footer" />
      <div>
        <h3>Doormat Navigation</h3>
        <ItemsNav classText="nav-items-footer" />
      </div>
      <div>
        <h3>Contact</h3>
        <p>Address</p>
        <p> Phone </p>
        <p>number</p>
        <p>email</p>
      </div>
      <div>
        <h3>Social media links</h3>
        <p>Address</p>
        <p> Phone </p>
        <p>number</p>
        <p>email</p>
      </div>
    </footer>
  );
};
