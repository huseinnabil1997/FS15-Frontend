import { Box, Button, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import confirmation_success from '../../assets/confirmation_success.svg';
import { useHistory } from 'react-router-dom';


const PruchaseSuccess = () => {
  const history = useHistory();

  return (
    <Stack sx={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Box
        component="img"
        sx={{
          height: 250,
          width: 250,
          mb: 3
        }}
        src={confirmation_success}
      />
      <Typography mb={1} fontSize="24px" fontWeight={500} color="#790B0A" fontFamily="Montserrat">Purchase Successfully</Typography>
      <Typography mb={5} fontSize="16px" fontWeight={400} color="#4F4F4F" fontFamily="Montserrat">That’s Great! We’re ready for driving day</Typography>
      <Stack direction="row" spacing={3}>
        <Button
          startIcon={<HomeIcon />}
          onClick={() => history.push('/')}
          variant="outlined"
          sx={{
            '&:hover': {
              borderStyle: 'solid', borderWidth: '1px', borderColor: '#790B0A', backgroundColor: '#790B0A', color: "white",
            },
            width: 174, height: 50, borderColor: '#790B0A', color: '#790B0A', fontFamily: 'Montserrat', fontSize: '13px', fontWeight: 500
          }}
        >
          Back to Home
        </Button>
        <Button
          startIcon={<ArrowForwardIcon />}
          onClick={() => history.push('/invoice')}
          variant="contained"
          sx={{
            '&:hover': {
              borderStyle: 'solid', borderWidth: '1px', borderColor: '#790B0A', backgroundColor: 'white', color: '#790B0A',
            },
            width: 174, height: 50, backgroundColor: '#790B0A', fontFamily: 'Montserrat', fontSize: '13px', fontWeight: 500
          }}
        >
          Open Invoice
        </Button>
      </Stack>
    </Stack>
  );
};

export default PruchaseSuccess;