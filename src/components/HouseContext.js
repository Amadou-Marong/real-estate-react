import React, {useState, useEffect, createContext} from 'react';

// import data
import {houseData, housesData} from '../data';

// create context
export const HouseContext = createContext();

const HouseContextProvider = ({children}) => {
  const [houses, setHouses] = useState([housesData]);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);

  return (
    <HouseContext.Provider value={{
      houses,
      country,
      setCountry,
      countries,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      loading,
    }}>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
