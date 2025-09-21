import { ICONS } from "../../../../assets";
import SectionDivider from "../../../../components/SectionDivider/SectionDivider";
import { TextReveal } from "../../../../components/ui/text-reveal";

export const AboutUsSection = ({ id }: { id: string }) => {
  return (
    <section className="relative w-full h-auto py-16" id={id}>
      <div className="relative max-w-4xl mx-auto px-4">
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Logo Section */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] flex items-center space-x-4">
            <img
              className="w-[7rem] h-[7rem] object-contain"
              alt="Background graphic"
              src={ICONS.logo}
            />
            {/* <div className="w-[120px] h-[120px] bg-[url(https://c.animaapp.com/mfjdkgyvaVebQt/img/group-1686557879-1.png)] bg-[100%_100%]" /> */}
            <div className="flex flex-col">
              <div className="text-black text-[47.33px] tracking-[-1.42px] [font-family:Inter Display,'Inter Display Placeholder',sans-serif] font-normal leading-normal">
                Reap
              </div>
              <div className="text-black text-[47.33px] tracking-[-3.31px] [font-family:Inter Display,'Inter Display Placeholder',sans-serif] font-normal leading-normal">
                Capital
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-[34rem] space-y-8 relative pt-5 ">
            {/* Heading with Badge */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <h1 className="text-black text-[2.5rem] font-medium ">
                Reap Capital is powered by
              </h1>
              <div className=" flex items-center justify-center border-4 border-yellow-400 rounded-xl p-1 shadow-xl rotate-[10.02deg] overflow-hidden">
                <img
                  className=" w-[3rem] h-[3rem]  object-contain"
                  alt="Quantum Leap badge"
                  src={ICONS.quantumLeap}
                />
              </div>
              <h1 className="text-black text-[2.5rem] font-medium ">
                Quantum Leap.
              </h1>
            </div>
            <p className="text-black text-[2.4rem] font-normal max-w-[100%] mx-auto mt-4 pb-1">
              <TextReveal className="-mt-10 flex items-center justify-center text-center ">
                We help business owners access money quickly. Whether it&apos;s
                to grow, manage cash flow, or grab new opportunities, we&apos;re
                here to make funding easy.
              </TextReveal>
            </p>

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
            <div className="absolute bottom-6 -right-2 bg-gray-50 p-1.5 rounded-full shadow-lg border-1 border-gray-300">
              <div className="bg-green-600 h-1.5 w-1.5 rounded-full "></div>
            </div>
          </div>
        </div>
      </div>

      <SectionDivider text={"Let's Start"} />
    </section>
  );
};
