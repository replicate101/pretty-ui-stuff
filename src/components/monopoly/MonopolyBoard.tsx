
import React from 'react';
import PropertySpace from './PropertySpace';
import SpecialSpace from './SpecialSpace';
import { useIsMobile } from '@/hooks/use-mobile';

const MonopolyBoard = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative w-full max-w-3xl aspect-square bg-monopoly-board border-4 border-black">
      {/* Center logo - hide on mobile for more space */}
      {!isMobile && (
        <div className="absolute inset-20 flex items-center justify-center">
          <div className="bg-red-600 text-white py-6 px-16 md:py-8 md:px-28 rounded-sm">
            <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl tracking-wide uppercase">
              Monopoly
            </h1>
          </div>
        </div>
      )}

      {/* Board grid layout */}
      {isMobile ? (
        /* Simplified mobile board layout with fewer spaces */
        <div className="absolute inset-0 grid grid-cols-7 grid-rows-7 gap-[1px]">
          {/* Corners */}
          <SpecialSpace
            type="go"
            name="GO"
            className="col-start-7 col-span-1 row-start-7 row-span-1 h-full w-full"
          />
          <SpecialSpace
            type="jail"
            name="Share the same room for 3 turns"
            className="col-start-1 col-span-1 row-start-7 row-span-1 h-full w-full"
          />
          <SpecialSpace
            type="parking"
            name="Free Stay"
            className="col-start-1 col-span-1 row-start-1 row-span-1 h-full w-full"
          />
          <SpecialSpace
            type="go-to-jail"
            name="Banned from Burger King"
            className="col-start-7 col-span-1 row-start-1 row-span-1 h-full w-full"
          />

          {/* Bottom row - properties and other spaces */}
          <PropertySpace
            name="Bluorng Store"
            colorGroup="brown"
            price=" ₹ 2000"
            className="col-start-6 col-span-1 row-start-7 row-span-1 h-full w-full"
          />
          <PropertySpace
            name="College Bookstall"
            colorGroup="brown"
            price=" ₹ 1000"
            className="col-start-5 col-span-1 row-start-7 row-span-1 h-full w-full"
          />
          <SpecialSpace
            type="tax"
            name="Printing Cost"
            price=" ₹ 200"
            className="col-start-4 col-span-1 row-start-7 row-span-1 h-full w-full"
          />
          <PropertySpace
            name="Mumbai"
            colorGroup="lightBlue"
            price=" ₹ 2000"
            className="col-start-3 col-span-1 row-start-7 row-span-1 h-full w-full"
          />
          <PropertySpace
            name="Delhi"
            colorGroup="lightBlue"
            price=" ₹ 2000"
            className="col-start-2 col-span-1 row-start-7 row-span-1 h-full w-full"
          />

          {/* Left column - properties and other spaces */}
          <PropertySpace
            name="Goa"
            colorGroup="pink"
            price=" ₹ 3400"
            orientation="left"
            className="col-start-1 col-span-1 row-start-6 row-span-1 h-full w-full"
          />
          <SpecialSpace
            type="utility"
            name="Blinkit"
            price=" ₹ 500"
            className="col-start-1 col-span-1 row-start-5 row-span-1 h-full w-full"
          />
          <PropertySpace
            name="Las Olas"
            colorGroup="pink"
            price=" ₹ 3600"
            orientation="left"
            className="col-start-1 col-span-1 row-start-4 row-span-1 h-full w-full"
          />
          <PropertySpace
            name="Diaz"
            colorGroup="pink"
            price=" ₹ 4000"
            orientation="left"
            className="col-start-1 col-span-1 row-start-3 row-span-1 h-full w-full"
          />
          <PropertySpace
            name="Ahmedabad"
            colorGroup="orange"
            price=" ₹ 4000"
            orientation="left"
            className="col-start-1 col-span-1 row-start-2 row-span-1 h-full w-full"
          />

          {/* Top row - properties and other spaces */}
          <PropertySpace
            name="Coldplay"
            colorGroup="orange"
            price=" ₹ 4220"
            orientation="top"
            className="col-start-2 col-span-1 row-start-1 row-span-1 h-full w-full"
          />
          <SpecialSpace
            type="chance"
            name="?"
            className="col-start-3 col-span-1 row-start-1 row-span-1 h-full w-full"
          />
          <PropertySpace
            name="Snicker Doodle"
            colorGroup="red"
            price="₹ 4400"
            orientation="top"
            className="col-start-4 col-span-1 row-start-1 row-span-1 h-full w-full"
          />
          <PropertySpace
            name="Chin-Chin-Chu"
            colorGroup="red"
            price="₹ 4500"
            orientation="top"
            className="col-start-5 col-span-1 row-start-1 row-span-1 h-full w-full"
          />
          <SpecialSpace
            type="railroad"
            name="Coppetto"
            price="₹ 1000"
            className="col-start-6 col-span-1 row-start-1 row-span-1 h-full w-full"
          />

          {/* Right column - properties and other spaces */}
          <PropertySpace
            name="Mokai"
            colorGroup="green"
            price="₹ 4800"
            orientation="right"
            className="col-start-7 col-span-1 row-start-2 row-span-1 h-full w-full"
          />
          <PropertySpace
            name="Farmers Cafe"
            colorGroup="green"
            price="₹ 5000"
            orientation="right"
            className="col-start-7 col-span-1 row-start-3 row-span-1 h-full w-full"
          />
          <SpecialSpace
            type="community-chest"
            name="CC"
            className="col-start-7 col-span-1 row-start-4 row-span-1 h-full w-full"
          />
          <PropertySpace
            name="Trad Day"
            colorGroup="blue"
            price="₹ 5300"
            orientation="right"
            className="col-start-7 col-span-1 row-start-5 row-span-1 h-full w-full"
          />
          <PropertySpace
            name="BE Awards"
            colorGroup="blue"
            price="₹ 5400"
            orientation="right"
            className="col-start-7 col-span-1 row-start-6 row-span-1 h-full w-full"
          />
        </div>
      ) : (
        /* Original full desktop board layout */
        <div className="absolute inset-0 grid grid-cols-11 grid-rows-11">
          {/* Corners */}
          <SpecialSpace
            type="go"
            name="GO"
            className="col-start-11 col-span-1 row-start-11 row-span-1"
          />
          <SpecialSpace
            type="jail"
            name="JAIL"
            className="col-start-1 col-span-1 row-start-11 row-span-1"
          />
          <SpecialSpace
            type="parking"
            name="FREE PARKING"
            className="col-start-1 col-span-1 row-start-1 row-span-1"
          />
          <SpecialSpace
            type="go-to-jail"
            name="GO TO JAIL"
            className="col-start-11 col-span-1 row-start-1 row-span-1"
          />

          {/* Bottom row - properties and other spaces */}
          <PropertySpace
            name="Mediterranean Avenue"
            colorGroup="brown"
            price="$60"
            className="col-start-10 col-span-1 row-start-11 row-span-1"
          />
          <SpecialSpace
            type="community-chest"
            name="Community Chest"
            className="col-start-9 col-span-1 row-start-11 row-span-1"
          />
          <PropertySpace
            name="Baltic Avenue"
            colorGroup="brown"
            price="$60"
            className="col-start-8 col-span-1 row-start-11 row-span-1"
          />
          <SpecialSpace
            type="tax"
            name="Income Tax"
            price="Pay $200"
            className="col-start-7 col-span-1 row-start-11 row-span-1"
          />
          <SpecialSpace
            type="railroad"
            name="Reading Railroad"
            price="$200"
            className="col-start-6 col-span-1 row-start-11 row-span-1"
          />
          <PropertySpace
            name="Oriental Avenue"
            colorGroup="lightBlue"
            price="$100"
            className="col-start-5 col-span-1 row-start-11 row-span-1"
          />
          <SpecialSpace
            type="chance"
            name="Chance"
            className="col-start-4 col-span-1 row-start-11 row-span-1"
          />
          <PropertySpace
            name="Vermont Avenue"
            colorGroup="lightBlue"
            price="$100"
            className="col-start-3 col-span-1 row-start-11 row-span-1"
          />
          <PropertySpace
            name="Connecticut Avenue"
            colorGroup="lightBlue"
            price="$120"
            className="col-start-2 col-span-1 row-start-11 row-span-1"
          />

          {/* Left column - properties and other spaces */}
          <PropertySpace
            name="St. Charles Place"
            colorGroup="pink"
            price="$140"
            orientation="left"
            className="col-start-1 col-span-1 row-start-10 row-span-1"
          />
          <SpecialSpace
            type="utility"
            name="Electric Company"
            price="$150"
            className="col-start-1 col-span-1 row-start-9 row-span-1"
          />
          <PropertySpace
            name="States Avenue"
            colorGroup="pink"
            price="$140"
            orientation="left"
            className="col-start-1 col-span-1 row-start-8 row-span-1"
          />
          <PropertySpace
            name="Virginia Avenue"
            colorGroup="pink"
            price="$160"
            orientation="left"
            className="col-start-1 col-span-1 row-start-7 row-span-1"
          />
          <SpecialSpace
            type="railroad"
            name="Pennsylvania Railroad"
            price="$200"
            className="col-start-1 col-span-1 row-start-6 row-span-1"
          />
          <PropertySpace
            name="St. James Place"
            colorGroup="orange"
            price="$180"
            orientation="left"
            className="col-start-1 col-span-1 row-start-5 row-span-1"
          />
          <SpecialSpace
            type="community-chest"
            name="Community Chest"
            className="col-start-1 col-span-1 row-start-4 row-span-1"
          />
          <PropertySpace
            name="Tennessee Avenue"
            colorGroup="orange"
            price="$180"
            orientation="left"
            className="col-start-1 col-span-1 row-start-3 row-span-1"
          />
          <PropertySpace
            name="New York Avenue"
            colorGroup="orange"
            price="$200"
            orientation="left"
            className="col-start-1 col-span-1 row-start-2 row-span-1"
          />

          {/* Top row - properties and other spaces */}
          <PropertySpace
            name="Kentucky Avenue"
            colorGroup="red"
            price="$220"
            orientation="top"
            className="col-start-2 col-span-1 row-start-1 row-span-1"
          />
          <SpecialSpace
            type="chance"
            name="Chance"
            className="col-start-3 col-span-1 row-start-1 row-span-1"
          />
          <PropertySpace
            name="Indiana Avenue"
            colorGroup="red"
            price="$220"
            orientation="top"
            className="col-start-4 col-span-1 row-start-1 row-span-1"
          />
          <PropertySpace
            name="Illinois Avenue"
            colorGroup="red"
            price="$240"
            orientation="top"
            className="col-start-5 col-span-1 row-start-1 row-span-1"
          />
          <SpecialSpace
            type="railroad"
            name="B. & O. Railroad"
            price="$200"
            className="col-start-6 col-span-1 row-start-1 row-span-1"
          />
          <PropertySpace
            name="Atlantic Avenue"
            colorGroup="yellow"
            price="$260"
            orientation="top"
            className="col-start-7 col-span-1 row-start-1 row-span-1"
          />
          <PropertySpace
            name="Ventnor Avenue"
            colorGroup="yellow"
            price="$260"
            orientation="top"
            className="col-start-8 col-span-1 row-start-1 row-span-1"
          />
          <SpecialSpace
            type="utility"
            name="Water Works"
            price="$150"
            className="col-start-9 col-span-1 row-start-1 row-span-1"
          />
          <PropertySpace
            name="Marvin Gardens"
            colorGroup="yellow"
            price="$280"
            orientation="top"
            className="col-start-10 col-span-1 row-start-1 row-span-1"
          />

          {/* Right column - properties and other spaces */}
          <PropertySpace
            name="Pacific Avenue"
            colorGroup="green"
            price="$300"
            orientation="right"
            className="col-start-11 col-span-1 row-start-2 row-span-1"
          />
          <PropertySpace
            name="North Carolina Avenue"
            colorGroup="green"
            price="$300"
            orientation="right"
            className="col-start-11 col-span-1 row-start-3 row-span-1"
          />
          <SpecialSpace
            type="community-chest"
            name="Community Chest"
            className="col-start-11 col-span-1 row-start-4 row-span-1"
          />
          <PropertySpace
            name="Pennsylvania Avenue"
            colorGroup="green"
            price="$320"
            orientation="right"
            className="col-start-11 col-span-1 row-start-5 row-span-1"
          />
          <SpecialSpace
            type="railroad"
            name="Short Line"
            price="$200"
            className="col-start-11 col-span-1 row-start-6 row-span-1"
          />
          <SpecialSpace
            type="chance"
            name="Chance"
            className="col-start-11 col-span-1 row-start-7 row-span-1"
          />
          <PropertySpace
            name="Park Place"
            colorGroup="blue"
            price="$350"
            orientation="right"
            className="col-start-11 col-span-1 row-start-8 row-span-1"
          />
          <SpecialSpace
            type="tax"
            name="Luxury Tax"
            price="Pay $100"
            className="col-start-11 col-span-1 row-start-9 row-span-1"
          />
          <PropertySpace
            name="Boardwalk"
            colorGroup="blue"
            price="$400"
            orientation="right"
            className="col-start-11 col-span-1 row-start-10 row-span-1"
          />
        </div>
      )}
    </div>
  );
};

export default MonopolyBoard;
