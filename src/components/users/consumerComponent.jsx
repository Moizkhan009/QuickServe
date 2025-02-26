"use client";

<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState, useEffect, useMemo } from 'react';
>>>>>>> 42f09b9 (in progress)
import { DataGrid } from '@mui/x-data-grid';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Switch from '@mui/material/Switch';
import Skeleton from '@mui/material/Skeleton';
import dayjs from 'dayjs';

const ConsumerComponent = () => {
<<<<<<< HEAD
  const [startDate, setStartDate] = useState(dayjs());
=======
  const [startDate, setStartDate] = useState(null); // Initial date is null
>>>>>>> 42f09b9 (in progress)
  const [isFlagged, setIsFlagged] = useState(true);
  const [isAllProducts, setIsAllProducts] = useState(false);
  const [loading, setLoading] = useState(true);

<<<<<<< HEAD
  // Sample data
  const rows = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      mobileNumber: '1234567890',
      email: 'john.doe@example.com',
      consumerProducts: 'Product A',
      lastBooking: '2023-10-01',
      activeSince: '2022-01-01',
      noOfBooking: 5,
      optNote: 'Some note',
      joiningDate: '2021-01-01',
      isActive: true,
    },
    {
      id: 2,
      firstName: 'Khan',
      lastName: 'Salal',
      mobileNumber: '1234567890',
      email: 'khan.salal@example.com',
      consumerProducts: 'Product B',
      lastBooking: '2023-09-15',
      activeSince: '2021-05-01',
      noOfBooking: 3,
      optNote: 'Another note',
      joiningDate: '2020-01-01',
      isActive: false,
    },
    {
=======
  // Sample data (memoized to avoid unnecessary re-renders)
  const rows = useMemo(
    () => [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        mobileNumber: '1234567890',
        email: 'john.doe@example.com',
        consumerProducts: 'Product A',
        lastBooking: '2023-10-01',
        activeSince: '2022-01-01',
        noOfBooking: 5,
        optNote: 'Some note',
        joiningDate: '2021-01-01',
        isActive: true,
      },
      {
        id: 2,
        firstName: 'Khan',
        lastName: 'Salal',
        mobileNumber: '1234567890',
        email: 'khan.salal@example.com',
        consumerProducts: 'Product B',
        lastBooking: '2023-09-15',
        activeSince: '2021-05-01',
        noOfBooking: 3,
        optNote: 'Another note',
        joiningDate: '2020-01-01',
        isActive: false,
      },
      {
>>>>>>> 42f09b9 (in progress)
        id: 3,
        firstName: 'John',
        lastName: 'Doe',
        mobileNumber: '1234567890',
        email: 'john.doe@example.com',
        consumerProducts: 'Product A',
        lastBooking: '2023-10-01',
        activeSince: '2022-01-01',
        noOfBooking: 5,
        optNote: 'Some note',
        joiningDate: '2021-01-01',
        isActive: true,
      },
      {
        id: 4,
        firstName: 'Khan',
        lastName: 'Salal',
        mobileNumber: '1234567890',
        email: 'khan.salal@example.com',
        consumerProducts: 'Product B',
        lastBooking: '2023-09-15',
        activeSince: '2021-05-01',
        noOfBooking: 3,
        optNote: 'Another note',
        joiningDate: '2020-01-01',
        isActive: false,
      },
      {
        id: 5,
        firstName: 'John',
        lastName: 'Doe',
        mobileNumber: '1234567890',
        email: 'john.doe@example.com',
        consumerProducts: 'Product A',
        lastBooking: '2023-10-01',
        activeSince: '2022-01-01',
        noOfBooking: 5,
        optNote: 'Some note',
        joiningDate: '2021-01-01',
        isActive: true,
      },
      {
        id: 6,
        firstName: 'Khan',
        lastName: 'Salal',
        mobileNumber: '1234567890',
        email: 'khan.salal@example.com',
        consumerProducts: 'Product B',
        lastBooking: '2023-09-15',
        activeSince: '2021-05-01',
        noOfBooking: 3,
        optNote: 'Another note',
        joiningDate: '2020-01-01',
        isActive: false,
      },
<<<<<<< HEAD
    // Add more rows as needed
  ];
=======
      // Add more rows as needed
    ],
    []
  );
>>>>>>> 42f09b9 (in progress)

  // Columns for DataGrid
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'firstName', headerName: 'First Name', width: 150 },
    { field: 'lastName', headerName: 'Last Name', width: 150 },
    { field: 'mobileNumber', headerName: 'Mobile Number', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'consumerProducts', headerName: 'Consumer Products', width: 150 },
    { field: 'lastBooking', headerName: 'Last Booking', width: 150 },
    { field: 'activeSince', headerName: 'Active Since', width: 150 },
    { field: 'noOfBooking', headerName: 'No. Of Booking', width: 150 },
    { field: 'optNote', headerName: 'Opt. Note', width: 150 },
    { field: 'joiningDate', headerName: 'Joining Date', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <Switch
          checked={params.row.isActive}
          onChange={() => handleToggleActive(params.row)}
          sx={{
            '& .MuiSwitch-thumb': {
              backgroundColor: params.row.isActive ? 'white' : 'red', // Thumb color
            },
            '& .MuiSwitch-track': {
              backgroundColor: params.row.isActive ? 'white' : 'red', // Track color
            },
          }}
        />
      ),
    },
  ];

  // Simulate loading delay
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // Handle toggle active/inactive
  const handleToggleActive = (row) => {
    console.log('Toggle Active/Inactive', row);
    // Add your logic here
  };

<<<<<<< HEAD
=======
  // Filter rows based on the selected date
  const filteredRows = useMemo(() => {
    if (!startDate) {
      return rows; // Show all rows if no date is selected
    }
    return rows.filter((row) => {
      const rowDate = dayjs(row.lastBooking);
      return rowDate.isSame(startDate, 'day');
    });
  }, [rows, startDate]);

>>>>>>> 42f09b9 (in progress)
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', backgroundColor: 'white' }}>
      {/* Date Picker and Switches */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Select Date"
            value={startDate}
            onChange={(newValue) => setStartDate(newValue)}
          />
        </LocalizationProvider>

        <div style={{ display: 'flex', gap: '20px' }}>
          <div>
            <label>
              Flagged:
              <Switch
                checked={isFlagged}
                onChange={(e) => setIsFlagged(e.target.checked)}
                sx={{
                  '& .MuiSwitch-thumb': {
                    backgroundColor: isFlagged ? 'white' : 'red', // Thumb color
                  },
                  '& .MuiSwitch-track': {
                    backgroundColor: isFlagged ? 'white' : 'red', // Track color
                  },
                }}
              />
            </label>
          </div>
          <div>
            <label>
              All Products:
              <Switch
                checked={isAllProducts}
                onChange={(e) => setIsAllProducts(e.target.checked)}
                sx={{
                  '& .MuiSwitch-thumb': {
                    backgroundColor: isAllProducts ? 'white' : 'red', // Thumb color
                  },
                  '& .MuiSwitch-track': {
                    backgroundColor: isAllProducts ? 'white' : 'red', // Track color
                  },
                }}
              />
            </label>
          </div>
        </div>
      </div>

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
            rows={filteredRows}
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
    </div>
  );
};

export default ConsumerComponent;