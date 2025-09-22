import humanarrow from "../../../../assets/images/humanarrow.png";

import correctarrow from "../../../../assets/icons/correctarrow.png";
import bg from "../../../../assets/icons/bg.png";
import Rocket from "../../../../assets/images/Rocket.png";
import bluringimg from "../../../../assets/images/bluringimg.svg";
import Downmoney from "../../../../assets/images/Downmoney.png";
import down2 from "../../../../assets/images/down2.png";
import sidearrow from "../../../../assets/images/sidearrow.png";
import toparrow from "../../../../assets/icons/toparrow.svg";
import { motion } from "framer-motion";
import BlackButton from "../../../../components/BlackButton/BlackButton";
import { TextAnimate } from "../../../../components/ui/text-animate";
export const HeroSection = ({ id }: { id: string }) => {
  return (
    <motion.div
      id={id}
      className="overflow-hidden h-[50rem] w-full relative flex justify-center px-34 bg-cover bg-center rounded-b-4xl"
      style={{ backgroundImage: `url(${bg})` }}
      initial={{ y: -200, opacity: 0 }} // start zoomed in, invisible
      animate={{ y: 0, opacity: 1 }} // zoom out to normal + fade in
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div className="flex flex-col md:flex-row items-center top-33  md:top-0   relative gap-25 z-10 text-center md:text-left">
        <div className="flex flex-col  text-white gap-7 md:gap-10">
          <div className="flex flex-col gap-2 md:gap-3  text-3xl sm:text-3xl md:text-6xl">
            <h1>
              <TextAnimate
                animation="blurInUp"
                by="character"
                once
                delay={1.8}
                duration={1}
              >
                Get quick, no-fuss loans
              </TextAnimate>
            </h1>
            <h1 className=" font-bold">
              <TextAnimate
                animation="blurInUp"
                by="character"
                once
                delay={1.8}
                duration={1}
              >
                for your business
              </TextAnimate>
            </h1>
          </div>
          <motion.p
             
              initial={{ opacity: 0, y: 100 }} // start below + invisible
              whileInView={{ opacity: 1, y: 0 }} // move up into place
              transition={{ duration: 1, delay: 1.8 }} // staggered animation
              viewport={{ once: true }} // animate only once
               className="text-lg max-w-lg">
            No delays. No hidden terms. Just fast and flexible finance when you
            need it the most.
          </motion.p>

           <motion.div
              
              initial={{ opacity: 0, y: 100 }} // start below + invisible
              whileInView={{ opacity: 1, y: 0 }} // move up into place
              transition={{ duration: 1, delay: 1.8 }} // staggered animation
              viewport={{ once: true }} // animate only once
            >
              <BlackButton text="Let's Start" className="w-[206px] ml-0" />
            </motion.div>
          
        </div>

        <div className="relative w-[360px] h-[400px] top-[-80px] md:top-[0]  flex items-center justify-center">
          <img
            className=" z-10 md:mr-26 w-[260px]  h-[300px] sm:w-[300px] sm:h-[300px]  md:w-[329px] md:h-[363px]   "
            src={humanarrow}
            alt=""
          />
        </div>
        <motion.div
          className="absolute top-[-40px] md:ml-15 rounded-b-full w-200 md:w-370 pr-34 py-10"
          initial={{ y: -200, opacity: 0 }} // starts above screen
          animate={{ y: 0, opacity: 1 }} // slides down to normal position
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={toparrow} alt="" className="" />
        </motion.div>

        <img
          src={correctarrow}
          alt="arrow background"
          className="absolute md:ml-110 mt-58 md:mt-10 w-[490px] h-[400px]  md:w-180 md:h-auto  opacity-100 z-0"
        />
      </div>
      <div className="absolute right-[160px] md:right-[704px] mt-[730px] md:mt-[455px]">
        <motion.img
          src={Downmoney}
          className="w-43 h-50 md:w-90 md:h-98 rotate-120deg] shrink-0 aspect-[201.17/301.89]"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.8}}
        />
      </div>

      <div className="absolute ml-75 mt-185 md:ml-162 md:mt-130">
        <motion.img
          className=" w-30 h-40 md:w-80 md:h-78 rotate-[20.deg] shrink-0 aspect-[201.17/301.89]"
          src={down2}
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{  duration: 1, delay: 1.8}}
        />
      </div>
      <div className="  absolute mt-137 mr-[-390px]  md:mt-87 md:mr-[-1370px]">
        <motion.img
          src={sidearrow}
          className="mix-blend-color-dodge h-30 md:h-50 md:w-53"
          initial={{ rotate: 90, x: 200, opacity: 0 }}
          animate={{ rotate: 290, x: 0, opacity: 1 }}
          transition={{  duration: 1, delay: 1.8 }}
        />
      </div>
      <div className="absolute mt-26 ml-[-330px] md:mt-25 md:ml-[-1180px]">
        <motion.img
          src={bluringimg}
          className="mix-blend-color-dodge w-29 md:w-38"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
      <div className="absolute mt-93 md:mt-111 ml-[-394px] md:ml-[-1300px]">
        <motion.img
          src={Rocket}
          className="h-46 md:h-61"
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        />
      </div>
    </motion.div>
  );
};
