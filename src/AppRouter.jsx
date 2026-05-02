import { Navigate, Route, Routes } from "react-router";
import { HomePage } from "./components/main/HomePage";
import { BookingPage } from "./components/booking/BookingPage";
import { About } from "./components/main/About";
import { Specials } from "./components/main/Specials";
import { HeroSection } from "./components/header/HeroSection";
import { ConfirmedBooking } from "./components/booking/ConfirmedBooking ";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Specials />} />
      <Route path="/delivery" element={<HeroSection />} />
      <Route path="/confirmed" element={<ConfirmedBooking />} />

      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
