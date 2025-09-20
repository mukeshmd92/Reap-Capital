import { TextReveal } from "../../../../components/ui/text-reveal";

export const AboutUsSection = () => {
  return (
    <section className="relative w-full h-auto py-16">
      <div className="relative max-w-4xl mx-auto px-4">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          alt="Background graphic"
          src="https://c.animaapp.com/mfjdkgyvaVebQt/img/group-1686557842.png"
        />

        <div className="relative z-10 flex flex-col items-center text-center space-y-12">
          {/* Logo Section */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] flex items-center space-x-4">
            <img
              className="w-[130px] h-[130px] object-contain"
              alt="Background graphic"
              src="https://c.animaapp.com/mfjdkgyvaVebQt/img/group-1686557879-1.png"
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
          <div className="max-w-2xl space-y-8">
            {/* Heading with Badge */}
            <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] relative">
              <h1 className="[font-family:'Inter_Variable-SemiBold',Helvetica] font-semibold text-[#060606] text-[40px] text-center tracking-[-1.20px] leading-[65px]">
                Reap Capital is powered by Quantum Leap.
              </h1>

              <div className="absolute top-16 left-12 w-[67px] h-[67px] bg-white rounded-[15px] overflow-hidden border-4 border-solid border-[#edc938] rotate-[10.02deg] shadow-[0px_2.77px_2.21px_#00000005,0px_6.65px_5.32px_#00000007,0px_12.52px_10.02px_#00000009,0px_22.34px_17.87px_#0000000b,0px_41.78px_33.42px_#0000000d,0px_100px_80px_#00000012]">
                <img
                  className="absolute w-[54px] h-[59px] top-[-3px] left-px rotate-[-10.02deg] object-cover"
                  alt="Quantum Leap badge"
                  src="https://c.animaapp.com/mfjdkgyvaVebQt/img/screenshot-2025-06-25-at-7-13-25-pm-1.png"
                />
              </div>
            </div>

            {/* Description */}
            <TextReveal className="py-0 bg-red-200">
              We help business owners access money quickly. Whether it&apos;s to
              grow, manage cash flow, or grab new opportunities, we&apos;re here
              to make funding easy.
            </TextReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
