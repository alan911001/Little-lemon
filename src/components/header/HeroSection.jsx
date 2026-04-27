import image from "../../assets/restauranfood.jpg";

export const HeroSection = () => {
  return (
    <div className="container">
      <div className="card-hero">
        <h1>Little lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipies served whit a modern twist.
        </p>
        <button>Reserve a table</button>
      </div>
      <img src={image} alt="" />
    </div>
  );
};
