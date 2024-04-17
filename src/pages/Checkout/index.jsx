import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {DataGrid} from '@mui/x-data-grid';
import { Avatar } from '@mui/material';


// const Checkout = () => {
//     return (
//        <div></div> 
//     )

    
// const columns = [
//     {
//       field: 'image',
//       headerName: 'Image',
//       width: 100,
//       renderCell: (params) => (
//         <Avatar alt={`Image ${params.value}`} src={params.value} />
//       ),
//     },
//     {
//       field: 'fullName',
//       headerName: 'Full name',
//       description: 'Description text and price',
//       sortable: false,
//       width: 300,
//       valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''} - $${row.price || 0}`,
//     },
//   ];
  
//   const rows = [
//     { id: 'path_to_image_1', lastName: 'Snow', firstName: 'Jon', price: 50 },
//     { id: 'path_to_image_2', lastName: 'Lannister', firstName: 'Cersei', price: 60 },
//     // Add more rows as needed
//   ];
  
//   export default function DataTable() {
//     return (
//       <div style={{ height: 400, width: '100%' }}>
//         <DataGrid  
//           rows={rows}
//           columns={columns}
//           pageSize={5}
//           checkboxSelection
//         />
//       </div>
//         )
//     }

// export default Checkout;

import React from 'react';

const Checkout = () => {
  return (
    <div className="context">
      <div className="item">
        <input type="checkbox" checked={true} readOnly />
        <span className="car-make">マ</span>
        <span className="car-type">SUV</span>
        <span className="car-model">Hyundai Palisade 2021</span>
        <span className="schedule">Schedule: Wednesday, 27 July 2022</span>
        <span className="price">IDR 800.00</span>
      </div>
      <div className="item">
        <input type="checkbox" checked={false} readOnly />
        <span className="car-type">SUV</span>
        <span className="car-model">Toyota Fortunner</span>
        <span className="schedule">Schedule: Sunday, 24 July 2022</span>
        <span className="price">IDR 850.00</span>
      </div>
      <div className="item">
        <input type="checkbox" checked={false} readOnly />
        <span className="car-type">SUV</span>
        <span className="car-model">Course Suzuki XL7</span>
        <span className="schedule">Schedule: Wednesday, 27 July 2022</span>
        <span className="price">IDR 600.00</span>
      </div>
      <div className="invoice">
        <span className="title">My Class</span>
        <span className="title">Invoice</span>
        <span className="total-price">IDR 800.000</span>
        <button className="pay-button">Pay Now</button>
      </div>
    </div>
  );
};

export default Checkout;