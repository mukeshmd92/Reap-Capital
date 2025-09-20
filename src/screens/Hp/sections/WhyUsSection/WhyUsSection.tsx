import { IMAGES } from "../../../../assets";
import HeaderBrick from "../../../../components/HeaderBrick/HeaderBrick";
import SectionDivider from "../../../../components/SectionDivider/SectionDivider";

const WhyUsSection = () => {
  return (
    <section className="w-full px-4 py-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
      <div className="max-w-2xl mx-auto text-center">
        <HeaderBrick text="Why us" />
        <h2 className=" flex flex-col items-center [font-family:'Poppins',Helvetica] font-medium text-5xl text-center tracking-[-1.44px] leading-[68px] mb-6">
          <span className="text-black tracking-[-0.69px]">Why Choose </span>
          <span className="text-[#0aa26c] tracking-[-0.69px]">
            Reap Capital?
          </span>
        </h2>
        <p className="[font-family:'Inter_Variable-Regular',Helvetica] font-normal text-neutral-700 text-lg text-center tracking-[0] leading-[26px]">
          We Keep It Simple, So You Can Focus on Business
        </p>
      </div>
      {/* card rows of   2*/}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center  max-w-[68rem] mx-auto bg-amber-100"> */}
      <div className="flex  gap-6 items-center  max-w-[75rem] mx-auto mt-10">
        <div className="w-[60%] h-full  rounded-3xl rounded-tl-[3.5rem] overflow-hidden shadow-md ">
          <img
            src={IMAGES.WhyImgOne}
            alt="Why Us"
            className="scale-110 object-cover"
          />
          {/* <div className="p-2 bg-gradient-to-b from-transparent to-green-100  "></div> */}
          <div className="p-6 bg-gradient-to-b from-green-100 to-white ">
            <h4 className="text-gray-900 font-semibold mb-2 text-[1.75rem]">
              Fast Approvals
            </h4>
            <p className="text-gray-700 text-lg max-w-[25rem]">
              Get funding decisions quickly, no long waits or back-and-forth.
            </p>
          </div>
        </div>
        {/* card one  */}
        <div className="w-[40%] h-fullh-full  rounded-3xl rounded-tl-[3.5rem] overflow-hidden shadow-md ">
          <img
            src={IMAGES.WhyImgTwo}
            alt="Why Us"
            className="scale-110 object-cover"
          />
          {/* <div className="p-2 bg-gradient-to-b from-transparent to-green-100  "></div> */}
          <div className="p-6 pt-10 bg-gradient-to-b from-green-100 to-white ">
            <h4 className="text-gray-900 font-semibold mb-2 text-[1.75rem]">
              Flexible Loan Options
            </h4>
            <p className="text-gray-700 text-lg max-w-[25rem]">
              Choose a loan that fits your exact business needs, from working
              capital to growth funding.
            </p>
          </div>
        </div>
      </div>

      {/* card rows of   3*/}

      <div className="flex  gap-6 items-center  max-w-[75rem] mx-auto mt-10">
        {/* card one  */}
        <div className="w-[33%] h-full  rounded-3xl rounded-tl-[3.5rem] overflow-hidden shadow-md ">
          <img
            src={IMAGES.WhyImgThree}
            alt="Why Us"
            className="scale-110 object-cover"
          />
          <div className="p-6 pt-10 bg-gradient-to-b from-green-100 to-white ">
            <h4 className="text-gray-900 font-semibold mb-2 text-[1.65rem]">
              Simple Process
            </h4>
            <p className="text-gray-700 text-[1rem] max-w-[25rem]">
              Minimal paperwork. clear steps. Full support from application to
              dis
            </p>
          </div>
        </div>
        {/* card two  */}
        <div className="w-[34%] h-full  rounded-3xl rounded-tl-[3.5rem] overflow-hidden shadow-md ">
          <img
            src={IMAGES.WhyImgFour}
            alt="Why Us"
            className="scale-110 object-cover"
          />
          <div className="p-6 pt-10 bg-gradient-to-b from-green-100 to-white ">
            <h4 className="text-gray-900 font-semibold mb-2 text-[1.65rem]">
              MSME-Focused Experts
            </h4>
            <p className="text-gray-700 text-[1rem] max-w-[25rem]">
              Work with people who truly understand the needs and challenges of
              small business owners
            </p>
          </div>
        </div>
        {/* card three  */}
        <div className="w-[33%] h-full  rounded-3xl rounded-tl-[3.5rem] overflow-hidden shadow-md ">
          <img
            src={IMAGES.WhyImgFive}
            alt="Why Us"
            className="scale-110 object-cover"
          />
          {/* <div className="p-3 bg-green-100 blur-sm  "></div> */}
          <div className="p-6 pt-10 bg-gradient-to-b from-green-100 to-white ">
            <h4 className="text-gray-900 font-semibold mb-2 text-[1.65rem]">
              Trusted Lending Partners
            </h4>
            <p className="text-gray-700 text-[1rem] max-w-[25rem]">
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
