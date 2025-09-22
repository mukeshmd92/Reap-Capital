import ContactBg from "../assets/images/ContactBg.png";
import ContactForm from "./ContactForm";
import { FooterSection } from "../screens/Hp/sections/FooterSection/FooterSection";
import { BadgeCheck } from "lucide-react";
import { TextAnimate } from "../components/ui/text-animate";
const ContactPage = () => {
  return (
    <div className="bg-black">
      <div
        className="overflow-hidden h-screen w-full relative flex flex-row justify-center bg-cover bg-center rounded-b-4xl bg-black"
        style={{ backgroundImage: `url(${ContactBg})` }}
      >
        <div className=" w-[75rem] flex justify-between items-center  ">
          <div className="flex flex-col gap-5 mt-[-50px] w-152  text-white items-start  ">
            <div>
              <h1 className="text-5xl font-medium ">
                <TextAnimate
                  animation="blurInUp"
                  by="character"
                  once
                  delay={1.2}
                  duration={0.6}
                >
                  Empowering the MSMEs
                </TextAnimate>
                <TextAnimate
                  animation="blurInUp"
                  by="character"
                  once
                  delay={2.5}
                  duration={0.6}
                >
                  with instant access and
                </TextAnimate>
                <TextAnimate
                  animation="blurInUp"
                  by="character"
                  once
                  delay={3.8}
                  duration={0.6}
                >
                  instant solutions.
                </TextAnimate>
              </h1>
            </div>

            <div>
              <div className="flex flex-col gap-2">
                <div className="flex  gap-2">
                  <BadgeCheck className="w-5 h-5" />
                  <h3>From Approval to Account- Instantly</h3>
                </div>
                <div className="flex  gap-2">
                  <BadgeCheck className="w-5 h-5" />
                  <h3>Fast Track Your Funding</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-33">
            <ContactForm />
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default ContactPage;
export { ContactPage };
