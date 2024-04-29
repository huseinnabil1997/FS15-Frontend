import { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import './detailclass.css';
import { Box, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import useAxios from '../hooks/useAxios';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { useStore } from '../../store';

const DetailClass = () => {
  const { userId } = useStore();
  console.log('userId', userId)
  const [selected, setSelected] = useState(null);
  const [otherCourse, setOtherCourse] = useState([])
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const course_id = searchParams.get('course_id');
  const { data: courseData } = useAxios({ method: 'get', endpoint: '/Course/GetCourseById?course_id=' + course_id });
  const fetchOtherCourse = async (id) => {
    try {
      const res = await axiosInstance.get('/Course/GetAllByCategoryId?categoryId=' + id);
      console.log('other course', res)
      setOtherCourse(res.data)
    } catch (error) {
      console.log('error get other courses');
    }
  }
  useEffect(() => {
    fetchOtherCourse(courseData?.category_id)
  }, [courseData])

  const schedules = [
    { value: 'Monday, 25 July 2022' },
    { value: 'Tuesday, 26 July 2022' },
    { value: 'Wednesday, 27 July 2022' },
    { value: 'Thursday, 28 July 2022' },
    { value: 'Friday, 29 July 2022' },
    { value: 'Saturday, 30 July 2022' },
  ]

  const formatCurrency = (amount) => {
    return amount?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  return (
    <>

      <div className="backgroundDetailClassContainer">
        <div className="flex mt-8 w-100" style={{ display: 'flex' }}>
          <div className="w-1/2 pr-4" style={{ width: 'fit-content' }}>
            <img src={courseData?.image_url} alt="Hyundai Palisade 2021 in red color, front and side view" className="w-full h-auto" />
          </div>
          <div className="w-1/2 pl-4" style={{ width: 'fit-content', marginLeft: '100px', fontSize: '25px' }}>
            <div className="text-sm text-gray-500">{courseData?.category_name}</div>
            <div className="text-3xl font-bold mt-1" style={{ color: 'green' }}>{courseData?.course_name}</div>
            <div className="text-2xl text-red-600 font-bold mt-2" style={{ color: 'red' }}>IDR {formatCurrency(courseData?.price)}</div>
            <div className="mt-4" style={{ margin: '30px 0px', }}>
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
                    {schedules.map((el, index) => (
                      <MenuItem key={index} value={el.value}>{el.value}</MenuItem>
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
      <div className="joinCourseBox" style={{ top: '900px' }}>
        <h1>Another favorite course</h1>
        <div className='boxListContainer'>
          {otherCourse?.map(({ image_url, category_name, course_id, course_name, price }) => (
            <div className="boxList" key={course_id}>
              <img src={image_url} alt={course_name} />
              <p className='carCategory'>{category_name}</p>
              <h2>{course_name}</h2>
              <p className='carPrice'>{price}</p>
            </div>

          ))}

        </div>

      </div>
      <div className='footerDetailClass'>
        <Footer />
      </div>

    </>
  );
};

export default DetailClass;