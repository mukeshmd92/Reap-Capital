import { AboutUsSection } from "./sections/AboutUsSection/AboutUsSection";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import CheckEligibilitySection from "./sections/CheckEligibilitySection/CheckEligibilitySection";
import FaqSection from "./sections/FaqSection/FaqSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import LoansSection from "./sections/LoansSection/LoansSection";
import MyTeamSection from "./sections/MyTeamSection/MyTeamSection";
import { SecuritySupportSection } from "./sections/SecuritySupportSection/SecuritySupportSection";
import StatsCardSection from "./sections/StatsCardSection/StatsCardSection";
import WhyUsSection from "./sections/WhyUsSection/WhyUsSection";

export const Hp = () => {
  return (
    <div className="bg-white w-full min-h-screen" data-model-id="221:2">
      <div className="bg-white w-full relative">
        {/* Hero Section with Background Images */}
        <HeroSection />

        <AboutUsSection />
        {/* Stats Cards Section */}
        <StatsCardSection />

        <LoansSection />

        <WhyUsSection />

        <MyTeamSection />

        {/* Security Support Section */}
        <SecuritySupportSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* Check Eligibility Section */}
        <CheckEligibilitySection />

        {/* Footer Section */}
        {/* <section className="w-full relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:3000ms]"> */}
        <section className="">
          <FooterSection />
        </section>
      </div>
    </div>
  );
};
