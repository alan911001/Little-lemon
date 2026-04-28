import { useNavigate } from "react-router-dom";
import image from "../../assets/restauranfood.jpg";

export const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/booking");
  };

  return (
    <div className="container hero">
      <div className="card-hero">
        <h1>Little lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipies served whit a modern twist.
        </p>
        <button onClick={handleClick}>Reserve a table</button>
      </div>
      <img src={image} alt="" />
    </div>
  );
};
