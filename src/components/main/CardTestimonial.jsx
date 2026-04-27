export const CardTestimonial = ({ image, name, review, rating }) => {
  return (
    <div className="card-testimonials">
      <div className="containerS">
        <h4>Rating: {rating}</h4>
      </div>
      <div className="container">
        <img src={image} alt={name} className="card-img-testimonials" />
        <h3>{name}</h3>
      </div>
      <div className="container">
        <p className="card-text">{review}</p>
      </div>
    </div>
  );
};
