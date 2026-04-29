import { useReducer } from "react";
import { BookingForm } from "./BookingForm";

const initialSatate = [
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

const updateTimes = (state, action) => {
  if (action.type === "INITIALIZE_TIMES") {
    return ["15:00", "16:00", "18:00"];
  }
  if (action.type === "GET_AVAILABLE_TIMES") {
    console.log(`Fecha seleccionada: ${action.date}`);
    return initialSatate;
  }
  return state;
};

export const BookingPage = () => {
  const [state, dispatch] = useReducer(updateTimes, initialSatate);

  return (
    <>
      <div className="container booking-form">
        <h1>Booking Tables</h1>
      </div>
      <div className="container booking-form">
        <BookingForm availableTimes={state} dispatch={dispatch} />
      </div>
    </>
  );
};
