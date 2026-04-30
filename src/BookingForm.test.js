import { render, screen } from "@testing-library/react";
import App from "./App";
import BookingForm from "./components/booking/BookingForm";
import { updateTimes } from "./BookingPage";
import { updateTimes } from "./BookingPage";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("Renders the BookingForm heading", () => {
  const mockDispatch = jest.fn();
  const mockAvailableTimes = ["17:00", "18:00"];

  render(
    <BookingForm
      mockAvailableTimes={mockAvailableTimes}
      dispatch={mockDispatch}
    />,
  );
  const labelElement = screen.getByLabelText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

test("INITIALIZE_TIMES devuelve los horarios iniciales correctos", () => {
  const initialState = [];

  const result = updateTimes(initialState, {
    type: "INITIALIZE_TIMES",
  });

  expect(result).toEqual(["15:00", "16:00", "18:00"]);
});

test("GET_AVAILABLE_TIMES devuelve el estado base de horarios", () => {
  const initialState = [];

  const result = updateTimes(initialState, {
    type: "GET_AVAILABLE_TIMES",
    date: "2026-04-30",
  });

  expect(result).toEqual([
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});
