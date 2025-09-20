import { Button } from "../../../../components/ui/button";
import { TestimonialsSection } from "../TestimonialsSection/TestimonialsSection";

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-white rounded-b-[40px] overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
      <TestimonialsSection />
      <img
        className="w-[169px] h-[182px] absolute top-[86px] left-0 blur-[6.5px] object-cover"
        alt="Chatgpt image jul"
        src="https://c.animaapp.com/mfjdkgyvaVebQt/img/chatgpt-image-jul-1--2025--07-33-24-pm-2.png"
      />
      <img
        className="w-[141px] h-[305px] absolute top-[386px] right-[141px] object-cover"
        alt="Chatgpt image jul"
        src="https://c.animaapp.com/mfjdkgyvaVebQt/img/chatgpt-image-jul-1--2025--07-33-24-pm-2.png"
      />
    </section>
  );
};
