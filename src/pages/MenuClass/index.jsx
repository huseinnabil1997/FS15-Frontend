import Footer from '../../components/Footer';
import './menuclass.css';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import useAxios from '../hooks/useAxios';
import { Stack, Typography } from '@mui/material';

const MenuClass = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category_id = searchParams.get('category_id');
  const name = searchParams.get('name');
  const { data: courses } = useAxios({ method: 'get', endpoint: `/Course/GetAllByCategoryId?categoryId=${category_id}` });
  //   {
  //     id: 1,
  //     category: 'SUV',
  //     name: 'Course SUV Kijang Innova',
  //     price: 'IDR 700.000',
  //     img: KijangInova,
  //   },
  //   {
  //     id: 2,
  //     category: 'SUV',
  //     name: 'Hyundai Palisade 2021',
  //     price: 'IDR 800.000',
  //     img: HyundaiPalisade,
  //   },
  //   {
  //     id: 3,
  //     category: 'SUV',
  //     name: 'Course Suzuki XL7',
  //     price: 'IDR 600.000',
  //     img: CourseSuzukiXL7,
  //   },
  //   {
  //     id: 4,
  //     category: 'SUV',
  //     name: 'Course Mitsubishi Pajero',
  //     price: 'IDR 800.000',
  //     img: MitsubishiPajero,
  //   },
  //   {
  //     id: 5,
  //     category: 'SUV',
  //     name: 'SUV Toyota Fortuner',
  //     price: 'IDR 8500.000',
  //     img: ToyotaFortuner,
  //   },
  //   {
  //     id: 6,
  //     category: 'SUV',
  //     name: 'Premium Mazda CX-5 Course',
  //     price: 'IDR 1.000.000',
  //     img: PremiumMazda,
  //   },
  // ];
  return (
    <>
      {/* <Header confirmSuccess={false} homePage={true} /> */}
      <div className="backgroundMenuClassContainer">
      </div>
      <div className="SUVContainer">
        <div className="benefitTextContainer">
          <h1>{name}</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="joinCourseBox">
        <h1>Another favorite course</h1>
        <div className='boxListContainer'>
          {courses?.map(({ image_url, category_name, course_id, course_name, price }) => (
            <div className="boxList" key={course_id}>
              <img src={image_url} alt={course_name} />
              <p className='carCategory'>{category_name}</p>
              <h2>{course_name}</h2>
              <p className='carPrice'>{price}</p>
            </div>
            
          ))}
          
        </div>
        {courses?.length === 0 && (
          <Stack>
            <Typography>Kursus tidak ditemukan</Typography>
          </Stack>
        )}
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