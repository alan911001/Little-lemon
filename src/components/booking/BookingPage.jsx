import { useEffect, useReducer } from "react";
import { BookingForm } from "./BookingForm";
import { fetchAPI, submitAPI } from "../../data/api";
import { type } from "@testing-library/user-event/dist/type";

const initializeTimes = () => {
  return fetchAPI(new Date());
};

const updateTimes = (date) => {
  const times = fetchAPI(date);
  return times;
};

const bookingSubmit = (reservedTable) => {
  const confirmed = submitAPI(reservedTable);
  return confirmed;
};

const dispatchTimes = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_TIMES":
      return initializeTimes();
    case "GET_AVAILABLE_TIMES":
      return updateTimes(action.date);
    default:
      return state;
  }
};

export const BookingPage = () => {
  const [state, dispatch] = useReducer(dispatchTimes, [], initializeTimes);

  return (
    <div className="booking-form">
      <div className="container ">
        <h1>Booking Tables</h1>
      </div>
      <div className="container">
        <BookingForm
          availableTimes={state}
          initializeTimes={() => dispatch({ type: "INITIALIZE_TIMES" })}
          updateTimes={(date) =>
            dispatch({ type: "GET_AVAILABLE_TIMES", date })
          }
          bookingSubmit={(reservedTable) => bookingSubmit(reservedTable)}
        />
      </div>
    </div>
  );
};
