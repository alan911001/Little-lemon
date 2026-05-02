import { useNavigate } from "react-router-dom";
import { submitAPI } from "../../data/api";
import { useForm } from "../../hooks/useForm";
import { useEffect, useState } from "react";

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
    occasion: "",
  });
  const navigate = useNavigate();
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    setFormValid(date != "" && time != "" && guestNumber > 0 && occasion != "");
  }, [date, time, guestNumber, occasion]);

  const handleDateChange = (event) => {
    onInputChange(event, false);
    if (event.target.name == "date") {
      updateTimes(new Date(event.target.value));
    }
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
          required
          min={new Date().toISOString().split("T")[0]}
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
          required
          onChange={handleDateChange}
        >
          <option value="" disabled>
            Select a time
          </option>
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
          min="1"
          max="10"
          required
          id="guestNumber"
          name="guestNumber"
          value={guestNumber}
          onChange={handleDateChange}
        />
      </div>

      <div>
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          required
          value={occasion}
          onChange={handleDateChange}
        >
          <option value="" disabled>
            Select a occacion
          </option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>
      <button type="submit" className={formValid ? "" : "forminvalid"}>
        Make your reservation
      </button>
    </form>
  );
};
