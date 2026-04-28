import img from "../../assets/Mario and Adrian A.jpg";

export const About = () => {
  return (
    <>
      <div className="container about">
        <div className="card-about">
          <h1>Little lemon</h1>
          <h3>Chicago</h3>
          <p>
            Ofrecemos una variedad de comida de chicago muy deliciosa y
            nutritiva, para toda la familia .Ofrecemos una variedad de comida de
            chicago muy deliciosa y nutritiva, para toda la familia.
          </p>
        </div>
        <img src={img} alt="img_about" />
      </div>
    </>
  );
};
