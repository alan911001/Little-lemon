import { type } from "@testing-library/user-event/dist/type";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";

export const BookingForm = ({ availableTimes, dispatch }) => {
  useEffect(() => {
    dispatch({ type: "INITIALIZE_TIMES" });
  }, []);

  const { date, time, guestNumber, occasion, onInputChange } = useForm({
    date: "",
    time: "",
    guestNumber: 0,
    occasion: "Birthday",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ date, time, guestNumber, occasion });
  };

  const handleDateChange = (event) => {
    onInputChange(event, false);
    dispatch({
      type: "GET_AVAILABLE_TIMES",
      date,
      time,
      guestNumber,
      occasion,
    });
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
          onChange={(event) => handleDateChange(event)}
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
