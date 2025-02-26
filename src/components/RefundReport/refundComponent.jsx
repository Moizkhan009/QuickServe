"use client";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Skeleton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs"; // Import dayjs for date handling
import PrintIcon from "@mui/icons-material/Print"; // Import Print icon

const RefundReport = () => {
  const [loading, setLoading] = useState(true); // Simulate loading state
  const [rows, setRows] = useState([]); // Table data
  const [selectedDate, setSelectedDate] = useState(dayjs()); // Selected date for filtering
  const [selectedProvider, setSelectedProvider] = useState(""); // Selected service provider for filtering
  const [serviceProviders, setServiceProviders] = useState([
    "Provider A",
    "Provider B",
    "Provider C",
  ]); // List of service providers

  // Simulate fetching data
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const sampleData = [
        {
          bookingId: "B001",
          status: "Completed",
          date: "2025-02-26",
          company: "Company X",
          value: 100,
          refund: 20,
          provider: "Provider A",
        },
        {
          bookingId: "B002",
          status: "Pending",
          date: "2023-10-02",
          company: "Company Y",
          value: 200,
          refund: 50,
          provider: "Provider B",
        },
        {
          bookingId: "B003",
          status: "Cancelled",
          date: "2023-10-03",
          company: "Company Z",
          value: 150,
          refund: 30,
          provider: "Provider C",
        },
      ];
      setRows(sampleData);
      setLoading(false);
    }, 2000); // Simulate 2 seconds loading time
  }, []);

  // Filter rows based on selected date and service provider
  const filteredRows = rows.filter((row) => {
    const matchesDate = dayjs(row.date).isSame(selectedDate, "day");
    const matchesProvider = selectedProvider
      ? row.provider === selectedProvider
      : true;
    return matchesDate && matchesProvider;
  });

  // Print functionality
  const handlePrint = () => {
    window.print();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="p-8 bg-gray-50 min-h-screen">
        {/* Heading and Filters */}
        <div className="flex justify-between items-center mb-8">
          <Typography variant="h4" className="font-bold text-gray-800">
            Refund Report
          </Typography>
          <div className="flex gap-4 items-center">
            <DatePicker
              value={selectedDate}
              onChange={(newDate) => setSelectedDate(newDate)}
              renderInput={({ inputRef, inputProps }) => (
                <input
                  ref={inputRef}
                  {...inputProps}
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:!ring-[#9ed568] bg-white"
                  style={{ color: "#9ed568" }} // Date picker text color
                />
              )}
            />
            <Button
              variant="contained"
              startIcon={<PrintIcon />}
              onClick={handlePrint}
              className="!bg-[#9ed568] hover:bg-[#85c150] text-white"
            >
              Print
            </Button>
          </div>
        </div>
        <hr style={{ borderTop: "1px solid #e0e0e0", marginBottom: "30px" }} />

        {/* Service Provider Dropdown */}
        <FormControl className="min-w-[300px] !mb-6" size="small">
          <InputLabel id="service-provider-label">Service Provider</InputLabel>
          <Select
            labelId="service-provider-label"
            value={selectedProvider}
            onChange={(e) => setSelectedProvider(e.target.value)}
            label="Service Provider"
            className="bg-white"
            style={{ height: "40px", width: "300px" }} // Fixed height and width
          >
            <MenuItem value="">All</MenuItem>
            {serviceProviders.map((provider, index) => (
              <MenuItem key={index} value={provider}>
                {provider}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Table */}
        <div className="overflow-x-auto shadow-sm rounded-lg">
          <TableContainer component={Paper} style={{ maxHeight: "400px", overflowY: "auto" }}>
            <Table>
              <TableHead className="bg-gray-100">
                <TableRow>
                  <TableCell className="!font-bold text-gray-700">Booking ID</TableCell>
                  <TableCell className="!font-bold text-gray-700">Status</TableCell>
                  <TableCell className="!font-bold text-gray-700">Date</TableCell>
                  <TableCell className="!font-bold text-gray-700">Company</TableCell>
                  <TableCell className="!font-bold text-gray-700">Value</TableCell>
                  <TableCell className="!font-bold text-gray-700">Refund</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading
                  ? Array.from({ length: 5 }).map((_, index) => (
                      <TableRow key={index}>
                        {Array.from({ length: 6 }).map((_, i) => (
                          <TableCell key={i}>
                            <Skeleton variant="text" />
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  : filteredRows.map((row, index) => (
                      <TableRow key={index} className="hover:bg-gray-50">
                        <TableCell className="text-gray-700">{row.bookingId}</TableCell>
                        <TableCell className="text-gray-700">{row.status}</TableCell>
                        <TableCell className="text-gray-700"> {row.date}</TableCell>
                        <TableCell className="text-gray-700">{row.company}</TableCell>
                        <TableCell className="text-gray-700">${row.value}</TableCell>
                        <TableCell className="text-gray-700">${row.refund}</TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default RefundReport;