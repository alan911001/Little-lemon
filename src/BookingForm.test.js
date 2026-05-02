import { render, screen, fireEvent } from "@testing-library/react";
import { BookingForm } from "./components/booking/BookingForm";
import { MemoryRouter } from "react-router-dom";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

//TEST 1: HTML5 VALIDATION
test("Los campos tienen validaciones HTML5 correctas", () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={["17:00"]}
        initializeTimes={jest.fn()}
        updateTimes={jest.fn()}
        bookingSubmit={jest.fn()}
      />
    </MemoryRouter>,
  );

  expect(screen.getByLabelText(/choose date/i)).toHaveAttribute("required");
  expect(screen.getByLabelText(/choose time/i)).toHaveAttribute("required");
  expect(screen.getByLabelText(/number of guests/i)).toHaveAttribute(
    "min",
    "1",
  );
  expect(screen.getByLabelText(/number of guests/i)).toHaveAttribute(
    "max",
    "10",
  );
  expect(screen.getByLabelText(/occasion/i)).toHaveAttribute("required");
});

//TEST 2: FORM INVALID
test("El botón está deshabilitado si el formulario es inválido", () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={["17:00"]}
        initializeTimes={jest.fn()}
        updateTimes={jest.fn()}
        bookingSubmit={jest.fn()}
      />
    </MemoryRouter>,
  );

  const button = screen.getByDisplayValue(/make your reservation/i);
  expect(button).toBeDisabled();
});

//TEST 3: FORM VALID
test("El botón se habilita cuando el formulario es válido", () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={["17:00"]}
        initializeTimes={jest.fn()}
        updateTimes={jest.fn()}
        bookingSubmit={jest.fn()}
      />
    </MemoryRouter>,
  );

  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: "2026-05-10", name: "date" },
  });

  fireEvent.change(screen.getByLabelText(/choose time/i), {
    target: { value: "17:00", name: "time" },
  });

  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: "2", name: "guestNumber" },
  });

  fireEvent.change(screen.getByLabelText(/occasion/i), {
    target: { value: "Birthday", name: "occasion" },
  });

  const button = screen.getByDisplayValue(/make your reservation/i);
  expect(button).not.toBeDisabled();
});

//TEST 4: SUBMIT + NAVIGATE
test("envía el formulario y navega si bookingSubmit es true", () => {
  const mockSubmit = jest.fn(() => true);

  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={["17:00"]}
        initializeTimes={jest.fn()}
        updateTimes={jest.fn()}
        bookingSubmit={mockSubmit}
      />
    </MemoryRouter>,
  );

  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: "2026-05-10", name: "date" },
  });

  fireEvent.change(screen.getByLabelText(/choose time/i), {
    target: { value: "17:00", name: "time" },
  });

  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: "2", name: "guestNumber" },
  });

  fireEvent.change(screen.getByLabelText(/occasion/i), {
    target: { value: "Birthday", name: "occasion" },
  });

  fireEvent.click(screen.getByDisplayValue(/make your reservation/i));

  expect(mockSubmit).toHaveBeenCalled();
  expect(mockNavigate).toHaveBeenCalledWith("/confirmed", {
    state: expect.any(Object),
  });
});
