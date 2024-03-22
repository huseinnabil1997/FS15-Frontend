import React from 'react';
import { useLocation } from 'react-router-dom';
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
import './menuclass.css';

const MenuClass = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const nameParam = searchParams.get('name');
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
      name: 'Hyundai Palisade 2021',
      price: 'IDR 800.000',
      img: HyundaiPalisade,
    },
    {
      id: 3,
      category: 'SUV',
      name: 'Course Suzuki XL7',
      price: 'IDR 600.000',
      img: CourseSuzukiXL7,
    },
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
  return (
    <>
      <Header confirmSuccess={false} homePage={true} />
      <div className="backgroundMenuClassContainer">
      </div>
      <div className="SUVContainer">
        <div className="benefitTextContainer">
          <h1>{nameParam}</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="joinCourseBox">
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
      <div className="benefitContainer">
        {/* Benefit content */}
      </div>
      <div className="moreCarType">
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
      </div>
      <div className='footerMenuClass'>
        <Footer />
      </div>
      
    </>
  );
};

export default MenuClass;