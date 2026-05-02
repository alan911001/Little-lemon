import { render, screen } from "@testing-library/react";
import App from "./App";
import BookingForm from "./components/booking/BookingForm";

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
