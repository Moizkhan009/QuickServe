"use client";

import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Button, Skeleton, Switch, FormControlLabel, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
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
    // Add more rows as needed
  ];

  // Columns for DataGrid
  const columns = [
    { field: 'id', headerName: 'ID', width: 100, filterable: true },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      filterable: true,
      renderCell: (params) => (
        <Button
          variant="contained"
          style={{ backgroundColor: '#716aca', borderRadius: '20px', color: '#fff', padding: '4px', fontSize: '8px' }}
        >
          {params.value}
        </Button>
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
        <Button
          variant="contained"
          style={{ backgroundColor: '#ffb822', borderRadius: '20px', color: '#fff', padding: '4px', fontSize: '8px' }}
        >
          {params.value}
        </Button>
      ),
    },
    { field: 'createdDate', headerName: 'Created Date', width: 150, filterable: true },
    { field: 'note', headerName: 'Note', width: 150, filterable: true },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      renderCell: (params) => (
        <Button
          variant="contained"
          style={{ backgroundColor: '#9ed568', borderRadius: '20px', color: '#fff', padding: '8px', fontSize: '10px' }}
        >
          Edit
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
          <FormControl size="small" style={{ minWidth: '150px' }}>
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

          <FormControl size="small" style={{ minWidth: '150px' }}>
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

          <FormControl size="small" style={{ minWidth: '150px' }}>
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


          <FormControl size="small" style={{ minWidth: '150px' }}>
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

          <FormControl size="small" style={{ minWidth: '150px' }}>
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
    </div>
  );
};

export default BookingMain;