import { Check } from "lucide-react";
import { ICONS } from "../../../../assets";
import SectionDivider from "../../../../components/SectionDivider/SectionDivider";
import HeaderBrick from "../../../../components/HeaderBrick/HeaderBrick";

export const SecuritySupportSection = () => {
  const SecurityCardsData = [
    {
      title: "Your Data Stays Private",
      description:
        "We do not share or sell your information to third-party marketers or external agencies.",
      icon: ICONS.dataSecurity,
    },
    {
      title: "RBI-Compliant Security",
      description:
        "We follow all RBI guidelines and use leading security protocols to keep your data safe online.",
      icon: ICONS.rbiTiger,
    },
  ];
  return (
    <section className="max-w-[87rem] mx-auto py-14 px-22 ">
      <div className="">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 translate-y-[-1rem] animate-fade-in opacity-0">
          <HeaderBrick text="Security" />

          <h2 className=" flex flex-col items-center text-center [font-family:'Poppins',Helvetica] font-medium text-5xl tracking-[-1.44px] leading-[68px]">
            <span className="text-black tracking-[-0.69px]">
              Security & Support
            </span>
            <span className="text-[#0aa26c] tracking-[-0.69px]">
              You Can Trust
            </span>
          </h2>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center justify-center p-1.5 rounded-full bg-green-600">
              <Check className="w-5 h-5" color="white" strokeWidth={4} />
            </div>
            <p className="text-green-600 font-medium text-2xl">
              No Unofficial Charges
            </p>
          </div>

          <div className="max-w-[32rem] mx-auto text-center mt-4 text-gray-700 text-[1.125rem]">
            We never ask for additional fees to speed up processing or reduce
            interest rates. What you see is what you get.
          </div>
        </div>

        {/* Cars Section  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
          {SecurityCardsData.map((card, index) => (
            <div
              key={index}
              className=" max-w-xl p-1.5 border border-gray-300 bg-gray-100 shadow-xl rounded-3xl rounded-tl-[3.5rem] overflow-hidden relative "
            >
              <div className="absolute inset-0 overflow-hidden rounded-3xl rounded-tl-[3.5rem]">
                <div className="absolute top-[5%] left-[20%] w-[60%] h-[90%] bg-green-600 blur-2xl rounded-full"></div>
              </div>
              <div className=" flex flex-row items-center gap-5 p-5 bg-white/80 rounded-2xl rounded-tl-[3.5rem] shadow-xl relative z-10">
                <img src={card.icon} alt={card.title} className="w-20 h-20" />
                <div>
                  <p className="text-xl font-semibold">{card.title}</p>
                  <p className="text-gray-700 mt-3 text-medium w-[90%]">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SectionDivider text="Let's Start" />
    </section>
  );
};
