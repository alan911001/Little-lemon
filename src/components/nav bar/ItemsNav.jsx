import { Link, NavLink } from "react-router";

export const ItemsNav = ({ classText }) => {
  return (
    <ul className={classText}>
      <li>
        <Link to="/home">HOME</Link>
      </li>
      <li>
        <Link to="/about">ABOUT</Link>
      </li>
      <li>
        <Link to="menu">MENU</Link>
      </li>
      <li>
        <Link to="/booking">RESERVATIONS</Link>
      </li>
      <li>
        <Link to="delivery">ORDER ONLINE</Link>
      </li>
      <li>
        <Link to="/login">LOGIN</Link>
      </li>
    </ul>
  );
};
