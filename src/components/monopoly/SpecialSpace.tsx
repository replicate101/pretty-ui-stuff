
import React from 'react';
import { cn } from '@/lib/utils';

type SpecialSpaceProps = {
  type: 'go' | 'jail' | 'parking' | 'go-to-jail' | 'chance' | 'community-chest' | 'tax' | 'railroad' | 'utility';
  name: string;
  price?: string;
  orientation?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
};

const SpecialSpace: React.FC<SpecialSpaceProps> = ({
  type,
  name,
  price,
  orientation = 'bottom',
  className
}) => {
  // Different backgrounds based on type
  const getBgClass = () => {
    switch (type) {
      case 'chance':
        return 'bg-pink-200';
      case 'community-chest':
        return 'bg-orange-200';
      case 'railroad':
        return 'bg-white';
      case 'utility':
        return 'bg-gray-100';
      case 'tax':
        return 'bg-white';
      case 'go':
      case 'jail':
      case 'parking':
      case 'go-to-jail':
        return 'bg-white';
      default:
        return 'bg-white';
    }
  };

  // Get appropriate icon or text for the space
  const getIcon = () => {
    switch (type) {
      case 'chance':
        return <div className="text-xl font-bold text-pink-600">?</div>;
      case 'community-chest':
        return <div className="text-xl font-bold text-orange-600">CC</div>;
      case 'railroad':
        return <div className="font-bold text-black">🚂</div>;
      case 'utility':
        return type === 'utility' ? <div className="font-bold">💡</div> : <div className="font-bold">🚿</div>;
      case 'go':
        return <div className="font-bold text-red-600 transform rotate-45">GO</div>;
      case 'jail':
        return <div className="font-bold">JAIL</div>;
      case 'parking':
        return <div className="font-bold">FREE PARKING</div>;
      case 'go-to-jail':
        return <div className="font-bold">GO TO JAIL</div>;
      case 'tax':
        return <div className="font-bold">TAX</div>;
      default:
        return null;
    }
  };

  return (
    <div className={cn("border border-black overflow-hidden flex flex-col justify-center items-center", getBgClass(), className)}>
      <div className="flex flex-col items-center justify-center text-center p-1 h-full w-full">
        <div className="mb-1">{getIcon()}</div>
        <div className="text-xxs font-bold">{name}</div>
        {price && <div className="text-xxs mt-1">{price}</div>}
      </div>
    </div>
  );
};

export default SpecialSpace;
