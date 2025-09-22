import { Check } from "lucide-react";
import { ICONS } from "../../../../assets";
import SectionDivider from "../../../../components/SectionDivider/SectionDivider";
import HeaderBrick from "../../../../components/HeaderBrick/HeaderBrick";
import { motion } from "framer-motion";

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
    <section className="max-w-[87rem] mx-auto py-4 sm:py-6 lg:py-8 px-4 sm:px-8 lg:px-22">
      <div>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-8 sm:mb-12 lg:mb-16"
        >
          <HeaderBrick text="Security" />

          <h2 className="flex flex-col items-center text-center [font-family:'Poppins',Helvetica] font-medium text-3xl sm:text-4xl lg:text-5xl tracking-[-1.44px] leading-[1.2] sm:leading-[1.3] lg:leading-[68px]">
            <span className="text-black tracking-[-0.69px]">
              Security & Support
            </span>
            <span className="text-[#0aa26c] tracking-[-0.69px]">
              You Can Trust
            </span>
          </h2>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center justify-center p-1.5 rounded-full bg-green-600">
              <Check
                className="w-4 h-4 sm:w-5 sm:h-5"
                color="white"
                strokeWidth={4}
              />
            </div>
            <p className="text-green-600 font-medium text-lg sm:text-xl lg:text-2xl">
              No Unofficial Charges
            </p>
          </div>

          <div className="max-w-[32rem] mx-auto text-center mt-4 text-gray-700 text-sm sm:text-base lg:text-[1.125rem] px-4">
            We never ask for additional fees to speed up processing or reduce
            interest rates. What you see is what you get.
          </div>
        </motion.div>

        {/* Cards Section  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-8 lg:gap-10 justify-items-center">
          {SecurityCardsData.map((card, index) => (
            <div
              key={index}
              className="w-full max-w-sm sm:max-w-md lg:max-w-xl p-1.5 border border-gray-300 bg-gray-100 shadow-xl rounded-3xl rounded-tl-[3.5rem] overflow-hidden relative"
            >
              <div className="absolute inset-0 overflow-hidden rounded-3xl rounded-tl-[3.5rem]">
                <div className="absolute top-[5%] left-[10%] w-[80%] h-[95%] bg-green-600 blur-2xl rounded-full"></div>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-start gap-3 sm:gap-5 p-5 py-8 sm:p-6 bg-white/80 rounded-2xl rounded-tl-[3.5rem] shadow-xl relative z-10">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-28 h-auto sm:w-20 sm:h-auto flex-shrink-0"
                />
                <div className="text-left">
                  <p className="text-xl sm:text-xl font-semibold">
                    {card.title}
                  </p>
                  <p className="text-gray-700 mt-2 sm:mt-3 text-base sm:text-base w-full">
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
