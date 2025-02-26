"use client";

import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Button, Skeleton } from '@mui/material';
import { Search as SearchIcon, Add as AddIcon } from '@mui/icons-material';

const SPcomponent = () => {
  const [loading, setLoading] = useState(true);
<<<<<<< HEAD
=======
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [filteredRows, setFilteredRows] = useState([]); // State for filtered rows
>>>>>>> 42f09b9 (in progress)

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
<<<<<<< HEAD
      CompanyName: 'Elite Maids',
      CompanyName_Ar: 'ايليت ميد',
      mobileNumber: '1234567890',
      email: 'john.doe@example.com',
=======
      CompanyName: 'Clean House',
      CompanyName_Ar: 'كلين هاوس',
      mobileNumber: '0987654321',
      email: 'clean.house@example.com',
>>>>>>> 42f09b9 (in progress)
      Actions: 'Go to Accounts',
    },
    {
      id: 3,
<<<<<<< HEAD
      CompanyName: 'Elite Maids',
      CompanyName_Ar: 'ايليت ميد',
      mobileNumber: '1234567890',
      email: 'john.doe@example.com',
=======
      CompanyName: 'Fresh Start',
      CompanyName_Ar: 'فرش ستارت',
      mobileNumber: '1122334455',
      email: 'fresh.start@example.com',
>>>>>>> 42f09b9 (in progress)
      Actions: 'Go to Accounts',
    },
    {
      id: 4,
<<<<<<< HEAD
      CompanyName: 'Elite Maids',
      CompanyName_Ar: 'ايليت ميد',
      mobileNumber: '1234567890',
      email: 'john.doe@example.com',
=======
      CompanyName: 'Sparkle Clean',
      CompanyName_Ar: 'سباركل كلين',
      mobileNumber: '5566778899',
      email: 'sparkle.clean@example.com',
>>>>>>> 42f09b9 (in progress)
      Actions: 'Go to Accounts',
    },
    {
      id: 5,
<<<<<<< HEAD
      CompanyName: 'Elite Maids',
      CompanyName_Ar: 'ايليت ميد',
      mobileNumber: '1234567890',
      email: 'john.doe@example.com',
=======
      CompanyName: 'Quick Clean',
      CompanyName_Ar: 'كويك كلين',
      mobileNumber: '9988776655',
      email: 'quick.clean@example.com',
>>>>>>> 42f09b9 (in progress)
      Actions: 'Go to Accounts',
    },
    {
      id: 6,
<<<<<<< HEAD
      CompanyName: 'Elite Maids',
      CompanyName_Ar: 'ايليت ميد',
      mobileNumber: '1234567890',
      email: 'john.doe@example.com',
      Actions: 'Go to Accounts',
    },
    // Add more rows as needed
=======
      CompanyName: 'Bright Homes',
      CompanyName_Ar: 'برايت هومز',
      mobileNumber: '4433221100',
      email: 'bright.homes@example.com',
      Actions: 'Go to Accounts',
    },
>>>>>>> 42f09b9 (in progress)
  ];

  // Columns for DataGrid
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'CompanyName', headerName: 'Company Name', width: 150 },
    { field: 'CompanyName_Ar', headerName: 'CompanyName_Ar', width: 150 },
    { field: 'mobileNumber', headerName: 'Mobile Number', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
<<<<<<< HEAD
   
=======
>>>>>>> 42f09b9 (in progress)
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
<<<<<<< HEAD
          style={{ backgroundColor: '#9ed568', borderRadius: '20px', color: '#fff',padding:'8x',fontSize:'10px' }}
=======
          style={{ backgroundColor: '#9ed568', borderRadius: '20px', color: '#fff', padding: '8px', fontSize: '10px' }}
>>>>>>> 42f09b9 (in progress)
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
<<<<<<< HEAD
    }, 2000);
  }, []);

  return (
    
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', backgroundColor: 'white' }}>
      {/* Heading and Search Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '34px'}}>Service Providers</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
=======
      setFilteredRows(rows); // Initialize filteredRows with all rows
    }, 2000);
  }, []);

  // Handle search input change
  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter rows based on the search query
    const filtered = rows.filter(
      (row) =>
        row.CompanyName.toLowerCase().includes(query) ||
        row.CompanyName_Ar.toLowerCase().includes(query) ||
        row.mobileNumber.includes(query) ||
        row.email.toLowerCase().includes(query)
    );
    setFilteredRows(filtered);
  };

  // Handle Add Provider button click
  const handleAddProvider = () => {
    alert('Add Provider button clicked!');
    // You can add your logic here to open a modal or navigate to a form.
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', backgroundColor: 'white' }}>
      {/* Heading and Search Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '34px' }}>Service Providers</h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: '23px' }}>
          {/* Search Bar */}
>>>>>>> 42f09b9 (in progress)
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
<<<<<<< HEAD
=======
            value={searchQuery}
            onChange={handleSearchChange}
>>>>>>> 42f09b9 (in progress)
            InputProps={{
              startAdornment: <SearchIcon style={{ color: 'gray' }} />,
            }}
          />
<<<<<<< HEAD
        </div>
       
=======

          {/* Add Provider Button */}
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleAddProvider}
            style={{
              backgroundColor: '#9ed568',
              color: '#fff',
              borderRadius: '24px',
              textTransform: 'none',
              fontSize: '14px',
              fontWeight: '500',
            }}
          >
            Add Provider
          </Button>
        </div>
>>>>>>> 42f09b9 (in progress)
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
<<<<<<< HEAD
            rows={rows}
=======
            rows={filteredRows} // Use filteredRows instead of rows
>>>>>>> 42f09b9 (in progress)
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
>>>>>>> 42f09b9 (in progress)
    </div>
  );
};

export default SPcomponent;