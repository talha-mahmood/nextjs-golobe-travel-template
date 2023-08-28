import React, { useState } from 'react';
// import { Box } from '@mui/material';
import Oneway from './Oneway';
import Roundtrip from './Roundtrip';
import Multicity from './Multicity';


const Flights = () => {
  const [flightOption, setFlightOption] = useState('oneway');

  const handleSelectOption = (option:any) => {
    setFlightOption(option);
  };

  return (

    <div className='p-2 px-5 ' >
      <div className="flex flex-row">
        <button
          className={`   px-3 py-2 mb-2 rounded-xl border-gray-600  shadow-lg text-lg font-medium hover:shadow-lg hover:scale-105 duration-300  ${
            flightOption === 'oneway' ? 'bg-teal-700 text-white' : ''
          }`}
          onClick={() => handleSelectOption('oneway')}
        >
          One way
        </button>
        <button
          className={` px-3 py-2 mb-2 rounded-xl shadow-lg text-lg font-medium hover:shadow-lg hover:scale-105 duration-300 ${
            flightOption === 'roundtrip' ? 'bg-teal-700 text-white' : ''
          }`}
          onClick={() => handleSelectOption('roundtrip')}
        >
          Round Trip
        </button>
        <button
          className={` px-3 py-2 mb-2 rounded-xl shadow-lg text-lg font-medium hover:shadow-lg hover:scale-105 duration-300 ${
            flightOption === 'multicity' ? 'bg-teal-700 text-white' : ''
          }`}
          onClick={() => handleSelectOption('multicity')}
        >
          Multicity
        </button>
        </div>
        <div>
      {flightOption === 'oneway' && <Oneway />}
      {/* {flightOption === 'oneway' && <Oneway2 />} */}
      {/* {flightOption === 'oneway' && <Oneway3 />} */}
      {/* {flightOption === 'oneway' && <Oneway4 />} */}
      {/* {flightOption === 'oneway' && <Oneway5 />} */}
      {/* {flightOption === 'oneway' && <Oneway6 />} */}

      {flightOption === 'roundtrip' && <Roundtrip />}
      {flightOption === 'multicity' && <Multicity />}
      </div>
    </div>
   
  );
};

export default Flights;
