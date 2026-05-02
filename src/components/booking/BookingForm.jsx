import { useNavigate } from "react-router-dom";
import { submitAPI } from "../../data/api";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";

export const BookingForm = ({
  availableTimes,
  initializeTimes,
  updateTimes,
  bookingSubmit,
}) => {
  const { date, time, guestNumber, occasion, onInputChange } = useForm({
    date: "",
    time: "",
    guestNumber: 0,
    occasion: "Birthday",
  });
  const navigate = useNavigate();

  const handleDateChange = (event) => {
    onInputChange(event, false);
    updateTimes(new Date(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const reservedTable = { date, time, guestNumber, occasion };
    if (bookingSubmit(reservedTable)) {
      navigate("/confirmed", { state: reservedTable });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={handleDateChange}
        />
      </div>

      <div>
        <label htmlFor="time">Choose time</label>
        <select
          id="time"
          name="time"
          value={time}
          onChange={(event) => onInputChange(event, false)}
        >
          <option value="">Select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="guestNumber">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guestNumber"
          name="guestNumber"
          value={guestNumber}
          onChange={(event) => onInputChange(event, false)}
        />
      </div>

      <div>
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={occasion}
          onChange={(event) => onInputChange(event, false)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <input type="submit" className="btn" value="Make Your reservation" />
    </form>
  );
};
