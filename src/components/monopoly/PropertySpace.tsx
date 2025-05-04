
import React from 'react';
import { cn } from '@/lib/utils';

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

  const orientationStyles = {
    top: {
      container: "flex flex-col-reverse h-full",
      colorBar: "h-6 w-full",
      content: "flex flex-col justify-between items-center flex-grow p-1 text-center",
    },
    right: {
      container: "flex flex-row h-full",
      colorBar: "w-6 h-full",
      content: "flex flex-col justify-between items-center flex-grow p-1 text-center rotate-90",
    },
    bottom: {
      container: "flex flex-col h-full",
      colorBar: "h-6 w-full",
      content: "flex flex-col justify-between items-center flex-grow p-1 text-center",
    },
    left: {
      container: "flex flex-row-reverse h-full",
      colorBar: "w-6 h-full",
      content: "flex flex-col justify-between items-center flex-grow p-1 text-center rotate-90",
    },
  };

  const styles = orientationStyles[orientation];

  return (
    <div className={cn("border border-black bg-white overflow-hidden", className)}>
      <div className={styles.container}>
        <div className={cn(colorClass, styles.colorBar)}></div>
        <div className={styles.content}>
          <div className="text-xxs font-bold leading-tight">{name}</div>
          {price && <div className="text-xxs mt-1">{price}</div>}
        </div>
      </div>
    </div>
  );
};

export default PropertySpace;
