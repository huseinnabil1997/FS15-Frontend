import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import KijangInova from '../../assets/kijang_inova.png'
import HondaBrio from '../../assets/honda_brio.png'
import HyundaiPalisade from '../../assets/hyundai_palisade.png'
import MitsubishiPajero from '../../assets/mitsubishi_pajero.png'
import DumpTruck from '../../assets/dump_truck.png'
import HondaCivic from '../../assets/honda_civic.png'
import Benefit from '../../assets/benefit.png'
import './homepage.css';
import { useLocation } from 'react-router-dom';
import Electric from '../../assets/electric.png'
import Hatchback from '../../assets/hatchback.png'
import Lcgc from '../../assets/lcgc.png'
import Mpv from '../../assets/mpv.png'
import Offroad from '../../assets/offroad.png'
import Sedan from '../../assets/sedan.png'
import Suv from '../../assets/suv.png'
import Truck from '../../assets/truck.png'
import { Stack, Typography } from '@mui/material';

const Homepage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const isHomepage = searchParams.get('isHomepage');
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
      category: 'LCGC',
      name: 'Course LCGC Honda Brio',
      price: 'IDR 500.000',
      img: HondaBrio,
    },
    {
      id: 3,
      category: 'SUV',
      name: 'Hyundai Palisade 2021',
      price: 'IDR 800.000',
      img: HyundaiPalisade,
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
      category: 'Truck',
      name: 'Dump Truck for Mining Constructor',
      price: 'IDR 1.200.000',
      img: DumpTruck,
    },
    {
      id: 6,
      category: 'Sedan',
      name: 'Sedan Honda Civic',
      price: 'IDR 400.000',
      img: HondaCivic,
    },
  ];
  return (
    <>
      <Header homePage={isHomepage} />
      <div className="backgroundContainer">
        <div className="textOverlay">
          <div className='lessonTitle'>We provide driving lessons for various types of cars</div>
          <div className='lessonSubtitle'>
            Professional staff who are ready to help you to become a much-needed reliable driver
          </div>
          <div className='dataLessonContainer'>
            <div className='boxLesson'>
              <h1>50+</h1>
              <p>A class ready to make you a reliable driver</p>
            </div>
            <div className='boxLesson'>
              <h1>20+</h1>
              <p>Professional workforce with great experience</p>
            </div>
            <div className='boxLesson'>
              <h1>10+</h1>
              <p>Cooperate with driver service partners</p>
            </div>
          </div>
        </div>
      </div>
      <div className="joinCourseBox">
        <h1>Join us for the course</h1>
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
        <div className="benefitTextContainer">
          <h1>Gets your best benefit</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.
          </p>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
        <div className="benefitImageContainer">
          <img style={{ zIndex: 2 }} src={Benefit} alt="Gets your best benefit" />
          <div style={{ zIndex: -1 }} className='boxImageTop' />
          <div style={{ zIndex: -1 }} className='boxImageBottom' />
        </div>
      </div>
      <Stack spacing={2} className="moreCarType">
        <Typography variant="h1">Join us for the course</Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} useFlexGap flexWrap="wrap" padding={20}>
          {miniBoxes.map(({ img, category, name, price }) => (
            <Stack key={img} className="boxList" alignItems="center">
              <img src={img} alt={name} />
              <Typography variant="h2">{name}</Typography>
              <Typography variant="body1" className='carPrice'>{price}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Stack top={{ xs: '3900px', md: '3400px' }} className='footerHomePage'>
        <Footer />
      </Stack>
    </>
  );
};

export default Homepage;
