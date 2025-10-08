import { ICONS } from "../../../../assets";
import { Button } from "../../../../components/ui/button";

const CheckEligibilitySection = () => {
  return (
    <section className="w-full bg-black">
      <div className="w-full h-[5.5rem] sm:h-[5rem] lg:h-[6rem] bg-white -mt-4 z-10"></div>
      <div
        className="w-full rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] overflow-hidden relative flex items-center justify-center -mt-[2rem] sm:-mt-[3rem] lg:-mt-[4rem] py-16  sm:py-2"
        style={{
          background: "radial-gradient(circle at center 1%, #149D64, #0B6452)",
        }}
      >
        {/* Absolute position icons - Hidden on mobile, visible on larger screens */}
        <img
          src={ICONS.LeftRocket}
          alt="Left Rocket"
          className=" absolute top-1/3.5 left-0 w-[3rem] h-auto lg:w-[120px] lg:h-[268px] object-contain"
        />
        <img
          src={ICONS.bgArrow}
          alt="Bg Arrow"
          className="absolute bottom-0 right-0 w-full h-[80%] sm:h-[50%] lg:h-[60%] object-contain  scale-250 sm:scale-150 blur-[1px]"
        />
        <img
          src={ICONS.rightMoney}
          alt="Right Money"
          className=" sm:block absolute bottom-1/6 right-0 w-[4rem] h-auto lg:w-[150px] lg:h-[300px] object-contain blur-xs"
        />
        <img
          src={ICONS.topCutMoney}
          alt="Top Cut Money"
          className=" md:block absolute top-0 left-3/12 w-[8rem] h-auto lg:w-[16rem] lg:h-[12rem] object-contain"
        />

        <div className="max-w-[95%] sm:max-w-[80%] lg:max-w-[42rem] w-full flex flex-col items-center justify-center pt-[6rem] sm:pt-[6rem] lg:pt-[10rem] pb-[3rem] sm:pb-[4rem] lg:pb-[5rem] px-4 sm:px-6 lg:px-0">
          <div className="font-normal text-white text-[2rem] sm:text-3xl md:text-4xl lg:text-5xl lin text-center tracking-[-0.5px] sm:tracking-[-0.8px] lg:tracking-[-1.44px] leading-tight sm:leading-[1.1] lg:leading-[57.6px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
            Check your eligibility now &amp; get a call back within a few hours
          </div>

          <div className=" mt-6 sm:mt-6 text-[#ffffffe6] text-[16px] sm:text-lg md:text-xl lg:text-[1.125rem] text-center justify-center leading-6 sm:leading-6 lg:leading-[27px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms] max-w-[99%] sm:max-w-[80%] lg:max-w-full">
            Find out if you qualify in just a few steps. No delays. No paperwork
            hassles. Just fast answers and flexible loan options made for your
            business.
          </div>

          <Button className="mt-6 sm:mt-8 lg:mt-10 w-[200px] sm:w-[190px] lg:w-[206px] h-[55px] sm:h-[54px] lg:h-[58px] bg-black rounded-[18px] sm:rounded-[18px] lg:rounded-[20px] border-[0.5px] border-solid  border-[#ffffff] shadow-[0px_1px_3px_#0000001a,0px_5px_5px_#00000017,0px_11px_7px_#0000000d,0px_20px_8px_#00000003,0px_31px_9px_transparent,inset_0px_0px_3px_5px_#71ffcd66] font-medium text-white text-md sm:text-base lg:text-lg text-center tracking-[-0.3px] sm:tracking-[-0.4px] lg:tracking-[-0.54px] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms] hover:bg-gray-900 transition-colors cursor-pointer">
            Start Your Process
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CheckEligibilitySection;
