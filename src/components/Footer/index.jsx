import React from 'react';
import './index.css';
import Phone from '../../assets/phone.png'
import Instagram from '../../assets/instagram.png'
import Youtube from '../../assets/youtube.png'
import Telegram from '../../assets/telegram.png'
import Email from '../../assets/email.png'

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
    <footer className='footer'>
      <div className='aboutUsContainer'>
        <h3>About Us</h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
      </div>
      <div className='productContainer'>
        <h3>Product</h3>
        <div style={{ display: 'flex', marginTop: -20 }}>
          <ul className="column">
            {column1.map((item, index) => (
              <li style={{ margin: 5 }} key={index}>{item}</li>
            ))}
          </ul>
          <ul className="column">
            {column2.map((item, index) => (
              <li style={{ margin: 5 }} key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className='addresContactContainer'>
        <div className='address'>
          <h3>Address</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
        </div>
        <div className='contactUs' >
          <h3>Contact Us</h3>
          <div style={{ display: 'flex' }}>
            <img src={Phone} alt="Phone" />
            <img src={Instagram} alt="Phone" />
            <img src={Youtube} alt="Phone" />
            <img src={Telegram} alt="Phone" />
            <img src={Email} alt="Phone" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
