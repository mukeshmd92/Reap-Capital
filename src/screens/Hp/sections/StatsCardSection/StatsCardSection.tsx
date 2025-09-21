import { ICONS } from "../../../../assets";
import { Card, CardContent } from "../../../../components/ui/card";

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
    <section className="w-full px-4 py-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
      <div className="max-w-[87rem] px-24 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
          {statsCards.map((stat, index) => (
            <Card
              key={index}
              className="w-[17rem] h-[244px] bg-white rounded-[60px_20px_20px_20px] border border-solid border-[#c2c2c2]"
            >
              <CardContent className="p-0">
                <div className="relative  h-[230px] m-[7px] rounded-[55px_14px_14px_10px] bg-white overflow-hidden shadow-[0px_13px_28px_#0000001a,0px_11px_51px_#00000017,0px_115px_69px_#0000000d,0px_205px_82px_#00000003,0px_320px_90px_transparent]">
                  <div className="absolute w-[178px] h-[71px] top-[139px] left-[18px]">
                    <div className="absolute w-[174px] top-0 left-0 [font-family:'Inter_Variable-SemiBold',Helvetica] font-semibold text-black text-4xl tracking-[0] leading-[normal]">
                      {stat.number}
                    </div>
                    <div className="absolute w-[166px] top-[45px] left-0 [font-family:'Inter_Variable-Regular',Helvetica] font-normal text-neutral-700 text-base tracking-[0] leading-[26px] whitespace-nowrap">
                      {stat.description}
                    </div>
                  </div>
                  <div className="absolute w-[100px] h-[100px] top-[18px] left-[18px]">
                    <img
                      className="w-[7rem] h-[7rem] object-cover"
                      alt={stat.alt}
                      src={stat.image}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCardSection;
