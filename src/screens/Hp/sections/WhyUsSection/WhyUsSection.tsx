import { IMAGES } from "../../../../assets";
import HeaderBrick from "../../../../components/HeaderBrick/HeaderBrick";
import SectionDivider from "../../../../components/SectionDivider/SectionDivider";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const WhyUsSection = () => {
  return (
    <section className="w-full px-4 py-8 md:py-16">
      <motion.header
        className="flex flex-col items-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <HeaderBrick text="Why us" />
          <h2 className="flex flex-col items-center [font-family:'Poppins',Helvetica] font-medium text-3xl md:text-5xl text-center tracking-[-1.44px] leading-[40px] md:leading-[68px] mb-4 md:mb-6">
            <span className="text-black tracking-[-0.69px]">Why Choose </span>
            <span className="text-[#0aa26c] tracking-[-0.69px]">
              Reap Capital?
            </span>
          </h2>
          <p className="[font-family:'Inter_Variable-Regular',Helvetica] font-normal text-neutral-700 text-base md:text-lg text-center tracking-[0] leading-[22px] md:leading-[26px]">
            We Keep It Simple, So You Can Focus on Business
          </p>
        </div>
      </motion.header>

      {/* row of 2 */}
      <div className="flex flex-col md:flex-row gap-6 items-center  md:max-w-[75rem] mx-auto mt-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-[60%] rounded-3xl rounded-tl-[3.5rem] overflow-hidden shadow-md"
        >
          <img
            src={IMAGES.WhyImgOne}
            alt="Why Us"
            className=" scale-110 object-cover"
          />
          <div className="p-6 bg-gradient-to-b from-green-100 to-white">
            <h4 className="text-gray-900 font-semibold mb-2 text-[1.75rem]">
              Fast Approvals
            </h4>
            <p className="text-gray-700 text-sm md:text-lg max-w-[25rem]">
              Get funding decisions quickly, no long waits or back-and-forth.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-[40%] rounded-3xl rounded-tl-[3.5rem] overflow-hidden shadow-md"
        >
          <img
            src={IMAGES.WhyImgTwo}
            alt="Why Us"
            className="scale-110 object-cover"
          />
          <div className="p-6 pt-10 bg-gradient-to-b from-green-100 to-white">
            <h4 className="text-gray-900 font-semibold mb-2 text-[1.75rem]">
              Flexible Loan Options
            </h4>
            <p className="text-gray-700 text-sm md:text-lg max-w-[25rem]">
              Choose a loan that fits your exact business needs, from working
              capital to growth funding.
            </p>
          </div>
        </motion.div>
      </div>

      {/* row of 3 */}
      <div className="flex  flex-col md:flex-row gap-6 items-center max-w-[75rem] mx-auto mt-10">
        {[
          {
            img: IMAGES.WhyImgThree,
            title: "Simple Process",
            text: "Minimal paperwork. Clear steps. Full support from application to disbursal.",
          },
          {
            img: IMAGES.WhyImgFour,
            title: "MSME-Focused Experts",
            text: "Work with people who truly understand the needs and challenges of small business owners.",
          },
          {
            img: IMAGES.WhyImgFive,
            title: "Trusted Lending Partners",
            text: "We connect you to top NBFCs and financial institutions across India, safely and securely.",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="w-[33%] rounded-3xl rounded-tl-[3.5rem] overflow-hidden shadow-md"
          >
            <img
              src={card.img}
              alt="Why Us"
              className="scale-110 object-cover"
            />
            <div className="p-6 pt-10 bg-gradient-to-b from-green-100 to-white">
              <h4 className="text-gray-900 font-semibold mb-2 text-[1.65rem]">
                {card.title}
              </h4>
              <p className="text-gray-700 text-[1rem] max-w-[25rem]">
                {card.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <SectionDivider text="Let's Start" />
    </section>
  );
};

export default WhyUsSection;
