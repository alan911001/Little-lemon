import { BookingForm } from "./BookingForm";

export const BookingPage = () => {
  return (
    <>
      <div className="container booking-form">
        <h1>Booking Tables</h1>
      </div>
      <div className="container booking-form">
        <BookingForm />
      </div>
    </>
  );
};
