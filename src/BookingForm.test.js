import { render, screen, fireEvent } from "@testing-library/react";
import { BookingForm } from "./components/booking/BookingForm";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

test("envía el formulario y navega si bookingSubmit es true", () => {
  const mockSubmit = jest.fn(() => true);

  render(
    <BookingForm
      availableTimes={["17:00"]}
      initializeTimes={jest.fn()}
      updateTimes={jest.fn()}
      bookingSubmit={mockSubmit}
    />,
  );

  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: "2026-05-01" },
  });

  fireEvent.change(screen.getByLabelText(/choose time/i), {
    target: { value: "17:00" },
  });

  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: 2 },
  });

  fireEvent.submit(screen.getByRole("form"));

  expect(mockSubmit).toHaveBeenCalled();
  expect(mockNavigate).toHaveBeenCalledWith("/confirmed", {
    state: expect.any(Object),
  });
});
