
import React from 'react';
import MonopolyBoard from '@/components/monopoly/MonopolyBoard';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-2 md:p-4">
      <h1 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold mb-4 md:mb-8 text-center`}>
        Monopoly Board Game
      </h1>
      <div className="w-full max-w-[95vw] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
        <MonopolyBoard />
      </div>
      <div className="mt-4 md:mt-6 text-center text-gray-600">
        <p>{isMobile ? "Simplified Monopoly board for mobile" : "Classic Monopoly board game UI"}</p>
      </div>
    </div>
  );
};

export default Index;
