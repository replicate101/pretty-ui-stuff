
import React from 'react';
import MonopolyBoard from '@/components/monopoly/MonopolyBoard';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Monopoly Board Game</h1>
      <div className="w-full max-w-3xl mx-auto">
        <MonopolyBoard />
      </div>
      <div className="mt-6 text-center text-gray-600">
        <p>Classic Monopoly board game UI</p>
      </div>
    </div>
  );
};

export default Index;
