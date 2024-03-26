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
import Electric from '../../assets/electric.png'
import Hatchback from '../../assets/hatchback.png'
import Lcgc from '../../assets/lcgc.png'
import Mpv from '../../assets/mpv.png'
import Offroad from '../../assets/offroad.png'
import Sedan from '../../assets/sedan.png'
import Suv from '../../assets/suv.png'
import Truck from '../../assets/truck.png'
import { Stack, Typography } from '@mui/material';
import backgroundImage from '../../assets/driving_lessons.png'
import rectangleImage from '../../assets/rectangle.svg'
import personCarImage from '../../assets/person_car.png'
import { Link } from 'react-router-dom/cjs/react-router-dom';

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

const lessonData = [
  {
    title: '50+',
    text: 'A class ready to make you a reliable driver'
  },
  {
    title: '20+',
    text: 'Professional workforce with great experience'
  },
  {
    title: '10+',
    text: 'Professional workforce with great experience'
  },
]

const Homepage = () => {
  return (
    <Stack spacing={10}>
      <Stack
        spacing={5}
        direction="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '100vw',
          height: '496px',
        }}
      >
        <Stack>
          <Typography
            sx={{
              fontFamily: 'Montserrat', fontSize: '32px', fontWeight: 600, color: 'white',
            }}
          >
            We provide driving lessons for various types of cars
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Montserrat', fontSize: '24px', fontWeight: 400, color: 'white',
            }}
          >
            We provide driving lessons for various types of cars
          </Typography>
        </Stack>
        <Stack direction="row">
          {lessonData.map((data) => (
            <Stack
              spacing={3}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '16px',
                width: '324px',
                height: '207px',
              }}
            >
              <Typography
                sx={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: '48px', color: 'white' }}
              >
                {data.title}
              </Typography>
              <Typography
                sx={{ fontFamily: 'Montserrat', fontWeight: 500, fontSize: '16px', color: 'white' }}
              >
                {data.text}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Stack
        spacing={5}
        px="100px"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Typography
          sx={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: '32px', color: '#790B0A' }}
        >
          Join us for the course
        </Typography>
        <Stack direction={{ sm: 'column', md: 'row' }} justifyContent="space-around" useFlexGap flexWrap="wrap">
          {boxes.map((data) => (
            <Stack sx={{ width: '350px', height: '400px', my: '10px' }}>
              <img src={data.img} />
              <Stack sx={{ height: '100%' }} display="flex" direction="column" justifyContent="space-between" p="15px">
                <Stack>
                  <Typography sx={{ fontFamily: 'Montserrat', fontWeight: 400, fontSize: '16px', color: '#828282' }}>{data.category}</Typography>
                  <Typography sx={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: '18px' }}>{data.name}</Typography>
                </Stack>
                <Typography sx={{ color: '#790B0A', fontFamily: 'Montserrat', fontWeight: 600, fontSize: '20px' }}>{data.price}</Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Stack spacing={3}>
        <Stack direction={{ sm: 'column', md: 'row' }} display="flex" justifyContent="space-between" spacing={5}>
          <Stack spacing={2} width="60%" pl="100px" pr="25px">
            <Typography sx={{ color: '#790B0A', fontWeight: 600, fontSize: '40px', fontFamily: 'Montserrat' }}>
              Gets your best benefit
            </Typography>
            <Typography sx={{ fontWeight: 500, fontSize: '16px', fontFamily: 'Montserrat', textAlign: 'justify' }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.
            </Typography>
            <Typography sx={{ fontWeight: 500, fontSize: '16px', fontFamily: 'Montserrat', textAlign: 'justify' }}>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </Typography>
          </Stack>
          <Stack
            sx={{
              backgroundImage: `url(${personCarImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '40%',
            }}
          >
          </Stack>
        </Stack>
      </Stack>
      <Stack
        spacing={5}
        px="100px"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Typography
          sx={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: '32px', color: '#790B0A' }}
        >
          Join us for the course
        </Typography>
        <Stack direction={{ sm: 'column', md: 'row' }} justifyContent="space-around" useFlexGap flexWrap="wrap" px="100px">
          {miniBoxes.map((data) => (
            <Stack sx={{ display: 'flex', justifyContent: 'center', width: '200px', height: '200px', my: '10px', alignItems: 'center' }}>
              <Link to={`/menu-class?name=${data.name}`}>
                <img src={data.img} alt={data.name} />
                <Stack p="10px">
                  <Typography sx={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: '18px' }}>{data.name}</Typography>
                </Stack>
              </Link>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default Homepage;
