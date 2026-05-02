import { NavLink } from "react-router";

export const ItemsNav = ({ classText, onClickItem }) => {
  return (
    <ul className={classText}>
      <li>
        <NavLink
          to="/home"
          onClick={onClickItem}
          className={({ isActive }) => (isActive ? "li-active" : "")}
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          onClick={onClickItem}
          className={({ isActive }) => (isActive ? "li-active" : "")}
        >
          ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink
          to="menu"
          onClick={onClickItem}
          className={({ isActive }) => (isActive ? "li-active" : "")}
        >
          MENU
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/booking"
          onClick={onClickItem}
          className={({ isActive }) => (isActive ? "li-active" : "")}
        >
          RESERVATIONS
        </NavLink>
      </li>
      <li>
        <NavLink
          to="delivery"
          onClick={onClickItem}
          className={({ isActive }) => (isActive ? "li-active" : "")}
        >
          ORDER ONLINE
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          onClick={onClickItem}
          className={({ isActive }) => (isActive ? "li-active" : "")}
        >
          LOGIN
        </NavLink>
      </li>
    </ul>
  );
};
