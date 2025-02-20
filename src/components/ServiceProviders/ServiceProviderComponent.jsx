"use client";

import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Button, Skeleton } from '@mui/material';
import { Search as SearchIcon, Add as AddIcon } from '@mui/icons-material';

const SPcomponent = () => {
  const [loading, setLoading] = useState(true);

  // Sample data
  const rows = [
    {
      id: 1,
      CompanyName: 'Elite Maids',
      CompanyName_Ar: 'ايليت ميد',
      mobileNumber: '1234567890',
      email: 'john.doe@example.com',
      Actions: 'Go to Accounts',
    },
    {
      id: 2,
      CompanyName: 'Elite Maids',
      CompanyName_Ar: 'ايليت ميد',
      mobileNumber: '1234567890',
      email: 'john.doe@example.com',
      Actions: 'Go to Accounts',
    },
    {
      id: 3,
      CompanyName: 'Elite Maids',
      CompanyName_Ar: 'ايليت ميد',
      mobileNumber: '1234567890',
      email: 'john.doe@example.com',
      Actions: 'Go to Accounts',
    },
    {
      id: 4,
      CompanyName: 'Elite Maids',
      CompanyName_Ar: 'ايليت ميد',
      mobileNumber: '1234567890',
      email: 'john.doe@example.com',
      Actions: 'Go to Accounts',
    },
    {
      id: 5,
      CompanyName: 'Elite Maids',
      CompanyName_Ar: 'ايليت ميد',
      mobileNumber: '1234567890',
      email: 'john.doe@example.com',
      Actions: 'Go to Accounts',
    },
    {
      id: 6,
      CompanyName: 'Elite Maids',
      CompanyName_Ar: 'ايليت ميد',
      mobileNumber: '1234567890',
      email: 'john.doe@example.com',
      Actions: 'Go to Accounts',
    },
    // Add more rows as needed
  ];

  // Columns for DataGrid
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'CompanyName', headerName: 'Company Name', width: 150 },
    { field: 'CompanyName_Ar', headerName: 'CompanyName_Ar', width: 150 },
    { field: 'mobileNumber', headerName: 'Mobile Number', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
   
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          style={{ backgroundColor: '#9ed568', borderRadius: '20px', color: '#fff',padding:'8x',fontSize:'10px' }}
        >
          Go to Account
        </Button>
      ),
    },
  ];

  // Simulate loading delay
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', backgroundColor: 'white' }}>
      {/* Heading and Search Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '34px'}}>Service Providers</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            InputProps={{
              startAdornment: <SearchIcon style={{ color: 'gray' }} />,
            }}
          />
        </div>
       
      </div>

      {/* Horizontal Line */}
      <hr style={{ borderTop: '1px solid #e0e0e0', marginBottom: '20px' }} />

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

export default SPcomponent;