import { HeroSection } from "../header/HeroSection";
import { About } from "./About";
import { Specials } from "./Specials";
import { Testimonials } from "./Testimonials";

export const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <Specials />
      <Testimonials />
      <About />
    </main>
  );
};
