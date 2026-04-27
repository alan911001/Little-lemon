import { MdDeliveryDining } from "react-icons/md";

export const CardSpecials = ({ image, title, price, description }) => {
  return (
    <div className="card-specials">
      <img src={image} alt={title} className="card-img-specials" />
      <div className="card-body">
        <div className="card-title">
          <h3>{title}</h3>
          <p>$ {price}</p>
        </div>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
        <button className="btn-link">Order delivery</button>
        <MdDeliveryDining />
      </div>
    </div>
  );
};
