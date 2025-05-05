
import React from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

type PropertySpaceProps = {
  name: string;
  colorGroup: string;
  price?: string;
  orientation?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
};

const PropertySpace: React.FC<PropertySpaceProps> = ({
  name,
  colorGroup,
  price,
  orientation = 'bottom',
  className
}) => {
  const isMobile = useIsMobile();
  
  const colorMap: Record<string, string> = {
    brown: 'bg-monopoly-brown',
    lightBlue: 'bg-monopoly-light-blue',
    pink: 'bg-monopoly-pink',
    orange: 'bg-monopoly-orange',
    red: 'bg-monopoly-red',
    yellow: 'bg-monopoly-yellow',
    green: 'bg-monopoly-green',
    blue: 'bg-monopoly-blue',
  };

  const colorClass = colorMap[colorGroup] || 'bg-gray-200';

  // Position color band based on orientation
  const getOrientationStyles = () => {
    switch(orientation) {
      case 'top':
        return {
          colorBar: "h-4 w-full",
          content: "flex flex-col justify-between items-center flex-grow p-1 text-center",
        };
      case 'right':
        return {
          colorBar: "w-4 h-full absolute right-0",
          content: "flex flex-col justify-between items-center pr-5 flex-grow p-1 text-center",
        };
      case 'bottom':
        return {
          colorBar: "h-4 w-full absolute bottom-0",
          content: "flex flex-col justify-between items-center pb-5 flex-grow p-1 text-center",
        };
      case 'left':
        return {
          colorBar: "w-4 h-full absolute left-0",
          content: "flex flex-col justify-between items-center pl-5 flex-grow p-1 text-center",
        };
      default:
        return {
          colorBar: "h-4 w-full",
          content: "flex flex-col justify-between items-center flex-grow p-1 text-center",
        };
    }
  };

  const styles = getOrientationStyles();
  
  // Reduced text size for better mobile fit
  const textSizeClass = isMobile ? 'text-[0.6rem] leading-none' : 'text-xs';

  return (
    <div className={cn("border border-black bg-white overflow-hidden relative", className)}>
      <div className="flex flex-col h-full w-full">
        <div className={cn(colorClass, styles.colorBar)}></div>
        <div className={styles.content}>
          <div className={cn("font-bold break-words max-w-full", textSizeClass)}>{name}</div>
          {price && <div className={textSizeClass}>{price}</div>}
        </div>
      </div>
    </div>
  );
};

export default PropertySpace;
