import React, { useState } from 'react';
import { Box, Button, Card, Checkbox, Divider, List, ListItem, Modal, Stack, Typography } from '@mui/material';
import gopay from '../../assets/gopay.svg'
import ovo from '../../assets/ovo.svg'
import dana from '../../assets/dana.svg'
import mandiri from '../../assets/mandiri.svg'
import bca from '../../assets/bca.svg'
import bni from '../../assets/bni.svg'
import { useHistory } from 'react-router-dom';

// https://drive.google.com/thumbnail?id=1lfQf6P0nLZVZgTizBlyWlQt5XhrWFOvp

const payments = [
  {
    name: 'Gopay',
    icon: gopay,
  },
  {
    name: 'OVO',
    icon: ovo,
  },
  {
    name: 'DANA',
    icon: dana,
  },
  {
    name: 'Mandiri',
    icon: mandiri,
  },
  {
    name: 'BCA',
    icon: bca,
  },
  {
    name: 'BNI',
    icon: bni,
  },
]

const items = [
  {
    image_url: 'https://drive.google.com/thumbnail?id=1CAlGdIW_kHVRxtOMHeTXjgUQExlL_RNs',
    category_name: 'SUV',
    course_name: 'Hyundai Palisade 2021',
    schedule: 'Wednesday, 27 July 2022',
    price: 800000
  },
  {
    image_url: 'https://drive.google.com/thumbnail?id=1XDdHCG3eNYbKG-1DpIKI6iCnHgKYxA2J',
    category_name: 'SUV',
    course_name: 'SUV Toyota Fortunner',
    schedule: 'Sunday, 24 July 2022',
    price: 850000
  },
  {
    image_url: 'https://drive.google.com/thumbnail?id=1IBKPk2ZUJUk59sWjuApWgI0rrhGC0KLW',
    category_name: 'SUV',
    course_name: 'Course Suzuki XL7',
    schedule: 'Wednesday, 27 July 2022',
    price: 600000
  },
];

const Checkout = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [open, setOpen] = useState(false);

  const handleToggle = (value) => () => {
    const currentIndex = checkedItems.indexOf(value);
    const newChecked = [...checkedItems];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedItems(newChecked);
  };

  const handleCheckAll = () => {
    if (checkedItems.length === items.length) {
      setCheckedItems([]);
    } else {
      setCheckedItems(items.map((item) => item.course_name));
    }
  };

  const formatCurrency = (amount) => {
    return amount?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100vw' }}>
        <List sx={{ width: '100%', px: 5 }}>
          <ListItem onClick={handleCheckAll}>
            <Checkbox
              edge="start"
              checked={checkedItems.length === items.length}
              tabIndex={-1}
              disableRipple
              sx={{
                color: '#790B0A',
                '&.Mui-checked': {
                  color: '#790B0A',
                },
              }}
            />
            <Typography fontFamily="Montserrat">Pilih Semua</Typography>
          </ListItem>
          <Divider />
          {items.map((item, index) => (
            <Stack sx={{ px: 1 }}>
              <ListItem sx={{ py: 2 }} key={index} onClick={handleToggle(item.course_name)}>
                <Checkbox
                  edge="start"
                  checked={checkedItems.indexOf(item.course_name) !== -1}
                  tabIndex={-1}
                  disableRipple
                  sx={{
                    color: '#790B0A',
                    '&.Mui-checked': {
                      color: '#790B0A',
                    },
                  }}
                />
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
                    <Typography fontSize="16px" fontWeight={400} color="#4F4F4F" fontFamily="Montserrat">Schedule : {item?.schedule}</Typography>
                    <Typography fontSize="20px" fontWeight={600} color="#790B0A" fontFamily="Montserrat">IDR {formatCurrency(item?.price)}</Typography>
                  </Stack>
                </Stack>
              </ListItem>
              <Divider />
            </Stack>
          ))}
        </List>
        <div style={{ height: 800 }} />
      </Stack>
      <Card elevation={3} sx={{ position: 'fixed', bottom: 0, left: 0, height: '100px', width: '100%', borderTopColor: '#BDBDBD', borderTopWidth: '1px', borderStyle: 'solid', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Stack direction="row" pl={5} alignItems="center">
          <Typography fontSize="18px" fontWeight={400} color="#333333" fontFamily="Montserrat">Total Price</Typography>
          <Typography ml={3} fontSize="24px" fontWeight={600} color="#790B0A" fontFamily="Montserrat">IDR 800.000</Typography>
        </Stack>
        <Stack direction="row" pr={5}>
          <Button
            onClick={handleOpen}
            sx={{
              '&:hover': {
                borderStyle: 'solid', borderWidth: '1px', borderColor: '#790B0A', backgroundColor: 'white', color: '#790B0A',
              },
              backgroundColor: '#790B0A', width: 233, height: 40, borderRadius: '8px', fontSize: "16px", fontWeight: 500, color: "white", fontFamily: "Montserrat"
            }}
            variant="contained"
          >
            Pay Now
          </Button>
        </Stack>
      </Card>
      <MyModal open={open} handleClose={handleClose} />
    </>
  );
};

export default Checkout;

const MyModal = ({ open, handleClose }) => {
  const [payment, setPayment] = useState('');
  const history = useHistory();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Card
        sx={{
          width: 374,
          height: 502,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          boxShadow: 24,
          p: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography mb={5} fontSize="20px" fontWeight={500} color="#41454D" fontFamily="Poppins">Select Payment Method</Typography>
        {payments?.map((item) => (
          <Stack my={1} sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
            <Box
              onClick={() => setPayment(item?.name)}
              component="img"
              sx={{
                height: 40,
                width: 40,
              }}
              src={item?.icon}
            />
            <Typography ml={2} fontSize="18px" fontWeight={500} color="#41454D" fontFamily="Poppins">{item?.name}</Typography>
          </Stack>
        ))}
        <Stack mt={5} sx={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-around' }}>
          <Button
            onClick={handleClose}
            sx={{
              '&:hover': {
                borderStyle: 'solid', borderWidth: '1px', borderColor: '#790B0A', backgroundColor: '#790B0A', color: "white",
              },
              borderStyle: 'solid', borderWidth: '1px', borderColor: '#790B0A', backgroundColor: 'white', width: 155, height: 48, borderRadius: '8px', fontSize: "16px", fontWeight: 600, color: '#790B0A', fontFamily: "Poppins"
            }}
            variant="contained"
          >
            Cancel
          </Button>
          <Button
            onClick={() => history.push(`/PurchaseSucces?payment=${payment}`)}
            sx={{
              '&:hover': {
                borderStyle: 'solid', borderWidth: '1px', borderColor: '#790B0A', backgroundColor: 'white', color: '#790B0A',
              },
              borderStyle: 'solid', borderWidth: '1px', borderColor: '#790B0A', backgroundColor: '#790B0A', width: 155, height: 48, borderRadius: '8px', fontSize: "16px", fontWeight: 600, color: "white", fontFamily: "Poppins"
            }}
            variant="contained"
          >
            Pay Now
          </Button>
        </Stack>
      </Card>
    </Modal>
  );
};