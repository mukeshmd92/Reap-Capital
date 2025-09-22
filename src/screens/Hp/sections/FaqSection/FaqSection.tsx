import { Badge } from "../../../../components/ui/badge";
import CustomAccordion from "../../../../components/ui/custom-accordion";
import { motion } from "framer-motion";

const FaqSection = () => {
  const faqItems = [
    {
      id: "item-1",
      question: "Why should I take a loan from Reap Capital?",
      answer:
        "Reap Capital offers quick, flexible, and transparent loans designed specifically for MSME business owners. The process is simple, the approvals are fast, and you get full support at every step.",
    },
    {
      id: "item-2",
      question: "What can I use the loan for?",
      answer:
        "You can use the loan for various business purposes including working capital, equipment purchase, inventory management, business expansion, or any other legitimate business need.",
    },
    {
      id: "item-3",
      question: "Who can apply for a loan?",
      answer:
        "Any MSME business owner with a valid business registration, minimum 6 months of business operations, and required documentation can apply for our loans.",
    },
    {
      id: "item-4",
      question: "What documents do I need to apply for?",
      answer:
        "You'll need business registration documents, bank statements, GST certificate, PAN card, and other relevant business documents. Our team will guide you through the complete list.",
    },
    {
      id: "item-5",
      question: "How fast can I get the money?",
      answer:
        "Once your application is approved and all documents are verified, you can receive the funds within 24-48 hours directly to your business account.",
    },
    {
      id: "item-6",
      question: "Are there any extra charges apart from the interest?",
      answer:
        "We believe in transparent pricing. Apart from the interest rate, there are minimal processing fees. No hidden charges or surprise costs.",
    },
    {
      id: "item-7",
      question: "How do I send my documents?",
      answer:
        "You can upload your documents directly on the Reap Capital application page or email them to us. A representative will also be available to assist you if needed.",
    },
    {
      id: "item-8",
      question: "What's the loan amount and repayment period?",
      answer:
        "Loan amounts and tenure vary based on your business profile and needs. Repayment terms are flexible and discussed with you during the process.",
    },
  ];

  // Split FAQ items into two columns
  const leftColumnItems = faqItems.slice(0, 5);
  const rightColumnItems = faqItems.slice(5);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <Badge className="mb-4 p-[0.5rem] px-[1.5rem] bg-white rounded-tl-3xl text-sm sm:text-base lg:text-lg border border-solid border-[#1caa7b] text-[#109157] font-semibold">
          FAQs
        </Badge>
        <h2 className="[font-family:'Poppins',Helvetica] font-medium text-3xl sm:text-4xl lg:text-5xl text-center tracking-[-0.5px] sm:tracking-[-1px] lg:tracking-[-1.44px] leading-[1.2] sm:leading-[1.3] lg:leading-[68px]">
          <span className="text-black tracking-[-0.3px] sm:tracking-[-0.5px] lg:tracking-[-0.69px] font-medium">
            Everything You{" "}
          </span>
          <br />
          <span className="text-[#0aa26c] tracking-[-0.3px] sm:tracking-[-0.5px] lg:tracking-[-0.69px] font-medium">
            Need to Know
          </span>
        </h2>
      </motion.div>

      <div className="py-8 sm:py-12 lg:py-16 px-1 sm:px-3 lg:px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-8">
            {/* Left Column */}
            <div>
              <CustomAccordion items={leftColumnItems} />
            </div>

            {/* Right Column */}
            <div>
              <CustomAccordion items={rightColumnItems} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
