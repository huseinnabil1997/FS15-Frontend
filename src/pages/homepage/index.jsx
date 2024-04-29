import Footer from '../../components/Footer';
import './homepage.css';
import { Stack, Typography } from '@mui/material';
import backgroundImage from '../../assets/driving_lessons.png'
import personCarImage from '../../assets/person_car.png'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import useAxios from '../hooks/useAxios';

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

  const { data: courses } = useAxios({ method: 'get', endpoint: '/Course/GetAll' });

  const { data: categories } = useAxios({ method: 'get', endpoint: '/CarCategory/GetAll' });

  const formatCurrency = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

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
          {lessonData?.map((data, index) => (
            <Stack
              key={index}
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
          {courses?.map((data) => (
            <Link key={courses.course_id} to={`/detail-class?course_id=${data.course_id}`}>
              <Stack sx={{ width: '350px', height: '400px', my: '10px' }}>
                <img src={data.image_url} />
                <Stack sx={{ height: '100%' }} display="flex" direction="column" justifyContent="space-between" p="15px">
                  <Stack>
                    <Typography
                      sx={{ fontFamily: 'Montserrat', fontWeight: 400, fontSize: '16px', color: '#828282' }}
                    >
                      {data.category_name}
                    </Typography>
                    <Typography
                      sx={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: '18px', color: 'black' }}
                    >
                      {data.course_name}
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{ color: '#790B0A', fontFamily: 'Montserrat', fontWeight: 600, fontSize: '20px' }}
                  >
                    IDR {formatCurrency(data.price)}
                  </Typography>
                </Stack>
              </Stack>
            </Link>
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
          {categories?.map((data, index) => (
            <Stack key={index} sx={{ display: 'flex', justifyContent: 'center', width: '200px', height: '200px', my: '10px', alignItems: 'center' }}>
              <Link to={`/menu-class?name=${data.category_name}&category_id=${data.category_id}`}>
                <img src={data.image_url} alt={data.category_name} />
                <Stack p="10px">
                  <Typography
                    sx={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: '18px', color: 'black' }}
                  >
                    {data.category_name}
                  </Typography>
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
