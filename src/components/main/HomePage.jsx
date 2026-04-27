import { HeroSection } from "../header/HeroSection";
import { About } from "./About";
import { Specials } from "./Specials";
import { Testimonials } from "./Testimonials";

export const HomePage = () => {
  return (
    <>
      <div className="hero">
        <HeroSection />
      </div>
      <div className="specials">
        <Specials />
      </div>
      <div className="testimonials">
        <Testimonials />
      </div>
      <div className="about">
        <About />
      </div>
    </>
  );
};
