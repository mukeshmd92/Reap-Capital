import { Button } from "../ui/button";

const BlackButton = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <Button
      className={`relative mx-4 bg-black text-white cursor-pointer hover:border-green-600 hover:text-green-500 rounded-[20px] border-4 border-solid border-[#1cf17c85] h-auto px-10 py-4 transition-all duration-300 ease-in-out group ${className}`}
    >
      <span className="relative z-10 font-medium transition-all duration-300 ease-in-out text-lg text-center tracking-[-0.54px] leading-[normal]">
        {text}
      </span>
    </Button>
  );
};

export default BlackButton;
