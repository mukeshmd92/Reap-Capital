import HeaderBrick from "../HeaderBrick/HeaderBrick";

const SectionHeader = ({
  HeaderBrickText,
  title,
  title2,
  description,
}: {
  HeaderBrickText: string;
  title: string;
  title2: string;
  description?: string;
}) => {
  return (
    <header className="flex flex-col items-center mb-16 translate-y-[-1rem] animate-fade-in opacity-0">
      <HeaderBrick text={HeaderBrickText} />

      <h2 className=" flex flex-col items-center text-5xl font-medium text-center tracking-[-1.44px] leading-[58px] [font-family:'Poppins',Helvetica] max-w-md">
        <span className="text-black tracking-[-0.69px]">{title}</span>
        <span className="text-[#0aa26c] tracking-[-0.69px]">{title2}</span>
      </h2>
      {description && (
        <p className="[font-family:'Inter_Variable-Regular',Helvetica] font-normal text-neutral-700 text-lg text-center tracking-[0] leading-[26px]">
          {description}
        </p>
      )}
    </header>
  );
};

export default SectionHeader;
