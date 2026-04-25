import image from "../assets/restauranfood.jpg";

export const Main = () => {
  return (
    <main className="container">
      <div>
        <h1>Little lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipies served whit a modern twist.
        </p>
      </div>
      <img src={image} alt="" />
    </main>
  );
};
