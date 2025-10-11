import { Card, CardContent } from "../../../../components/ui/card";
import { ArrowUpRightIcon } from "lucide-react";
import HeaderBrick from "../../../../components/HeaderBrick/HeaderBrick";
import { ICONS } from "../../../../assets";
import { motion } from "framer-motion"; // 👈 import Framer Motion

const LoansSection = () => {
  const featuresData = [
    {
      title: "Working Capital Loan",
      description:
        "For businesses that need steady cash to handle day-to-day operations, from paying vendors to stocking inventory and managing payroll.",
      iconSrc: ICONS.workingCapital,
    },
    {
      title: "Business Expansion Loan",
      description:
        "Fund your next stage of expansion, whether it's opening a new location, upgrading equipment, or increasing production capacity.",
      iconSrc: ICONS.businessGrowth,
    },
    {
      title: "Line of Credit ",
      description:
        "Access funds on demand. Use only what you need, when you need it, and pay interest only on the amount used.",
      iconSrc: ICONS.creditLine,
    },
    {
      title: "Invoice Financing ",
      description:
        "Waiting on payments? Convert unpaid invoices into working capital, no need to chase clients or delay growth plans.",
      iconSrc: ICONS.invoice,
    },
  ];

  return (
    <section className="w-full px-4 py-16 mt-10">
      {/* Header */}
      <motion.header
        className="flex flex-col items-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <HeaderBrick text="Loans" />
        <h2 className="flex flex-col items-center justify-center text-3xl md:text-5xl font-medium text-center tracking-[-1.44px] md:leading-[58px] max-w-xl">
          <span className="text-black tracking-[-0.69px]">
            Business Loans Made
          </span>
          <span className="text-[#0aa26c] tracking-[-0.69px]">
            <span className="text-black">for</span> Real Business Needs
          </span>
        </h2>
        <p className=" flex items-center justify-center font-normal text-neutral-700 text-md md:text-sm text-center  leading-[26px] max-w-[26rem] mt-4">
          Choose the right financing solution to manage cash flow, expand
          operations, or unlock working capital without any delays or confusion.
        </p>
      </motion.header>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[75rem] mx-auto px-1.5 md:px-0">
        {featuresData.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white rounded-[60px_20px_20px_20px] border border-[#c2c2c2] p-0 overflow-hidden">
              <CardContent className="p-0 md:h-[263px] relative">
                <div className="flex flex-col  md:flex-row items-center gap-4 p-2 h-full overflow-visible">
                  {/* Icon Section */}
                  <div className="relative   w-[200px] h-auto md:h-[130px] mt-[22px] flex-shrink-0">
                    <img
                      className="w-full h-full"
                      alt="Feature icon"
                      src={feature.iconSrc}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 h-full overflow-visible">
                    <div className="bg-white flex flex-col rounded-[10px_14px_14px_10px] p-5 h-full shadow-[0px_13px_28px_#0000001a,0px_11px_51px_#00000017,0px_115px_69px_#0000000d,0px_205px_82px_#00000003,0px_320px_90px_transparent] relative">
                      {/* Title and Description */}
                      <div className="mb-6">
                        <h3 className="font-semibold text-black text-2xl mb-[21px]">
                          {feature.title}
                        </h3>
                        <p className="text-neutral-700 text-base leading-[26px]">
                          {feature.description}
                        </p>
                      </div>

                      {/* CTA Button */}
                      <div
                        className="flex flex-row gap-2 items-center cursor-pointer group"
                        onClick={() => {
                          window.location.href = "/contact";
                        }}
                      >
                        <div className="underline font-medium text-green-700 text-lg">
                          Let&apos;s Start
                        </div>
                        <ArrowUpRightIcon className="group-hover:rotate-45 transition-all duration-300 text-green-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LoansSection;
