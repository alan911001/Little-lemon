import { ItemsNav } from "./ItemsNav";
import { Nav } from "./Nav";
import image_footer from "../assets/restaurant.jpg";

export const Footer = () => {
  return (
    <footer className="container">
      <img src={image_footer} className="img_footer" />
      <div>
        <h3>Doormat Navigation</h3>
        <ItemsNav />
      </div>
      <div>
        <h3>Contact</h3>
        <ul>
          <li>Address</li>
          <li> Phone </li>
          <li>number</li>
          <li>email</li>
        </ul>
      </div>
      <div>
        <h3>Social media links</h3>
        <ul>
          <li>Address</li>
          <li> Phone </li>
          <li>number</li>
          <li>email</li>
        </ul>
      </div>
    </footer>
  );
};
