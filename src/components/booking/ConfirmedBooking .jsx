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
        <li>{date}</li>
        <li>{time}</li>
        <li>{guestNumber}</li>
        <li>{occasion}</li>
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
