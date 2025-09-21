import { ICONS } from "../../../../assets";
import { TextReveal } from "../../../../components/ui/text-reveal";

export const AboutUsSection = () => {
  return (
    <section className="relative w-full h-auto py-16">
      <div className="relative max-w-4xl mx-auto px-4">
        {/* <img
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          alt="Background graphic"
          src="https://c.animaapp.com/mfjdkgyvaVebQt/img/group-1686557842.png"
        /> */}

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
          <div className="max-w-[34rem] space-y-8 relative ">
            {/* Heading with Badge */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <h1 className="text-black text-[2.5rem] font-medium ">
                Reap Capital is powered by
              </h1>
              <div className="border-4 border-yellow-500 rounded-xl p-2 shadow-xl rotate-[10.02deg] overflow-hidden">
                <img
                  className=" w-[3rem] h-[3rem]  object-cover scale-110 -mt-0.5 "
                  alt="Quantum Leap badge"
                  src={ICONS.quantumLeap}
                />
              </div>
              <h1 className="text-black text-[2.5rem] font-medium ">
                Quantum Leap.
              </h1>
            </div>
            <p className="text-black text-[2rem] font-normal max-w-[70%] mx-auto -mt-4">
              We help business owners access money quickly. Whether it&apos;s to
              grow, manage cash flow, or grab new opportunities, we&apos;re here
              to make funding easy.
            </p>

            {/* overflow borders  */}
            {/* left border  */}
            <div className="absolute left-0 top-0 w-[3.5px] h-full border-r-3 border-dashed border-r-gray-300 scale-y-[-1.1]"></div>
            {/* right border  */}
            <div className="absolute right-0 top-0 w-[3.5px] h-full border-r-3 border-dashed border-r-gray-300 scale-y-[-1.15]"></div>
            {/* bottom border  */}
            <div className="absolute bottom-0 left-0 w-full h-[3.5px] border-b-3 border-dashed border-b-gray-300 scale-x-[1.15]"></div>
            {/* top border  */}
            <div className="absolute top-0 left-0 w-full h-[3.5px] border-t-3 border-dashed border-t-gray-300 scale-x-[1.15]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
