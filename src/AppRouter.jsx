import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { BookingTables } from "./components/booking/BookingTables";
import { HomePage } from "./components/main/HomePage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/booking" element={<BookingTables />} />

        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};
