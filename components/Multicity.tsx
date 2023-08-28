
import React, { useState, useRef, useEffect } from 'react';


import { Calendar, DateRange } from "react-date-range";

import { AutoComplete, Input } from 'antd';

import { useRouter } from 'next/router';
import { SearchOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space,Button } from 'antd';
const Multicity = () => {
  const airportCities = [
    { value: 'New York ', code: 'NYC', airport:'New York International ' },
    { value: 'Los Angeles', code: 'LAX', airport:'Los Angeles International '  },
    { value: 'London', code: 'LON', airport:'London International '  },
    { value: 'Paris', code: 'PAR' , airport:'Paris International ' },
    { value: 'Tokyo', code: 'TYO', airport:'Tokyo International '  },
    // Add more airport cities and codes as needed
  ];
;
  const today = new Date();

// const defaultStartDateArray = new Array(5).fill(today);

//   const [startDate, setStartDate] = useState<any[]>(defaultStartDateArray);
//  // Create an array of the same length as startDate filled with "today date"
// const updatedStartDate = Array.from({ length: startDate.length }, () => today);

// // Call setStartDate to update the state with the new array
// setStartDate(updatedStartDate);


  const [flights, setFlights] = useState<any>([
    { id: 0, departureCity: '', arrivalCity: '', departureDate: today  , isDatePickerOpen: false, minDate: today },
    { id: 1, departureCity: '', arrivalCity: '', departureDate: today , isDatePickerOpen: false, minDate: today }
  ]);
  const [addFlightClickCount, setAddFlightClickCount] = useState(0);



  const [selected, setSelected] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  
  const router=useRouter()
  const navigateToFlightListing = () => {
    // Construct the data object
    const searchData = flights.map((flight: any) => ({
      departureCity: flight.departureCity,
      arrivalCity: flight.arrivalCity,
      departureDate: flight.departureDate ? flight.departureDate.toLocaleDateString() : '',
      adults: adults?.toLocaleString(),
      children: children?.toLocaleString(),
      infant:  infant?.toLocaleString(),
      travelers:   travelers?.toLocaleString()
    }));
  
    // Construct the query string
    const queryString = new URLSearchParams({ flights: JSON.stringify(searchData) }).toString();
  
    // Navigate to the flight listing page along with the query string
    router.push(`/flightslisting?${queryString}`);
  };


  const handleClick = (index:number) => {
    const updatedFlights = flights.map((flight:any) => {
      if (flight?.id === index) {
        
        console.log("...flight,isDatePickerOpen",{...flight, isDatePickerOpen:!flight.isDatePickerOpen})

        return {...flight,isDatePickerOpen:!flight.isDatePickerOpen };
      
      }
      return flight;
  
    });
    setFlights(updatedFlights);

  };

 
  const handleDepartureCityChange = (value:any, index:number) => {
    console.log('index of parameter',index)
    const updatedFlights = flights.map((flight:any) => {
      console.log('index of flight.id',flight?.id)
      if (flight?.id === index) {
        console.log('in departure city')
        // flight.departureCity= value
        console.log("...flight, departureCity:value",{...flight,  departureCity:value})
        return {...flight, departureCity:value};
      }
    
      return flight;
     
    });
    console.log("updatedFlights:", updatedFlights); // Log the updated flights array
    setFlights(updatedFlights);
  };

  const handleArrivalCityChange = (value:any, index:number) => {
    const updatedFlights = flights.map((flight:any) => {
      if (flight?.id === index) {
        console.log("...flight, arrivalCityCity:value",{...flight, arrivalCity:value})
        return {...flight, arrivalCity:value};
      }
      return flight;
    
    });
    setFlights(updatedFlights);
  };

  

  const handleSelect = (item: any, index:number) => {

 
    

    const updatedFlights = flights.map((flight:any) => {
      if (flight?.id === index) {
       
 
      // flight.selectionRange.startDate=startDate[index]
        console.log("...flight, date:value",{
          ...flight,
         departureDate:item
        })
        return {
          ...flight,
          departureDate:item
        };
      }
      return flight;
    
    });
    setFlights(updatedFlights);

  };

  
  // const handleSelect = (item:any, index:number) => {
  //   const selectedDate = item;

  //   const updatedFlights = [...flights];
  //   updatedFlights[index] = {
  //     ...updatedFlights[index],
  //     departureDate: selectedDate,
  //     minDate: selectedDate
  //   };

  //   // Update minDate for the next flight
  //   if (index < updatedFlights.length -1) {
  //     updatedFlights[index + 1] = {
  //       ...updatedFlights[index + 1],
  //       minDate: selectedDate
  //     };
  //   }

  //   setFlights(updatedFlights);
  // };


 
 

 

  const handleAddFlight = (index:number) => {
   
   
      setFlights([...flights,  { id: index, departureCity: '', arrivalCity: '', departureDate: today  , isDatePickerOpen: false, minDate: today  },]);
      setAddFlightClickCount(addFlightClickCount + 1);
    
  
  };

  const handleRemoveFlight = (index:number) => {
    const updatedFlights = flights.filter((_:any, i:any) => i !== index);
    setFlights(updatedFlights);
    setAddFlightClickCount(addFlightClickCount - 1);
  };

  const handleFlightChange = (event:any, index:number, field:any) => {
    const updatedFlights:any = [...flights];
    updatedFlights[index][field] = event.target.value;
    setFlights(updatedFlights);
  };


 


 


  // const handleDepartureDateChange = (date:any, index:number) => {
  //   const updatedFlights = flights.map((flight:any) => {
  //     if (flight?.id === index) {
  //       console.log("...flight, departureDate:value",{...flight, departureDate:date})
  //       return {...flight, departureDate:date};
       
  //     }
  //     return flight;
      
  //   });
  //   setFlights(updatedFlights);
  // };

  const options = [
    { value: 'Burns Bay Road' },
    { value: 'Downing Street' },
    { value: 'Wall Street' },
  ];

  const formatDate = (date:any) => {
    const options:any = { day: "numeric", month: "long" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };


  // travelers

  
const [open, setOpen] = useState(false);

const [adults, setAdults] = useState(0);
const [children, setChildren] = useState(0);
const [infant, setInfant] = useState(0);
const [travelers, setTravelers] = useState(0);
const handleIncreaseAdults = () => {
    if (adults < 9) {
        setAdults(adults+ 1);
        setTravelers(travelers + 1);
    }
};

const handleDecreaseAdults = () => {
    if (adults > 0) {
        setAdults(adults - 1);
        setTravelers(travelers - 1);
    }
};
const handleIncreaseChildren = () => {
    if (children < 9) {
        setChildren(children + 1);
        setTravelers(travelers + 1);
    }
};

const handleDecreaseChildren = () => {
    if (children > 0) {
        setChildren(children - 1);
        setTravelers(travelers - 1);
    }
};
const handleIncreaseInfant = () => {
    if (infant < 9) {
        setInfant(infant + 1);
        setTravelers(travelers + 1);
    }
};
const handleDecreaseInfant = () => {
    if (infant > 0) {
        setInfant(infant - 1);
        setTravelers(travelers - 1);
    }
};




const handleMenuClick: MenuProps['onClick'] = (e) => {
    if (e.key === '4') {
        setOpen(false);
    }
};

const handleOpenChange = (flag: boolean) => {
    setOpen(flag);
};

const items: MenuProps['items'] = [
    {
        label: (
            <div style={{ display: 'flex', alignItems: 'center',marginRight:'15px' }}>
                <div style={{ flex:1}}>  <h1 >Adults</h1>  </div>
                <div>
              

                 
                <Button shape='circle' onClick={handleDecreaseAdults} style={{borderColor: "gray" }}>
                    -
                </Button>
                <span style={{ margin: '0 8px', fontWeight: '600' }}> {adults}</span>
                <Button shape='circle' onClick={handleIncreaseAdults} style={{borderColor: "gray" }}>
                    +
                </Button>
            </div>
            </div>),
        key: '1',
    },
    {
        label: (
    
                <div style={{ display: 'flex', alignItems: 'center' ,marginRight:'15px' }}>
                <div style={{ flex:1}}>  <h1>Children</h1>  </div>
                <div>


                <Button shape='circle' onClick={handleDecreaseChildren} style={{borderColor: "gray" }}>
                    -
                </Button >
                <span style={{ margin: '0 8px', fontWeight: '600' }}> {children}</span>
                <Button shape='circle' onClick={handleIncreaseChildren} style={{borderColor: "gray" }}>
                    +
                </Button>
            </div>
            </div>),
        key: '2',
    },
    {
        label: (
            <div style={{ display: 'flex', alignItems: 'center', marginRight:'15px' }}>
                <div style={{ flex:1}}>  <h1>Infant</h1>  </div>
                <div >
                <Button shape='circle' onClick={handleDecreaseInfant} style={{borderColor: "gray" }}>
                    -
                </Button >
                <span style={{ margin: '0 8px', fontWeight: '600' }}> {infant}</span>
                <Button shape='circle' onClick={handleIncreaseInfant} style={{borderColor: "gray" }}>
                    +
                </Button>
            </div>
            </div>),
        key: '3',
    },
    {
        label: (
            <div>
                <Button type="primary" block icon={<SearchOutlined />} className='bg-teal-700'>
                    Search
                </Button>
            </div>
        ),
        key: '4',
    },
   
];
  return (
    <div className=''>
      <div className='relative  p-1'>
      {/*  travelers dropdown */}
 
 
      {/* <MyDropdown/> */}
      <Dropdown overlayStyle={{ minWidth: '350px',height:'50%' } } 
            menu={{
                items,
                onClick: handleMenuClick,
            }}
            onOpenChange={handleOpenChange}
            open={open}
            placement="bottomLeft"  // Add this line to set the placement to "bottomLeft"
            getPopupContainer={(trigger:any) => trigger.parentNode} // Add this line to set the popup container
        >
            <a onClick={(e) => e.preventDefault()}>
                <Space className="text-white bg-teal-700 hover:bg-teal-900 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 mb-2" >
                    {`${travelers}Travelers`}
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
        
         
        
            
      </div>
       
     
   
        
        
        {flights.map((flight:any, index:number) => (
      
          <div className='mb-2' >
            
            <div className="flex flex-row custom-screen  mr-3 space-y-2 space-x-2  w-full " >
              <button className="pb-1 md:pr-1 font-bold left-0 min-w-[30px] text-start">{`F ${index + 1}`}</button>
              <div className="max-h-[50px]    ">
          <AutoComplete
          className='min-w-[300px] mb-2'
            options={airportCities.map((city) => ({
              value: `${city.value} (${city.code}) `,
              code: city.code,
              label: (
                <div className="flex mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-plane mr-2"
                  >
                    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                  </svg>
                  <p className=' font-semibold'>
                  {`${city.value} (${city.code})`}
                  <br />
                  <span className='text-[12px]'>
                  {`${city.airport}`}
                 </span>
                  </p>
             
                 
                </div>
              ),
            }))}
            filterOption={(inputValue, option) =>
              option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
            onSelect={(value, option) => {
              console.log(`Selected City: ${value}`);
              console.log(`Selected City Code: ${option.code}`);
              
              console.log("printing departure city in autocomplete",flight?.departureCity)
              handleDepartureCityChange(value,index);
            }}
          >
            <Input style={{ height: 50 }} placeholder="Departure City" />
          </AutoComplete>
        </div>

             
        <div className="max-h-[50px]  ">
          <AutoComplete
             className='min-w-[300px]  mb-2'
            options={airportCities.map((city) => ({
              value: `${city.value} (${city.code})`,
              code: city.code,
              label: (
                <div className="flex mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-plane mr-2"
                  >
                    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                  </svg>
                  <p className=' font-semibold'>
                  {`${city.value} (${city.code})`}
                  <br />
                  <span className='text-[12px]'>
                  {`${city.airport}`}
                 </span>
                  </p>
             
                </div>
              ),
            }))}
            filterOption={(inputValue, option) =>
              option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
            onSelect={(value, option) => {
              console.log(`Selected City: ${value}`);
              console.log(`Selected City Code: ${option.code}`);
              handleArrivalCityChange(value,index);
            }}
          >
            <Input style={{ height: 50 }} placeholder="Arrival City" />
          </AutoComplete>
        </div>
        <div className="max-h-[50px]  relative">
          <AutoComplete
             className='min-w-[300px] '
           value={
             flight?.departureDate
              ? `  ${formatDate(flight.departureDate)}`
              : ` `
            }
            onClick={() => handleClick(index)}
            // onSelect={(date) => handleDepartureDateChange(date, index)}
          >
            <Input
              style={{ height: 50 }}
              placeholder="Departure Date"
              suffix={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-calendar-days"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                  <path d="M8 14h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 18h.01" />
                  <path d="M12 18h.01" />
                  <path d="M16 18h.01" />
                </svg>
              }
            />
          </AutoComplete>

          {flight?.isDatePickerOpen && (
            <div className=" flex  absolute z-10 top-0  bg-white ">
           
              <Calendar
 onChange={item => handleSelect(item, index)}

  date={flight.departureDate} 
  minDate={flight.minDate}

       />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#e11414"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-x-circle"
                onClick={()=>handleClick(index)}
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m15 9-6 6" />
                <path d="m9 9 6 6" />
              </svg>
            </div>
          )}
        </div>


              {index > 1 && (
                <button
                  type="submit"
                  className="text-red-500 px-1 py-1 mb-1 rounded-xl text-lg font-medium hover: hover:scale-105 duration-300"
                  onClick={() => handleRemoveFlight(index)}
                >
                  Remove
                </button>
              )}
              
            </div>
          </div>
        ))}

        <div className="flex">
        {addFlightClickCount < 3 && (
          <button
            type="submit"
            className="text-teal-700 px-1 py-1 mb-1 rounded-md text-lg font-medium hover: hover:scale-105 duration-300"
            onClick={()=>{handleAddFlight(addFlightClickCount + 2)}}

          >
            + Add flight
          </button>
        )}
        </div>


        <div className='flex-none sm:flex-col w-full'>
        
        </div>
        <div className="flex justify-center ">
  
        <button type="submit"className=' mt-2 bg-teal-700 text-white px-7 py-4 rounded-md shadow-lg text-lg font-medium hover:shadow-lg hover:scale-105 duration-300 w-40' onClick={navigateToFlightListing} >Book now</button>

    
</div>
      </div> 

  );
};

export default Multicity;





