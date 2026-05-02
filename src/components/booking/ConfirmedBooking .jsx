import { useLocation, useNavigate } from "react-router-dom";

export const ConfirmedBooking = () => {
  const navigate = useNavigate();
  const bookingData = useLocation();
  const { date, time, guestNumber, occasion } = bookingData.state || {};

  return (
    <div className="booking-form">
      <div className="container ">
        <h1>Booked confirmed</h1>
      </div>
      <div className="container">
        <li>Date: {date}</li>
        <li>Time: {time}</li>
        <li>Guest number: {guestNumber}</li>
        <li>Occacion: {occasion}</li>
        <button
          aria-label="Return to booking page"
          onClick={() => {
            navigate("/booking");
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
};
