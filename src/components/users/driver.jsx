"use client";

import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
<<<<<<< HEAD
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Switch from '@mui/material/Switch';
import Skeleton from '@mui/material/Skeleton';
import dayjs from 'dayjs';

const Driver = () => {
  const [startDate, setStartDate] = useState(dayjs());
  const [isFlagged, setIsFlagged] = useState(true);
  const [isAllProducts, setIsAllProducts] = useState(false);
  const [loading, setLoading] = useState(true);
=======
import {Badge, Skeleton,Button} from '@mui/material';
import { Search as SearchIcon, Add as AddIcon } from '@mui/icons-material';


const Driver = () => {

  const [loading, setLoading] = useState(true);
   // Handle Add Provider button click
   const handleAddDriver = () => {
    alert('Add Driver button clicked!');
    // You can add your logic here to open a modal or navigate to a form.
  };
>>>>>>> 42f09b9 (in progress)

  // Sample data
  const rows = [
    {
      id: 1,
      Name: 'John',
      
      mobileNumber: '1234567890',
      email: 'john.doe@example.com',
     Gender:'Male',
     ServiceProvider:'TestSp',
     Status:'Available',
     
    },
    {
        id: 2,
        Name: 'John',
        
        mobileNumber: '1234567890',
        email: 'john.doe@example.com',
       Gender:'Male',
       ServiceProvider:'TestSp',
       Status:'Available',
       
      },
      {
        id: 3,
        Name: 'John',
        
        mobileNumber: '3234567890',
        email: 'john.doe@example.com',
       Gender:'Male',
       ServiceProvider:'TestSp',
       Status:'Available',
       
      },
      {
        id: 4,
        Name: 'John',
        
        mobileNumber: '1234567890',
        email: 'john.doe@example.com',
       Gender:'Male',
       ServiceProvider:'TestSp',
       Status:'Available',
       
      },
      {
        id: 5,
        Name: 'John',
        
        mobileNumber: '1234567890',
        email: 'john.doe@example.com',
       Gender:'Male',
       ServiceProvider:'TestSp',
<<<<<<< HEAD
       Status:'Available',
=======
       Status:'Not Available',
>>>>>>> 42f09b9 (in progress)
       
      },
      {
        id: 6,
        Name: 'John',
        
        mobileNumber: '1234567890',
        email: 'john.doe@example.com',
       Gender:'Male',
       ServiceProvider:'TestSp',
       Status:'Available',
       
      },
    // Add more rows as needed
  ];

  // Columns for DataGrid
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'Name', headerName: ' Name', width: 150 },
   
    { field: 'mobileNumber', headerName: 'Mobile Number', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'Gender', headerName: 'Gender', width: 150 },
    { field: 'ServiceProvider', headerName: 'Service Provider', width: 150 },
<<<<<<< HEAD
    { field: 'Status', headerName: 'Status ', width: 150 },
   
=======
    {
      field: 'Status',
      headerName: 'Status',
      width: 130,
      filterable: true,
      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%',height:'100%' }}>
          <Badge
            badgeContent={params.value}
            color={
              params.value === 'Available' ? 'success' :
              params.value === ' Not Available' ? 'error' :'default'
              
            }
          />
        </div>
      ),
    },   
>>>>>>> 42f09b9 (in progress)
 
  ];

  // Simulate loading delay
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', backgroundColor: 'white' }}>
<<<<<<< HEAD
     

=======
    
  
>>>>>>> 42f09b9 (in progress)
      {/* Data Table */}
      {loading ? (
        // Skeleton Loading
        <div>
          {[...Array(10)].map((_, index) => (
            <Skeleton key={index} variant="rectangular" height={50} style={{ marginBottom: '10px' }} />
          ))}
        </div>
      ) : (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            pagination
            sx={{
              '& .MuiDataGrid-row:nth-of-type(odd)': {
                backgroundColor: '#f5f5f5', // Light gray for odd rows
              },
              '& .MuiDataGrid-row:nth-of-type(even)': {
                backgroundColor: '#ffffff', // White for even rows
              },
            }}
          />
        </div>
      )}
<<<<<<< HEAD
=======

       <div style={{marginLeft:'80%',marginTop:'20px'}}>
       {/* Add Driver Button */}
       <Button
                 variant="contained"
                 startIcon={<AddIcon />}
                 onClick={handleAddDriver}
                 style={{
                   backgroundColor: '#9ed568',
                   color: '#fff',
                   borderRadius: '24px',
                   textTransform: 'none',
                   fontSize: '14px',
                   fontWeight: '500',
                 }}
               >
                 Add Driver
               </Button>
     
          </div>
>>>>>>> 42f09b9 (in progress)
    </div>
  );
};

export default Driver;