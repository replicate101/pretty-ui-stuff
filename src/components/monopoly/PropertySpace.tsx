
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

  // Determine color bar position based on orientation
  const getOrientationStyles = () => {
    switch(orientation) {
      case 'top':
        return {
          colorBar: "h-5 w-full",
          content: "flex flex-col justify-between items-center flex-grow p-1 text-center"
        };
      case 'right':
        return {
          colorBar: "w-5 h-full absolute right-0",
          content: "flex flex-col justify-between items-center flex-grow p-1 pr-6 text-center w-full h-full"
        };
      case 'bottom':
        return {
          colorBar: "h-5 w-full",
          content: "flex flex-col justify-between items-center flex-grow p-1 text-center"
        };
      case 'left':
        return {
          colorBar: "w-5 h-full absolute left-0",
          content: "flex flex-col justify-between items-center flex-grow p-1 pl-6 text-center w-full h-full"
        };
      default:
        return {
          colorBar: "h-5 w-full",
          content: "flex flex-col justify-between items-center flex-grow p-1 text-center"
        };
    }
  };

  const styles = getOrientationStyles();
  
  // Calculate text size based on mobile view - increased for better readability
  const textSizeClass = isMobile ? 'text-[0.65rem] leading-[0.8rem]' : 'text-xxs';

  return (
    <div className={cn("border border-black bg-white overflow-hidden relative", className)}>
      <div className={cn(colorClass, styles.colorBar)}></div>
      <div className={styles.content}>
        <div className={cn("font-bold leading-tight max-w-full break-words", textSizeClass)}>{name}</div>
        {price && <div className={textSizeClass}>{price}</div>}
      </div>
    </div>
  );
};

export default PropertySpace;
