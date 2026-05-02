import { Nav } from "../nav bar/Nav";
import logo from "../../assets/Logo.svg";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  return (
    <header className="container">
      <img src={logo} alt="little lemon logo" />
      <Nav />
    </header>
  );
};
