import React from 'react';
import { useContext } from 'react';

// import components
import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';

// import context
import { HouseContext } from './HouseContext';

// import icons
import { RiSearch2Line } from 'react-icons/ri';

const Search = () => {
  const { houses } = useContext(HouseContext);
  console.log(houses);
  
  return (
    <div>
      <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between
      gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-md bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
          <CountryDropdown />
          <PropertyDropdown />
          <PriceRangeDropdown />
          <button className='bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-xl flex justify-center items-center '>
            <RiSearch2Line />
          </button>
      </div>
    </div>
  )
};

export default Search;
