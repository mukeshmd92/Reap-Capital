// import humanarrow from "../../../../assets/images/humanarrow.png";

import correctarrow from "../../../../assets/icons/correctarrow.png";
import bg from "../../../../assets/icons/bg.png";
import Rocket from "../../../../assets/images/Rocket.png";
import bluringimg from "../../../../assets/images/bluringimg.svg";
import Downmoney from "../../../../assets/images/Downmoney.png";
import down2 from "../../../../assets/images/down2.png";
import sidearrow from "../../../../assets/images/sidearrow.png";
import toparrow from "../../../../assets/icons/toparrow.svg";
import { motion } from "framer-motion";
// import BlackButton from "../../../../components/BlackButton/BlackButton";
import { TextAnimate } from "../../../../components/ui/text-animate";
import { IMAGES } from "../../../../assets";
import ArrowMove from "./ArrowMove";
import { Button } from "../../../../components/ui/button";
export const HeroSection = ({ id }: { id: string }) => {
  return (
    <motion.div
      id={id}
      className="  overflow-hidden h-[53rem]  md:h-[47rem] w-full relative flex justify-center  bg-cover bg-center rounded-b-4xl "
      style={{ backgroundImage: `url(${bg})` }}
      initial={{ y: -200, opacity: 0 }} // start zoomed in, invisible
      animate={{ y: 0, opacity: 1 }} // zoom out to normal + fade in
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-col md:flex-row items-center top-30  md:top-0   relative gap-28 md:gap-39 z-10 text-center md:text-left">
        <div className="flex flex-col  text-white gap-7 md:gap-">
          <div className="flex flex-col gap-2 md:gap-3 text-4xl sm:text-3xl md:text-6xl">
            <h1 className="md:text-[63px]  opacity-95">
              <TextAnimate
                animation="blurInUp"
                by="character"
                once
                delay={1}
                duration={1}
              >
                Get quick, no-fuss loans
              </TextAnimate>
            </h1>
            <h1 className=" font-bold  md:text-[4rem]">
              <TextAnimate
                animation="blurInUp"
                by="character"
                once
                delay={1}
                duration={1}
              >
                for your business
              </TextAnimate>
            </h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 100 }} // start below + invisible
            whileInView={{ opacity: 1, y: 0 }} // move up into place
            transition={{ duration: 1, delay: 1 }} // staggered animation
            viewport={{ once: true }} // animate only once
            className="text-lg max-w-lg"
          >
            <div className=" md:w-[99%] flex items-center px-3 ">
              <p className=" text-[17px] opacity-90 ">
                No delays. No hidden terms. Just fast and flexible finance when
                you need it the most.
              </p>
            </div>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 100 }} // start below + invisible
            whileInView={{ opacity: 1, y: 0 }} // move up into place
            transition={{ duration: 1, delay: 1 }} // staggered animation
            viewport={{ once: true }} // animate only once
          >
            {/* <BlackButton
              text="Let's Start"
              className=" w-45 py-5 md:py-4 md:w-40 ml-0"
            /> */}
            <Button className="mt-6 sm:mt-8 lg:mt-10 w-[180px] sm:w-[180px] lg:w-[166px] h-[55px] sm:h-[54px] lg:h-[58px] bg-black rounded-[18px] sm:rounded-[18px] lg:rounded-[20px] border-[0.5px] border-solid  border-[#ffffff] shadow-[0px_1px_3px_#0000001a,0px_5px_5px_#00000017,0px_11px_7px_#0000000d,0px_20px_8px_#00000003,0px_31px_9px_transparent,inset_0px_0px_3px_5px_#71ffcd66] font-medium text-white text-md sm:text-base lg:text-lg text-center tracking-[-0.3px] sm:tracking-[-0.4px] lg:tracking-[-0.54px] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms] hover:bg-gray-900 transition-colors cursor-pointer">
              Let's Start
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          className="relative w-[360px] h-[400px] top-[-32px] md:top-[184px] left-[-60px] md:left-[-155px] flex items-center justify-center"
        >
          <ArrowMove
            imageUrl={IMAGES.HeroFounder}
            altText="Arrow Indicator"
            moveDistance={80}
            duration="1s"
            delay="1s"
            className="  z-400 mr-8  h-[420px]  sm:h-[550px]  md:h-[550px] rotate-2 scale-80 md:scale-110"
          />        </motion.div>

        <motion.div
          className="absolute top-[-160px] md:top-[-40px] ml-5 md:ml-15 rounded-b-full w-220 md:w-370 pr-4 py-10 flex justify-center"
          initial={{ y: -200, opacity: 0 }} // starts above screen
          animate={{ y: 0, opacity: 1 }} // slides down to normal position
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={toparrow}  alt="" className="  w-[40rem] md:w-[90rem]" />
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 1, // 👈 Wait 3 seconds before starting the animation
          }}
          className="absolute"
        >
          <ArrowMove
            imageUrl={correctarrow}
            altText="Arrow Indicator"
            moveDistance={80}
            duration="1s"
            delay="1s"
            className="ml-[-250px] md:ml-101 mt-80 md:mt-73 w-[500px] h-[304px] md:w-170 md:h-160 opacity-100 z-0 scale-110 md:scale-120 rotate-1"
          />
        </motion.div>
      </div>
     <div className="absolute left-[17vw] md:left-[25vw] bottom-[-21vw] md:bottom-[-14vw]">
  <motion.img
    src={Downmoney}
    alt="Falling Money"
    className="w-[33vw] md:w-[21vw] max-w-[200px] md:max-w-[350px] h-autorotate-120deg] shrink-0 aspect-[201.17/301.89]"
    initial={{ y: 200, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 1 }}
  />
</div>


  <div className="absolute left-[77vw] md:left-[64vw] bottom-[-16vw] md:bottom-[-14vw]">
  <motion.img
    src={down2}
    alt="Downward Arrow"
    className="w-[29vw] md:w-[19vw] max-w-[180px] md:max-w-[280px] h-autorotate-120deg] shrink-0 aspect-[201.17/301.89]"
    initial={{ y: 200, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 1 }}
  />
</div>

    <div className="absolute bottom-[24vh] md:bottom-[20vh] right-[-9vw] md:right-[-7vw]">
  <motion.img
    src={sidearrow}
    alt="Side Arrow"
    className="mix-blend-color-dodge h-[22vw] md:h-[15vw] max-h-[180px] md:max-h-[260px] w-auto"
    initial={{ rotate: 90, x: 200, opacity: 0 }}
    animate={{ rotate: 290, x: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 1 }}
  />
</div>
    <div className="absolute bottom-[67vh] md:bottom-[59vh] left-[1vw] md:left-[2vw]">
    <motion.img
      src={bluringimg}
      className="mix-blend-color-dodge w-[30vw] md:w-[12vw] max-w-[150px] md:max-w-[250px] h-auto"
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    />
  </div>
     <div className="absolute left-[-8vw] bottom-[38vh] md:left-[-3vw] md:bottom-[-2vh]">
  <motion.img
    src={Rocket}
    alt="Rocket"
    className="w-[33vw] max-w-[120] md:max-w-[210px] h-auto"
    initial={{ x: -300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 1 }}
  />
</div>

    </motion.div>
  );
};
