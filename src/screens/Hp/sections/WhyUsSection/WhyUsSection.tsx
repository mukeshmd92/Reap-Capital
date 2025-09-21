import { IMAGES } from "../../../../assets";
import HeaderBrick from "../../../../components/HeaderBrick/HeaderBrick";
import SectionDivider from "../../../../components/SectionDivider/SectionDivider";

const WhyUsSection = () => {
  return (
    <section className="w-full px-4 py-8 md:py-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
      <div className="max-w-2xl mx-auto text-center">
        <HeaderBrick text="Why us" />
        <h2 className=" flex flex-col items-center [font-family:'Poppins',Helvetica] font-medium text-3xl md:text-5xl text-center tracking-[-1.44px] leading-[40px] md:leading-[68px] mb-4 md:mb-6">
          <span className="text-black tracking-[-0.69px]">Why Choose </span>
          <span className="text-[#0aa26c] tracking-[-0.69px]">
            Reap Capital?
          </span>
        </h2>
        <p className="[font-family:'Inter_Variable-Regular',Helvetica] font-normal text-neutral-700 text-base md:text-lg text-center tracking-[0] leading-[22px] md:leading-[26px]">
          We Keep It Simple, So You Can Focus on Business
        </p>
      </div>

      {/* First row - 2 cards */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center max-w-[75rem] mx-auto mt-6 md:mt-10">
        <div className="w-full md:w-[60%] h-full rounded-3xl rounded-tl-[3.5rem] overflow-hidden shadow-md">
          <img
            src={IMAGES.WhyImgOne}
            alt="Why Us"
            className="w-full h-48 md:h-auto scale-110 object-cover"
          />
          <div className="p-4 md:p-6 bg-gradient-to-b from-green-100 to-white">
            <h4 className="text-gray-900 font-semibold mb-2 text-xl md:text-[1.75rem]">
              Fast Approvals
            </h4>
            <p className="text-gray-700 text-sm md:text-lg max-w-[25rem]">
              Get funding decisions quickly, no long waits or back-and-forth.
            </p>
          </div>
        </div>

        <div className="w-full md:w-[40%] h-full rounded-3xl rounded-tl-[3.5rem] overflow-hidden shadow-md">
          <img
            src={IMAGES.WhyImgTwo}
            alt="Why Us"
            className="w-full h-48 md:h-auto scale-110 object-cover"
          />
          <div className="p-4 md:p-6 md:pt-10 bg-gradient-to-b from-green-100 to-white">
            <h4 className="text-gray-900 font-semibold mb-2 text-xl md:text-[1.75rem]">
              Flexible Loan Options
            </h4>
            <p className="text-gray-700 text-sm md:text-lg max-w-[25rem]">
              Choose a loan that fits your exact business needs, from working
              capital to growth funding.
            </p>
          </div>
        </div>
      </div>

      {/* Second row - 3 cards */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center max-w-[75rem] mx-auto mt-6 md:mt-10">
        <div className="w-full md:w-[33%] h-full rounded-3xl rounded-tl-[3.5rem] overflow-hidden shadow-md">
          <img
            src={IMAGES.WhyImgThree}
            alt="Why Us"
            className="w-full h-48 md:h-auto scale-110 object-cover"
          />
          <div className="p-4 md:p-6 md:pt-10 bg-gradient-to-b from-green-100 to-white">
            <h4 className="text-gray-900 font-semibold mb-2 text-lg md:text-[1.65rem]">
              Simple Process
            </h4>
            <p className="text-gray-700 text-sm md:text-[1rem] max-w-[25rem]">
              Minimal paperwork. clear steps. Full support from application to
              disbursement.
            </p>
          </div>
        </div>

        <div className="w-full md:w-[34%] h-full rounded-3xl rounded-tl-[3.5rem] overflow-hidden shadow-md">
          <img
            src={IMAGES.WhyImgFour}
            alt="Why Us"
            className="w-full h-48 md:h-auto scale-110 object-cover"
          />
          <div className="p-4 md:p-6 md:pt-10 bg-gradient-to-b from-green-100 to-white">
            <h4 className="text-gray-900 font-semibold mb-2 text-lg md:text-[1.65rem]">
              MSME-Focused Experts
            </h4>
            <p className="text-gray-700 text-sm md:text-[1rem] max-w-[25rem]">
              Work with people who truly understand the needs and challenges of
              small business owners
            </p>
          </div>
        </div>

        <div className="w-full md:w-[33%] h-full rounded-3xl rounded-tl-[3.5rem] overflow-hidden shadow-md">
          <img
            src={IMAGES.WhyImgFive}
            alt="Why Us"
            className="w-full h-48 md:h-auto scale-110 object-cover"
          />
          <div className="p-4 md:p-6 md:pt-10 bg-gradient-to-b from-green-100 to-white">
            <h4 className="text-gray-900 font-semibold mb-2 text-lg md:text-[1.65rem]">
              Trusted Lending Partners
            </h4>
            <p className="text-gray-700 text-sm md:text-[1rem] max-w-[25rem]">
              We connect you to top NBFCs and financial institutions across
              India, safely and securely.
            </p>
          </div>
        </div>
      </div>

      <SectionDivider text="Let's Start" />
    </section>
  );
};

export default WhyUsSection;
