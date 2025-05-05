import React from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

type SpecialSpaceProps = {
  type:
    | "go"
    | "jail"
    | "parking"
    | "go-to-jail"
    | "chance"
    | "community-chest"
    | "tax"
    | "railroad"
    | "utility";
  name: string;
  price?: string;
  orientation?: "top" | "right" | "bottom" | "left";
  className?: string;
};

const SpecialSpace: React.FC<SpecialSpaceProps> = ({
  type,
  name,
  price,
  orientation = "bottom",
  className,
}) => {
  const isMobile = useIsMobile();

  // Different backgrounds based on type
  const getBgClass = () => {
    switch (type) {
      case "chance":
        return "bg-pink-200";
      case "community-chest":
        return "bg-orange-200";
      case "railroad":
        return "bg-white";
      case "utility":
        return "bg-gray-100";
      case "tax":
        return "bg-white";
      case "go":
      case "jail":
      case "parking":
      case "go-to-jail":
        return "bg-white";
      default:
        return "bg-white";
    }
  };

  // Get appropriate icon or text for the space
  const getIcon = () => {
    const iconClass = isMobile
      ? "text-[0.6rem] leading-none font-bold"
      : "text-sm font-bold";

    switch (type) {
      case "chance":
        return <div className={cn(iconClass, "text-pink-600")}>?</div>;
      case "community-chest":
        return <div className={cn(iconClass, "text-orange-600")}>CC</div>;
      case "railroad":
        return <div className={iconClass}>🚂</div>;
      case "utility":
        return (
          <div className={iconClass}>{type === "utility" ? "💡" : "🚿"}</div>
        );
      case "go":
        return <div className={cn(iconClass, "text-red-600")}>GO</div>;
      case "jail":
        return <div className={iconClass}></div>;
      case "parking":
        return <div className={iconClass}>FREE</div>;
      case "go-to-jail":
        return <div className={iconClass}></div>;
      case "tax":
        return <div className={iconClass}></div>;
      default:
        return null;
    }
  };

  const textSizeClass = isMobile ? "text-[0.5rem] leading-none" : "text-xs";

  return (
    <div
      className={cn(
        "border border-black overflow-hidden flex flex-col justify-center items-center",
        getBgClass(),
        className
      )}
    >
      <div className="flex flex-col items-center justify-center text-center p-1 h-full w-full gap-0.5">
        {getIcon()}
        <div
          className={cn(
            "font-bold break-words max-w-full text-center",
            textSizeClass
          )}
        >
          {name}
        </div>
        {price && (
          <div className={cn("text-center", textSizeClass)}>{price}</div>
        )}
      </div>
    </div>
  );
};

export default SpecialSpace;
