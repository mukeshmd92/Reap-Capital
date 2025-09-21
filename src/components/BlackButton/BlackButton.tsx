import React from "react";
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
      className={`mx-4 bg-black cursor-pointer hover:border-green-500 hover:text-green-500 rounded-[20px] border border-solid border-[#ffffff80] shadow-[0px_1px_3px_#0000001a,0px_5px_5px_#00000017,0px_11px_7px_#0000000d,0px_20px_8px_#00000003,0px_31px_9px_transparent,inset_0px_0px_3px_5px_#71ffcd66] h-auto px-10 py-4  ${className}`}
    >
      <span className="[font-family:'Inter_Variable-Medium',Helvetica] font-medium text-white text-lg text-center tracking-[-0.54px] leading-[normal]">
        {text}
      </span>
    </Button>
  );
};

export default BlackButton;
