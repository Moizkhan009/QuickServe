"use client";

import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
<<<<<<< HEAD
import { TextField, Button, Skeleton, Switch, FormControlLabel, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
=======
import { TextField, Button, Skeleton, Switch, FormControlLabel, MenuItem, Select, InputLabel, FormControl, Card, CardContent, Typography, Grid, Badge, IconButton, Menu } from '@mui/material';
import { Search as SearchIcon, MoreVert } from '@mui/icons-material';
>>>>>>> 42f09b9 (in progress)
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const BookingMain = () => {
  const [loading, setLoading] = useState(true);
  const [gridView, setGridView] = useState(true); // State for grid/table view
  const [filterModel, setFilterModel] = useState({ items: [] }); // State for filtering
  const [filters, setFilters] = useState({
    status: '',
    area: '',
    companyName: '',
    date: null,
    paymentStatus: '',
    rateType: '',
  });

<<<<<<< HEAD
=======
  // State for three-dot menu
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleMenuClick = (event, row) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  

>>>>>>> 42f09b9 (in progress)
  // Sample data
  const rows = [
    {
      id: 1,
      status: 'Confirmed',
      paymentType: 'Credit Card',
      dateTime: '2023-10-01 10:00',
      companyCleaners: 'Elite Maids',
      consumerName: 'John Doe',
      areaAddress: 'Doha, Qatar',
      totalAmount: 'QAR 500',
      commission: 'QAR 50',
      consumerRatings: '4.5',
      appRatings: '4.7',
      paymentStatus: 'Paid',
      createdDate: '2023-09-30',
      note: 'Special request',
      actions: 'Edit',
    },
    {
      id: 2,
      status: 'Completed',
      paymentType: 'Cash',
      dateTime: '2023-10-02 11:00',
      companyCleaners: 'CleanCo',
      consumerName: 'Jane Smith',
      areaAddress: 'Al Rayyan, Qatar',
      totalAmount: 'QAR 300',
      commission: 'QAR 30',
      consumerRatings: '4.0',
      appRatings: '4.2',
      paymentStatus: 'Pending',
      createdDate: '2023-09-29',
      note: 'No notes',
      actions: 'Edit',
    },
<<<<<<< HEAD
=======
    {
      id: 4,
      status: 'Cancelled',
      paymentType: 'Credit Card',
      dateTime: '2023-10-01 10:00',
      companyCleaners: 'Elite Maids',
      consumerName: 'John Doe',
      areaAddress: 'Doha, Qatar',
      totalAmount: 'QAR 500',
      commission: 'QAR 50',
      consumerRatings: '4.5',
      appRatings: '4.7',
      paymentStatus: 'Paid',
      createdDate: '2023-09-30',
      note: 'Special request',
      actions: 'Edit',
    },
    {
      id: 3,
      status: 'Rejected',
      paymentType: 'Cash',
      dateTime: '2023-10-02 11:00',
      companyCleaners: 'CleanCo',
      consumerName: 'Jane Smith',
      areaAddress: 'Al Rayyan, Qatar',
      totalAmount: 'QAR 300',
      commission: 'QAR 30',
      consumerRatings: '4.0',
      appRatings: '4.2',
      paymentStatus: 'Pending',
      createdDate: '2023-09-29',
      note: 'No notes',
      actions: 'Edit',
    },
>>>>>>> 42f09b9 (in progress)
    // Add more rows as needed
  ];

  // Columns for DataGrid
  const columns = [
    { field: 'id', headerName: 'ID', width: 100, filterable: true },
    {
      field: 'status',
      headerName: 'Status',
<<<<<<< HEAD
      width: 120,
      filterable: true,
      renderCell: (params) => (
        <Button
          variant="contained"
          style={{ backgroundColor: '#716aca', borderRadius: '20px', color: '#fff', padding: '4px', fontSize: '8px' }}
        >
          {params.value}
        </Button>
=======
      width: 130,
      filterable: true,
      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%',height:'100%' }}>
          <Badge
            badgeContent={params.value}
            color={
              params.value === 'Confirmed' ? 'primary' :
              params.value === 'Completed' ? 'success' :
              params.value === 'Rejected' ? 'error' :
              params.value === 'Cancelled' ? 'warning' : 'default'
            }
          />
        </div>
>>>>>>> 42f09b9 (in progress)
      ),
    },
    { field: 'paymentType', headerName: 'Payment Type', width: 150, filterable: true },
    { field: 'dateTime', headerName: 'Date Time', width: 150, filterable: true },
    { field: 'companyCleaners', headerName: 'Company / Cleaners', width: 180, filterable: true },
    { field: 'consumerName', headerName: 'Consumer Name', width: 150, filterable: true },
    { field: 'areaAddress', headerName: 'Area / Address', width: 180, filterable: true },
    { field: 'totalAmount', headerName: 'Total Amount', width: 150, filterable: true },
    { field: 'commission', headerName: 'Commission', width: 120, filterable: true },
    { field: 'consumerRatings', headerName: 'Consumer Ratings', width: 150, filterable: true },
    { field: 'appRatings', headerName: 'App Ratings', width: 120, filterable: true },
    {
      field: 'paymentStatus',
      headerName: 'Payment Status',
      width: 150,
      filterable: true,
      renderCell: (params) => (
<<<<<<< HEAD
        <Button
          variant="contained"
          style={{ backgroundColor: '#ffb822', borderRadius: '20px', color: '#fff', padding: '4px', fontSize: '8px' }}
        >
          {params.value}
        </Button>
=======
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' ,height:'70%'}}>
          <Badge
            badgeContent={params.value}
            color={
              params.value === 'Paid' ? 'success' :
              params.value === 'Pending' ? 'warning' :
              params.value === 'Refunded' ? 'info' :
              params.value === 'Unpaid' ? 'error' :
              params.value === 'Payment Failed' ? 'error' : 'default'
            }
          />
        </div>
>>>>>>> 42f09b9 (in progress)
      ),
    },
    { field: 'createdDate', headerName: 'Created Date', width: 150, filterable: true },
    { field: 'note', headerName: 'Note', width: 150, filterable: true },
    {
      field: 'actions',
      headerName: 'Actions',
<<<<<<< HEAD
      width: 120,
      renderCell: (params) => (
        <Button
          variant="contained"
          style={{ backgroundColor: '#9ed568', borderRadius: '20px', color: '#fff', padding: '8px', fontSize: '10px' }}
        >
          Edit
        </Button>
=======
      width: 100,
      renderCell: (params) => (
        <IconButton
          onClick={(e) => handleMenuClick(e, params.row)}
        >
          <MoreVert />
        </IconButton>
>>>>>>> 42f09b9 (in progress)
      ),
    },
  ];

  // Simulate loading delay
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // Handle filter changes
  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Filtered rows
  const filteredRows = rows.filter((row) => {
    return (
      (!filters.status || row.status === filters.status) &&
      (!filters.area || row.areaAddress === filters.area) &&
      (!filters.companyName || row.companyCleaners === filters.companyName) &&
      (!filters.date || dayjs(row.dateTime).isSame(filters.date, 'day')) &&
      (!filters.paymentStatus || row.paymentStatus === filters.paymentStatus) &&
      (!filters.rateType || (filters.rateType === 'Rated' ? row.consumerRatings : !row.consumerRatings))
    );
  });

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', backgroundColor: 'white' }}>
      {/* Heading and Search Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '34px' }}>Bookings</h1>
<<<<<<< HEAD
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <FormControlLabel
            control={
              <Switch
                checked={gridView}
                onChange={() => setGridView(!gridView)}
                color:primary
              />
            }
            label={gridView ? 'Grid View' : 'Summarized View'}
          />
=======
        <hr style={{ borderTop: '1px solid #e0e0e0', marginBottom: '20px' }} /> {/* Horizontal Line */}

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <FormControlLabel
  control={
    <Switch
      checked={gridView}
      onChange={() => setGridView(!gridView)}
      sx={{
        "& .MuiSwitch-switchBase.Mui-checked": {
          color: "#a5c422", // Thumb (button) color when ON
        },
        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
          backgroundColor: "#9ed568", 
        },
        "& .MuiSwitch-track": {
          backgroundColor: "red", // Track color when OFF
        },
      }}
    />
  }
  label={gridView ? " 📄Summarized View" : "📦 Grid View"}
/>

>>>>>>> 42f09b9 (in progress)
          <Button
            variant="contained"
            style={{ backgroundColor: '#9ed568', color: '#fff', padding: '8px', fontSize: '10px' }}
          >
            Export
          </Button>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr style={{ borderTop: '1px solid #e0e0e0', marginBottom: '20px' }} />

      {/* Filters */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
<<<<<<< HEAD
          <FormControl size="small" style={{ minWidth: '150px' }}>
=======
          <FormControl size="small" style={{ minWidth: '120px' }}>
>>>>>>> 42f09b9 (in progress)
            <InputLabel>Status</InputLabel>
            <Select
              value={filters.status}
              onChange={(e) => handleFilterChange('status', e.target.value)}
              label="Status"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Confirmed">Confirmed</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
              <MenuItem value="Rejected">Rejected</MenuItem>
              <MenuItem value="Cancelled">Cancelled</MenuItem>
            </Select>
          </FormControl>

<<<<<<< HEAD
          <FormControl size="small" style={{ minWidth: '150px' }}>
=======
          <FormControl size="small" style={{ minWidth: '120px' }}>
>>>>>>> 42f09b9 (in progress)
            <InputLabel>Area</InputLabel>
            <Select
              value={filters.area}
              onChange={(e) => handleFilterChange('area', e.target.value)}
              label="Area"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Doha">Doha</MenuItem>
              <MenuItem value="Al Rayyan">Al Rayyan</MenuItem>
              <MenuItem value="Al Khor">Al Khor</MenuItem>
              <MenuItem value="Umm Salal">Umm Salal</MenuItem>
              <MenuItem value="Al Wakrah">Al Wakrah</MenuItem>
            </Select>
          </FormControl>

<<<<<<< HEAD
          <FormControl size="small" style={{ minWidth: '150px' }}>
=======
          <FormControl size="small" style={{ minWidth: '160px' }}>
>>>>>>> 42f09b9 (in progress)
            <InputLabel>Company Name</InputLabel>
            <Select
              value={filters.companyName}
              onChange={(e) => handleFilterChange('companyName', e.target.value)}
              label="Company Name"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Elite Maids">Elite Maids</MenuItem>
              <MenuItem value="CleanCo">CleanCo</MenuItem>
            </Select>
          </FormControl>

<<<<<<< HEAD

          <FormControl size="small" style={{ minWidth: '150px' }}>
=======
          <FormControl size="small" style={{ minWidth: '160px' }}>
>>>>>>> 42f09b9 (in progress)
            <InputLabel>Payment Status</InputLabel>
            <Select
              value={filters.paymentStatus}
              onChange={(e) => handleFilterChange('paymentStatus', e.target.value)}
              label="Payment Status"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Paid">Paid</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Refunded">Refunded</MenuItem>
              <MenuItem value="Unpaid">Unpaid</MenuItem>
              <MenuItem value="Payment Failed">Payment Failed</MenuItem>
            </Select>
          </FormControl>

<<<<<<< HEAD
          <FormControl size="small" style={{ minWidth: '150px' }}>
=======
          <FormControl size="small" style={{ minWidth: '120px' }}>
>>>>>>> 42f09b9 (in progress)
            <InputLabel>Rate Type</InputLabel>
            <Select
              value={filters.rateType}
              onChange={(e) => handleFilterChange('rateType', e.target.value)}
              label="Rate Type"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Rated">Rated</MenuItem>
              <MenuItem value="Unrated">Unrated</MenuItem>
            </Select>
          </FormControl>

<<<<<<< HEAD
          
=======
>>>>>>> 42f09b9 (in progress)
          <DatePicker
            label="Date"
            value={filters.date}
            onChange={(newValue) => handleFilterChange('date', newValue)}
            renderInput={(params) => <TextField {...params} size="small" />}
          />
        </div>
      </LocalizationProvider>

      {/* Data Table */}
      {loading ? (
        // Skeleton Loading
        <div>
          {[...Array(10)].map((_, index) => (
            <Skeleton key={index} variant="rectangular" height={50} style={{ marginBottom: '10px' }} />
          ))}
        </div>
      ) : gridView ? (
        // Grid View
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={filteredRows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            pagination
            filterModel={filterModel}
            onFilterModelChange={(newFilterModel) => setFilterModel(newFilterModel)}
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
      ) : (
        // Summarized View
<<<<<<< HEAD
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f5f5f5' }}>
                {columns.map((column) => (
                  <th key={column.field} style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #e0e0e0' }}>
                    {column.headerName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row) => (
                <tr key={row.id} style={{ borderBottom: '1px solid #e0e0e0' }}>
                  {columns.map((column) => (
                    <td key={column.field} style={{ padding: '10px' }}>
                      {column.renderCell ? column.renderCell({ row }) : row[column.field]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
=======
        <Grid container spacing={3}>
          {filteredRows.map((row) => (
            <Grid item xs={12} sm={6} md={3} key={row.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {row.consumerName}
                  </Typography>
                  <Typography color="text.secondary">
                    {row.companyCleaners}
                  </Typography>
                  <Typography color="text.secondary">
                    {row.areaAddress}
                  </Typography>
                  <Typography color="text.secondary">
                    {row.dateTime}
                  </Typography>
                  <Typography color="text.secondary">
                    {row.totalAmount}
                  </Typography>
                  <Typography color="text.secondary">
                    {row.paymentStatus}
                  </Typography>
                  <IconButton
                    onClick={(e) => handleMenuClick(e, row)}
                  >
                    <MoreVert />
                  </IconButton>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Three-dot Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Edit Booking</MenuItem>
        <MenuItem onClick={handleMenuClose}>Cancel Booking</MenuItem>
        <MenuItem onClick={handleMenuClose}>View Details</MenuItem>
      </Menu>
>>>>>>> 42f09b9 (in progress)
    </div>
  );
};

export default BookingMain;