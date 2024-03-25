import React from 'react';
import './index.css';
import Phone from '../../assets/phone.png'
import Instagram from '../../assets/instagram.png'
import Youtube from '../../assets/youtube.png'
import Telegram from '../../assets/telegram.png'
import Email from '../../assets/email.png'
import { Stack, Typography } from '@mui/material';

const typographyStyles = {
  title: {
    fontFamily: 'Poppins',
    color: '#790B0A',
    fontSize: '16px',
    fontWeight: '500',
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontWeight: '400',
  }
};

function Footer() {
  const column1 = [
    'Electric',
    'LCGC',
    'Offroad',
    'SUV',
  ];
  const column2 = [
    'Hatchback',
    'MPV',
    'Sedan',
    'Truck'
  ];
  return (
    <Stack direction={{ xs: 'column', md: 'row' }}>
      <Stack width="41%" sx={{ p: 3 }} spacing={3}>
        <Typography {...typographyStyles.title}>About Us</Typography>
        <Typography textAlign="justify" {...typographyStyles.text}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </Typography>
      </Stack>
      <Stack width="17%" sx={{ p: 3 }}>
        <Typography {...typographyStyles.title}>Product</Typography>
        <Stack direction="row">
          <ul className="column">
            {column1.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <ul className="column">
            {column2.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Stack>
      </Stack>
      <Stack width="42%" sx={{ p: 3 }} spacing={1}>
        <Typography {...typographyStyles.title}>Address</Typography>
        <Typography {...typographyStyles.text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</Typography>
        <Typography {...typographyStyles.title}>Contact Us</Typography>
        <Stack direction="row" spacing={2}>
          <img src={Phone} alt="Phone" />
          <img src={Instagram} alt="Phone" />
          <img src={Youtube} alt="Phone" />
          <img src={Telegram} alt="Phone" />
          <img src={Email} alt="Phone" />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Footer;
