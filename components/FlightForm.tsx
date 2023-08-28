'use client'
import React, { useState } from 'react';
// import { Box, Typography } from '@mui/material';
import Flights from './Flights';
import Hotels from './Hotels';
import Cars from './Cars';
import Insurance from './Insurance';
import Travel from './Travel';
import Visa from './Visa';
import Button from './shared/Button'


// import { Flight, DriveEta as InsuranceIcon, FlightTakeoff } from '@mui/icons-material';
// import { BeachAccess } from '@mui/icons-material';
// import { Payment } from '@mui/icons-material';
// import { DirectionsCar } from '@mui/icons-material';
// import { Hotel } from '@mui/icons-material';
// import { LocalHospital } from '@mui/icons-material';

import Link from 'next/link';
import Image from 'next/image';
import Video from './Video';
// import ReactPlayer from 'react-player'
const FlightForm = () => {
  // dashboard state management
  const [showFlights, setShowFlights] = useState(true);
  const [showHotels, setShowHotels] = useState(false);
  const [showCars, setShowCars] = useState(false);
  const [showInsurance, setShowInsurance] = useState(false);
  const [showTravel, setShowTravel] = useState(false);
  const [showVisa, setShowVisa] = useState(false);
  const[listingpath, setListingpath] = useState('');



  const handleClickFlights = () => {
    setListingpath('/flightslisting')
    setShowFlights(true);
    setShowHotels(false);
    setShowCars(false);
    setShowInsurance(false);
    setShowTravel(false);
    setShowVisa(false);
  };

  const handleClickHotels = () => {
    setListingpath('/hotelslisting')
    setShowFlights(false);
    setShowHotels(true);
    setShowCars(false);
    setShowInsurance(false);
    setShowTravel(false);
    setShowVisa(false);
  };

  const handleClickCars = () => {
    setListingpath('/carslisting')
    setShowFlights(false);
    setShowHotels(false);
    setShowCars(true);
    setShowInsurance(false);
    setShowTravel(false);
    setShowVisa(false);
  };

  const handleClickInsurance = () => {
    setListingpath('/insurancelisting')
    setShowFlights(false);
    setShowHotels(false);
    setShowCars(false);
    setShowInsurance(true);
    setShowTravel(false);
    setShowVisa(false);
  };

  const handleClickTravel = () => {
    setListingpath('/travellisting')
    setShowFlights(false);
    setShowHotels(false);
    setShowCars(false);
    setShowInsurance(false);
    setShowTravel(true);
    setShowVisa(false);
  };

  const handleClickVisa = () => {
    setListingpath('/visalisting')
    setShowFlights(false);
    setShowHotels(false);
    setShowCars(false);
    setShowInsurance(false);
    setShowTravel(false);
    setShowVisa(true);
  };

  
  return (
    <div>
    <Video />
    


    <div  className='border border-gray-300 rounded-lg p-2   shadow-2xl shadow-zinc-950  bg-white    z-10'>
    



      <div   className="flex p-1 justify-center  "  >
      
      <button
  className={`mr-5 font-bold text-lg ${
    showFlights ? 'text-teal-700 underline' : ''
  } hover:text-teal-700 hover:underline`}
  onClick={handleClickFlights}
>
  {/* <FlightTakeoff /> */}
  Flights
</button>
<button
  className={`mr-5 font-bold text-lg ${
    showHotels ? 'text-teal-700 underline' : ''
  } hover:text-teal-700 hover:underline`}
  onClick={handleClickHotels}
>
  {/* <Hotel /> */}
  Hotels
</button>
<button
  className={`mr-5 font-bold text-lg ${
    showCars ? 'text-teal-700 underline' : ''
  } hover:text-teal-700 hover:underline`}
  onClick={handleClickCars}
>
  {/* <DirectionsCar /> */}
  Cars
</button>
<button
  className={`mr-5 font-bold text-lg ${
    showInsurance ? 'text-teal-700 underline' : ''
  } hover:text-teal-700 hover:underline`}
  onClick={handleClickInsurance}
>
  {/* <LocalHospital /> */}
  Insurance
</button>
<button
  className={`mr-5 font-bold text-lg ${
    showTravel ? 'text-teal-700 underline' : ''
  } hover:text-teal-700 hover:underline`}
  onClick={handleClickTravel}
>
  {/* <BeachAccess /> */}
  Travel
</button>
<button
  className={`mr-5 font-bold text-lg${
    showVisa ? 'text-teal-700 underline' : ''
  } hover:text-teal-700 hover:underline`}
  onClick={handleClickVisa}
>
  {/* <Payment /> */}
  Visa
</button>


      </div> 
     
      <div className="border border-solid border-gray-300 h-0"></div>
  <div>
    
      {showFlights && <Flights />}
      {showHotels && <Hotels />}
      {showCars && <Cars />}
      {showInsurance && <Insurance />}
      {showTravel && <Travel />}
      {showVisa && <Visa />}
      {
        
      }
      {/* <div className="flex justify-center ">
  
        <Link href='/flightslisting'>
        <button type="submit"className='bg-teal-700 text-white px-7 py-4 rounded-md shadow-lg text-lg font-medium hover:shadow-lg hover:scale-105 duration-300 w-40' >Book now</button>
        </Link>
          
    </div> */}
  </div>
     
    </div>
    </div>

  );
};

export default FlightForm;
