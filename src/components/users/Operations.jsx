"use client";

import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import Skeleton from '@mui/material/Skeleton';
import dayjs from 'dayjs';

const Operations = () => {
 
  const [loading, setLoading] = useState(true);

  // Sample data
  const rows = [
    {
      id: 1,
      FullName: 'John',
      User_Name: 'John12',
      
      mobileNumber: '1234567890',
      email: 'john.doe@example.com',
     
      Type:'Back Officer',
     
    },
    {
      id: 2,
      FullName: 'Khan',
      User_Name: 'Salal',
      mobileNumber: '1234567890',
      email: 'khan.salal@example.com',
      Type:'Administrator'
      
    },
    {
        id: 3,
        FullName: 'John',
        User_Name: 'John12',
        
        mobileNumber: '1234567890',
        email: 'john.doe@example.com',
       
        Type:'Front Officer',
       
      },
      {
        id: 4,
        FullName: 'Khan',
        User_Name: 'Salal',
        mobileNumber: '1234567890',
        email: 'khan.salal@example.com',
        Type:'Administrator'
        
      },
      {
        id: 5,
        FullName: 'John',
        User_Name: 'John12',
        
        mobileNumber: '1234567890',
        email: 'john.doe@example.com',
       
        Type:'Administrator',
       
      },
      {
        id: 6,
        FullName: 'Khan',
        User_Name: 'Salal',
        mobileNumber: '1234567890',
        email: 'khan.salal@example.com',
        Type:'Front Office'
        
      },
    // Add more rows as needed
  ];

  // Columns for DataGrid
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'FullName', headerName: 'full Name', width: 150 },
    { field: 'User_Name', headerName: 'User Name', width: 150 },
    { field: 'mobileNumber', headerName: 'Mobile Number', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'Type', headerName: 'Type', width: 150 },
  
  ];

  // Simulate loading delay
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', backgroundColor: 'white' }}>
     
     
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

export default Operations;