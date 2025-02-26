"use client";

import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
<<<<<<< HEAD

import Skeleton from '@mui/material/Skeleton';
import dayjs from 'dayjs';
=======
import {  Badge,Button, Skeleton } from '@mui/material';


>>>>>>> 42f09b9 (in progress)

const ServiceProvider = () => {
 
  const [loading, setLoading] = useState(true);

  // Sample data
  const rows = [
    {
      id: 1,
      Name: 'John',
      User_Name: 'John12',
      
      mobileNumber: '1234567890',
      email: 'john.doe@example.com',
     
      Type:'Service Provider',
     
    },
    {
      id: 2,
      Name: 'Khan',
      User_Name: 'Salal',
      mobileNumber: '1234567890',
      email: 'khan.salal@example.com',
      Type:'Service Provider'
      
    },
    {
        id: 3,
        Name: 'John',
        User_Name: 'John12',
        
        mobileNumber: '1234567890',
        email: 'john.doe@example.com',
       
        Type:'Service Provider',
       
      },
      {
        id: 4,
        Name: 'Khan',
        User_Name: 'Salal',
        mobileNumber: '1234567890',
        email: 'khan.salal@example.com',
        Type:'Service Provider'
        
      },
      {
        id: 5,
        Name: 'John',
        User_Name: 'John12',
        
        mobileNumber: '1234567890',
        email: 'john.doe@example.com',
       
        Type:'Service Provider',
       
      },
      {
        id: 6,
        Name: 'Khan',
        User_Name: 'Salal',
        mobileNumber: '1234567890',
        email: 'khan.salal@example.com',
        Type:'Service Provider'
        
      },
    // Add more rows as needed
  ];

  // Columns for DataGrid
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
<<<<<<< HEAD
    { field: 'Name', headerName: ' Name', width: 150 },
    { field: 'User_Name', headerName: 'User Name', width: 150 },
    { field: 'mobileNumber', headerName: 'Mobile Number', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'Type', headerName: 'Type', width: 150 },
  
=======
    { field: 'Name', headerName: 'Name', width: 150 },
    { field: 'User_Name', headerName: 'User Name', width: 150 },
    { field: 'mobileNumber', headerName: 'Mobile Number', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'Type',
      headerName: 'Type',
      width: 130,
      filterable: true,
      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%',height:'100%' }}>
          <Badge
            badgeContent={params.value}
            color={
              params.value === 'Service Provider' ? 'primary' :'default'
              
              
              
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
      {/* Date Picker and Switches */}
     
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
    </div>
  );
};

export default ServiceProvider;