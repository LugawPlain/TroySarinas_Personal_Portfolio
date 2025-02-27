import React from "react";

interface HoverUpAnimationTextProps {
  text: string;
  className?: string;
}

const HoverUpAnimationText: React.FC<HoverUpAnimationTextProps> = ({
  text,
  className,
}) => {
  return (
    <div className={`${className} group relative `}>
      <a className="" href="">
        <span className="relative inline-flex overflow-hidden">
          <div className="translate-y-0 skew-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
            {text}
          </div>
          <div className="absolute translate-y-[110%] skew-y-12 transform-gpu text-text-primary transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
            {text}
          </div>
        </span>
      </a>
    </div>
  );
};

export default HoverUpAnimationText;
