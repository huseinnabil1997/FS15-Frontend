import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import KijangInova from '../../assets/kijang_inova.png';
import HondaBrio from '../../assets/honda_brio.png';
import HyundaiPalisade from '../../assets/hyundai_palisade.png';
import CourseSuzukiXL7 from '../../assets/corola_suzuki.png';
import MitsubishiPajero from '../../assets/mitsubishi_pajero.png';
import PremiumMazda from '../../assets/PremiumMazdaCX5.png';
import ToyotaFortuner from '../../assets/ToyotaFortuner.png';
import DumpTruck from '../../assets/dump_truck.png';
import HondaCivic from '../../assets/honda_civic.png';
import Benefit from '../../assets/benefit.png';
import Electric from '../../assets/electric.png';
import Hatchback from '../../assets/hatchback.png';
import Lcgc from '../../assets/lcgc.png';
import Mpv from '../../assets/mpv.png';
import Offroad from '../../assets/offroad.png';
import Sedan from '../../assets/sedan.png';
import Suv from '../../assets/suv.png';
import Truck from '../../assets/truck.png';
import './detailclass.css';
import { Box, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';


const DetailClass = () => {
  const [selected, setSelected] = useState(null)
 
  const miniBoxes = [
    {
      id: 1,
      name: 'Electric',
      img: Electric,
    },
    {
      id: 2,
      name: 'Hatchback',
      img: Hatchback,
    },
    {
      id: 3,
      name: 'LCGC',
      img: Lcgc,
    },
    {
      id: 4,
      name: 'MPV',
      img: Mpv,
    },
    {
      id: 5,
      name: 'Offroad',
      img: Offroad,
    },
    {
      id: 6,
      name: 'Sedan',
      img: Sedan,
    },
    {
      id: 7,
      name: 'SUV',
      img: Suv,
    },
    {
      id: 8,
      name: 'Truck',
      img: Truck,
    },
  ];
  const boxes = [
    {
      id: 1,
      category: 'SUV',
      name: 'Course SUV Kijang Innova',
      price: 'IDR 700.000',
      img: KijangInova,
    },
    {
      id: 2,
      category: 'SUV',
      name: 'Course Suzuki XL7',
      price: 'IDR 600.000',
      img: CourseSuzukiXL7,
    },
    // {
    //   id: 3,
    //   category: 'SUV',
    //   name: 'Course Suzuki XL7',
    //   price: 'IDR 600.000',
    //   img: CourseSuzukiXL7,
    // },
    {
      id: 4,
      category: 'SUV',
      name: 'Course Mitsubishi Pajero',
      price: 'IDR 800.000',
      img: MitsubishiPajero,
    },
    {
      id: 5,
      category: 'SUV',
      name: 'SUV Toyota Fortuner',
      price: 'IDR 8500.000',
      img: ToyotaFortuner,
    },
    {
      id: 6,
      category: 'SUV',
      name: 'Premium Mazda CX-5 Course',
      price: 'IDR 1.000.000',
      img: PremiumMazda,
    },
    
    
  ];
  const schedules =  [
    { value: 'Monday, 25 July 2022' },
    { value: 'Tuesday, 26 July 2022' },
    { value: 'Wednesday, 27 July 2022' },
    { value: 'Thursday, 28 July 2022' },
    { value: 'Friday, 29 July 2022' },
    { value: 'Saturday, 30 July 2022' },
   ]
  return (
    <>
  
      <div className="backgroundDetailClassContainer">
        <div className="flex mt-8 w-100" style={{ display: 'flex' }}>
          <div className="w-1/2 pr-4" style={{ width: 'fit-content' }}>
            <img src="https://placehold.co/600x400" alt="Hyundai Palisade 2021 in red color, front and side view" className="w-full h-auto" />
          </div>
          <div className="w-1/2 pl-4" style={{ width: 'fit-content', marginLeft: '100px', fontSize: '25px' }}>
            <div className="text-sm text-gray-500">SUV</div>
            <div className="text-3xl font-bold mt-1" style={{ color: 'green' }}>Hyundai Palisade 2021</div>
            <div className="text-2xl text-red-600 font-bold mt-2" style={{ color: 'red' }}>IDR 800.000</div>
            <div className="mt-4" style={{ margin: '30px 0px', }}>
              {/* <select className="border border-gray-300 rounded px-4 py-2 w-full" style={{width: '150%', height: '40px'}}>
                <option>Select Schedule</option>
                <option>Monday</option>
                <option>Tuesday</option>
              </select> */}
              <Box sx={{ minWidth: 300 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select Schedule</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selected}
                    label="Schedule"
                    onChange={(e) => setSelected(e.target.value)}
                  >
                    {schedules.map((el)=>(
                    <MenuItem value={el.value}>{el.value}</MenuItem>
                    ))}
                    
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="flex space-x-4 mt-4">
              <button className="border border-gray-300 text-gray-600 rounded px-4 py-2 w-full" style={{ marginRight: '10px' }}>Add to Cart</button>
              <button className="bg-red-600 text-white rounded px-4 py-2 w-full" style={{ marginLeft: '10px' }}>Buy Now</button>
            </div>
          </div>
        </div>
        <Stack sx={{ width: "100vw" }}>
          <h2 className="text-2xl font-bold">Description</h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Stack>
      </div>
      {/* <div className="SUVContainer"> */}
      {/* <div className="benefitTextContainer">
          <h1>SUV</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div> */}
      {/* </div> */}
      <div className="joinCourseBox" style={{ top: '900px' }}>
        <h1>Another favorite course</h1>
        <div className='boxListContainer'>
          {boxes.map(({ img, category, name, price }) => (
            <div className="boxList" key={img}>
              <img src={img} alt={name} />
              <p className='carCategory'>{category}</p>
              <h2>{name}</h2>
              <p className='carPrice'>{price}</p>
            </div>

          ))}

        </div>

      </div>
      {/* <div className="benefitContainer"> */}
      {/* Benefit content */}
      {/* </div> */}
      {/* <div className="moreCarType"> */}
      {/* <h1>Join us for the course</h1> */}
      {/* <div className='boxListContainer'>
          {miniBoxes.map(({ img, name, price }) => (
            <div className="boxList" key={img}>
              <img src={img} alt={name} />
              <h2>{name}</h2>
              <p className='carPrice'>{price}</p>
            </div>
          ))}
        </div> */}
      {/* </div> */}
      <div className='footerDetailClass'>
        <Footer />
      </div>

    </>
  );
};

export default DetailClass;