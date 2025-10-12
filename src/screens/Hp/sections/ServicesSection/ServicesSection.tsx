import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServicesSection = () => {
  const teamMembers = [
    {
      name: "Rajiv Talreja",
      image: "https://c.animaapp.com/mfjdkgyvaVebQt/img/frame-1686557622.svg",
      description:
        "A leading voice in the MSME space, Rajiv has worked with thousands of small business owners to help them scale sustainably. His experience brings a deep understanding of real challenges faced by business owners seeking fast and reliable funding.",
      isLarge: true,
    },
    {
      name: "Karan Hasija",
      image: "https://c.animaapp.com/mfjdkgyvaVebQt/img/frame-1686557646-1.svg",
      description:
        "With hands-on expertise in business operations and performance growth, Karan has helped entrepreneurs across 190+ industries build stronger systems, making him a key driver in designing finance solutions that actually work for MSMEs.",
      isLarge: false,
    },
    {
      name: "Akash Kedia",
      image: "https://c.animaapp.com/mfjdkgyvaVebQt/img/frame-1686557647.svg",
      description:
        "Akash is a seasoned fintech leader with over a decade of experience in building credit and lending products. He has led key innovations at Flipkart, including No-Cost EMIs and Pay Later, and served as Chief Product Officer at CheQ, driving credit solutions for millions in India.",
      isLarge: false,
    },
  ];

  return (
    <section className="w-full relative py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col items-center mb-16 translate-y-[-1rem] animate-fade-in opacity-0">
          <Badge
            variant="outline"
            className="mb-4 bg-white rounded-[20px_5px_5px_5px] border-[#1caa7b] text-[#109157] font-semibold shadow-[0px_1px_2px_#0000001a,0px_3px_3px_#00000017,0px_7px_4px_#0000000d,0px_12px_5px_#00000003,0px_19px_5px_transparent] px-6 py-1"
          >
            Team
          </Badge>

          <h2 className=" flex flex-col items-center text-5xl font-medium text-center tracking-[-1.44px] leading-[58px] [font-family:'Poppins',Helvetica] max-w-md">
            <span className="text-black tracking-[-0.69px]">About the </span>
            <span className="text-[#0aa26c] tracking-[-0.69px]">Founders</span>
          </h2>
        </header>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Rajiv Talreja - Large Profile */}
          <div className="lg:col-span-2 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div className="order-2 lg:order-1">
                    <img
                      src={teamMembers[0].image}
                      alt={teamMembers[0].name}
                      className="w-full h-auto max-w-[498px]"
                    />
                  </div>
                  <div className="order-1 lg:order-2 flex flex-col justify-start pt-0 lg:pt-8">
                    <h3 className="text-8xl md:text-[94px] font-medium text-black tracking-[-2.82px] leading-tight [font-family:'Inter_Variable-Medium',Helvetica] mb-6">
                      {teamMembers[0].name}
                    </h3>
                    <p className="text-base text-neutral-800 leading-normal [font-family:'Poppins',Helvetica] max-w-lg">
                      {teamMembers[0].description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Karan Hasija */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="flex flex-col">
                  <img
                    src={teamMembers[1].image}
                    alt={teamMembers[1].name}
                    className="w-full h-auto max-w-[509px] mb-6"
                  />
                  <h3 className="text-[32px] font-semibold text-black tracking-[-0.96px] leading-normal [font-family:'Inter_Variable-SemiBold',Helvetica] mb-4">
                    {teamMembers[1].name}
                  </h3>
                  <p className="text-base text-neutral-800 leading-normal [font-family:'Poppins',Helvetica]">
                    {teamMembers[1].description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Akash Kedia */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="flex flex-col">
                  <img
                    src={teamMembers[2].image}
                    alt={teamMembers[2].name}
                    className="w-full h-auto max-w-[509px] mb-6"
                  />
                  <h3 className="text-[32px] font-semibold text-black tracking-[-0.96px] leading-normal [font-family:'Inter_Variable-SemiBold',Helvetica] mb-4">
                    {teamMembers[2].name}
                  </h3>
                  <p className="text-base text-neutral-800 leading-normal [font-family:'Poppins',Helvetica]">
                    {teamMembers[2].description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
