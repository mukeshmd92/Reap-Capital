import BlackButton from "../BlackButton/BlackButton";

const SectionDivider = ({ text }: { text: string }) => {
  return (
    <section className="w-full px-4 py-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] mt-10">
      <div className="max-w-[87rem] px-24 mx-auto relative">
        <div className="flex items-center justify-center">
          <div className=" h-[1px] w-[90%] bg-green-300 rounded-2xl"></div>
          <BlackButton text={text} />
          <div className=" h-[1px] w-[90%] bg-green-300 rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default SectionDivider;
