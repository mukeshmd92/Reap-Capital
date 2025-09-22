import { ICONS } from "../../../../assets";
import { Card, CardContent } from "../../../../components/ui/card";
import { motion } from "framer-motion";

const StatsCardSection = () => {
  const statsCards = [
    {
      number: "800,000+",
      description: "Businesses Served",
      image: ICONS.business,
      alt: "Business",
    },
    {
      number: "196+",
      description: "Industries Catered",
      image: ICONS.industries,
      alt: "Industries",
    },
    {
      number: "50M+",
      description: "Entrepreneurs Connected",
      image: ICONS.connected,
      alt: "Connected",
    },
    {
      number: "200+",
      description: "Employees & Growing",
      image: ICONS.employee,
      alt: "Employee",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="max-w-[75rem] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-10 justify-items-center">
          {statsCards.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }} // start below + invisible
              whileInView={{ opacity: 1, y: 0 }} // move up into place
              transition={{ duration: 0.4, delay: index * 0.1 }} // staggered animation
              viewport={{ once: true }} // animate only once
              className="w-full max-w-sm"
            >
              <Card className="w-full h-auto bg-white rounded-[60px_20px_20px_20px] border border-solid border-[#c2c2c2]">
                <CardContent className="p-0">
                  <div className="relative h-auto m-[7px] rounded-[55px_14px_14px_10px] flex flex-col items-center sm:items-baseline  justify-center sm:justify-baseline bg-white py-4 overflow-hidden shadow-[0px_13px_28px_#0000001a,0px_11px_51px_#00000017,0px_115px_69px_#0000000d,0px_205px_82px_#00000003,0px_320px_90px_transparent]">
                    <div className=" w-[180px] h-auto sm:w-[90px] lg:w-[100px]">
                      <img
                        className="w-full h-full object-cover"
                        alt={stat.alt}
                        src={stat.image}
                      />
                    </div>
                    <div className="w-full h-auto px-2 flex flex-col text-center sm:text-left mt-2 sm:mt-5">
                      <div className="w-full font-semibold text-black text-[1.6rem] sm:text-3xl lg:text-4xl">
                        {stat.number}
                      </div>
                      <div className="w-full text-neutral-700 text-base sm:text-base leading-[20px] sm:leading-[24px] lg:leading-[26px] break-words">
                        {stat.description}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCardSection;
