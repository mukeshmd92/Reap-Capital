import { ICONS } from "../../../../assets";
import SectionDivider from "../../../../components/SectionDivider/SectionDivider";
import { TextReveal } from "../../../../components/ui/text-reveal";

export const AboutUsSection = ({ id }: { id: string }) => {
  return (
    <section className="relative w-full h-auto py-16 mt-6 lg:mt-20" id={id}>
      <div className="relative max-w-4xl mx-auto px-4 flex flex-col items-center justify-center">
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Logo Section */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] flex items-center space-x-4">
            <img
              className=" w-[12.5rem] lg:w-[18rem] h-auto object-contain"
              alt="Background graphic"
              src={ICONS.AboutIcon}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative max-w-[34rem] w-full h-160 pt-8 md:pt-5  px-3 sm:px-0 mt-6 md:mt-0">
          {/* Heading with Badge */}
          <div className="flex flex-wrap text-center justify-center ">
            <h1 className="text-black text-[1.8rem] md:text-[2.5rem] font-inter font-bold md:font-medium  ">
              Reap Capital is powered by
            </h1>
            <div className=" flex items-center justify-center border-2 md:border-4 border-yellow-400 rounded-xl py-0.7 px-1 md:py-2 md:px-0 shadow-xl rotate-[10.02deg] overflow-hidden">
              <img
                className=" w-[2rem] h-11 sm:w-[4rem]  object-contain"
                alt="Quantum Leap badge"
                src={ICONS.quantumLeap}
              />
            </div>
            <div className="pt-2">
              <h1 className="text-black text-[1.7rem] md:text-[2.5rem]  font-inter font-bold md:font-medium  ">
                Quantum Leap.
              </h1>
            </div>
          </div>
          <div></div>

          <div className="mt-1 md:mt-1  leading-relaxed text-base md:text-lg text-center font-semibold ">
            <TextReveal className="flex flex-col text-red-700">
              We help business owners access money quickly. Whether it&apos;s to
              grow, manage cash flow, or grab new opportunities, we&apos;re here
              to make funding easy.
            </TextReveal>
          </div>

          {/* overflow borders  */}
          {/* left border  */}
          <div className="absolute left-0 top-0 w-[3.5px] h-full border-r-2 border-dashed border-r-gray-300 scale-y-[-1.05] "></div>
          {/* right border  */}
          <div className="absolute right-0 top-0 w-[3.5px] h-full border-r-2 border-dashed border-r-gray-300 scale-y-[-1.05]"></div>
          {/* bottom border  */}
          <div className="absolute bottom-0 left-0 w-full h-[3.5px] border-b-2 border-dashed border-b-gray-300 scale-x-[1.05]"></div>
          {/* top border  */}
          <div className="absolute top-0 left-0 w-full h-[3.5px] border-t-2 border-dashed border-t-gray-300 scale-x-[1.05]"></div>

          {/* corner dots  */}
          <div className="absolute -top-2 -left-2 bg-gray-50 p-1.5 rounded-full shadow-lg border-1 border-gray-300 ">
            <div className="bg-green-600 h-1.5 w-1.5 rounded-full"></div>
          </div>
          <div className="absolute -top-2 -right-2 bg-gray-50 p-1.5 rounded-full shadow-lg border-1 border-gray-300">
            <div className="bg-green-600 h-1.5 w-1.5 rounded-full "></div>
          </div>
          <div className="absolute -bottom-2 -left-2 bg-gray-50 p-1.5 rounded-full shadow-lg border-1 border-gray-300">
            <div className="bg-green-600 h-1.5 w-1.5 rounded-full"></div>
          </div>
          <div className="absolute -bottom-2 -right-2 bg-gray-50 p-1.5 rounded-full shadow-lg border-1 border-gray-300">
            <div className="bg-green-600 h-1.5 w-1.5 rounded-full "></div>
          </div>
        </div>
      </div>

      <SectionDivider text={"Let's Start"} />
    </section>
  );
};
