import { Nav } from "./Nav";
import logo from "../assets/Logo .svg";

export const Header = () => {
  return (
    <header className="container">
      <img src={logo} alt="little lemon logo" />
      <Nav />
    </header>
  );
};
