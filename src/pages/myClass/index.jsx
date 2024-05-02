import { Box, Divider, List, ListItem, Stack, Typography } from '@mui/material';
import Footer from '../../components/Footer';

// https://drive.google.com/thumbnail?id=1lfQf6P0nLZVZgTizBlyWlQt5XhrWFOvp

const items = [
  {
    image_url: 'https://drive.google.com/thumbnail?id=1CAlGdIW_kHVRxtOMHeTXjgUQExlL_RNs',
    category_name: 'SUV',
    course_name: 'Hyundai Palisade 2021',
    schedule: 'Wednesday, 27 July 2022',
    price: 800000
  },
];

const MyClass = () => {
  return (
    <>
      <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100vw', minHeight: '100vh' }}>
        <List sx={{ width: '100%', px: 5 }}>
          {items.map((item, index) => (
            <Stack key={index} sx={{ px: 1 }}>
              <ListItem sx={{ py: 2 }} key={index}>
                <Stack direction="row">
                  <Box
                    component="img"
                    sx={{
                      height: 134,
                      width: 200,
                    }}
                    src={item?.image_url}
                  />
                  <Stack mx={3} spacing={1} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography fontSize="16px" fontWeight={400} color="#828282" fontFamily="Montserrat">{item?.category_name}</Typography>
                    <Typography fontSize="24px" fontWeight={600} color="#333333" fontFamily="Montserrat">{item?.course_name}</Typography>
                    <Typography fontSize="20px" fontWeight={600} color="#790B0A" fontFamily="Montserrat">Schedule : {item?.schedule}</Typography>
                  </Stack>
                </Stack>
              </ListItem>
              <Divider />
            </Stack>
          ))}
        </List>
      </Stack>
      <Footer />
    </>
  );
};

export default MyClass;