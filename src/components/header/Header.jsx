import { Nav } from "../nav bar/Nav";
import logo from "../../assets/Logo.svg";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <header className="container">
      <img src={logo} alt="little lemon logo" onClick={handleClick} />
      <Nav />
    </header>
  );
};
