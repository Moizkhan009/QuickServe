"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  Skeleton,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const CreateInvoice = () => {
  const [loading, setLoading] = useState(false); // Simulate loading state
  const [invoiceFrom, setInvoiceFrom] = useState("");
  const [date, setDate] = useState(dayjs());
  const [billTo, setBillTo] = useState("");
  const [paymentTerms, setPaymentTerms] = useState("");
  const [dueDate, setDueDate] = useState(dayjs());

  // Simulate loading for 2 seconds
  const simulateLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="flex flex-col items-center p-6 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Card className="w-full max-w-4xl p-8 shadow-2xl rounded-2xl bg-white">
          {/* Heading */}
          <Typography
            variant="h3"
            className="text-center mb-8 font-bold text-gray-800"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Create Invoice
          </Typography>

          <CardContent>
            {/* Form Fields */}
            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm mb-8">
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Who is this invoice from? (required)"
                    variant="outlined"
                    value={invoiceFrom}
                    onChange={(e) => setInvoiceFrom(e.target.value)}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        borderColor: "#9ed568",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <DatePicker
                    label="Date"
                    value={date}
                    onChange={(newDate) => setDate(newDate)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "12px",
                            borderColor: "#9ed568",
                          },
                        }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Select
                    fullWidth
                    label="Bill to"
                    variant="outlined"
                    value={billTo}
                    onChange={(e) => setBillTo(e.target.value)}
                    displayEmpty
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        borderColor: "#9ed568",
                      },
                    }}
                  >
                    <MenuItem value="" disabled>
                  Service Providers
                    </MenuItem>
                    <MenuItem value="Company A">Company A</MenuItem>
                    <MenuItem value="Company B">Company B</MenuItem>
                    <MenuItem value="Company C">Company C</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Payment Terms"
                    variant="outlined"
                    value={paymentTerms}
                    onChange={(e) => setPaymentTerms(e.target.value)}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        borderColor: "#9ed568",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <DatePicker
                    label="Due Date"
                    value={dueDate}
                    onChange={(newDate) => setDueDate(newDate)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "12px",
                            borderColor: "#9ed568",
                          },
                        }}
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </div>

            {/* Balance Due */}
            <Typography
              variant="h6"
              className="mt-8 text-gray-700 font-semibold"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Balance Due:{" "}
              <span className="text-red-500 font-bold">QAR 0.00</span>
            </Typography>

            {/* Table */}
            <TableContainer
              component={Paper}
              className="mt-8 rounded-lg shadow-md"
              sx={{ borderRadius: "12px" }}
            >
              <Table>
                <TableHead className="bg-[#9ed568]">
                  <TableRow>
                    <TableCell className="font-bold text-white">
                      Description
                    </TableCell>
                    <TableCell className="font-bold text-white">
                      Consumer
                    </TableCell>
                    <TableCell className="font-bold text-white">
                      Maid(s)
                    </TableCell>
                    <TableCell className="font-bold text-white">Hrs.</TableCell>
                    <TableCell className="font-bold text-white">
                      Value
                    </TableCell>
                    <TableCell className="font-bold text-white">
                      Amount
                    </TableCell>
                    <TableCell className="font-bold text-white">
                      QS Promo
                    </TableCell>
                    <TableCell className="font-bold text-white">
                      SP Promo
                    </TableCell>
                    <TableCell className="font-bold text-white">
                      Wallet
                    </TableCell>
                    <TableCell className="font-bold text-white">
                      Commission
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {loading ? (
                    // Skeleton Loading State
                    Array.from({ length: 5 }).map((_, index) => (
                      <TableRow key={index}>
                        {Array.from({ length: 10 }).map((_, i) => (
                          <TableCell key={i}>
                            <Skeleton variant="text" />
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    // Actual Data Rows
                    <TableRow>
                      <TableCell
                        colSpan={10}
                        className="text-center text-gray-500"
                      >
                        No data available
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Totals Section */}
            <div className="mt-8">
              <Typography
                variant="h4"
                className="font-semibold text-gray-800 mb-6"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Totals
              </Typography>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {/* Total Commission */}
                <div className="p-6 bg-blue-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Typography
                    variant="body1"
                    className="text-blue-600 font-medium"
                  >
                    Total Commission
                  </Typography>
                  <Typography
                    variant="h4"
                    className="text-blue-800 font-bold mt-2"
                  >
                    $0.00
                  </Typography>
                </div>

                {/* Total Credit Card */}
                <div className="p-6 bg-green-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Typography
                    variant="body1"
                    className="text-green-600 font-medium"
                  >
                    Total Credit Card
                  </Typography>
                  <Typography
                    variant="h4"
                    className="text-green-800 font-bold mt-2"
                  >
                    $0.00
                  </Typography>
                </div>

                {/* Total Credits */}
                <div className="p-6 bg-purple-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Typography
                    variant="body1"
                    className="text-purple-600 font-medium"
                  >
                    Total Credits
                  </Typography>
                  <Typography
                    variant="h4"
                    className="text-purple-800 font-bold mt-2"
                  >
                    $0.00
                  </Typography>
                </div>

                {/* Total QS Points */}
                <div className="p-6 bg-yellow-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Typography
                    variant="body1"
                    className="text-yellow-600 font-medium"
                  >
                    Total QS Points
                  </Typography>
                  <Typography
                    variant="h4"
                    className="text-yellow-800 font-bold mt-2"
                  >
                    0
                  </Typography>
                </div>

                {/* Total QS Promo */}
                <div className="p-6 bg-pink-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Typography
                    variant="body1"
                    className="text-pink-600 font-medium"
                  >
                    Total QS Promo
                  </Typography>
                  <Typography
                    variant="h4"
                    className="text-pink-800 font-bold mt-2"
                  >
                    $0.00
                  </Typography>
                </div>
              </div>
            </div>

            {/* Generate Invoice Button */}
            <div className="flex justify-end mt-8">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#9ed568",
                  color: "#fff",
                  borderRadius: "12px",
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: "600",
                  padding: "12px 24px",
                  fontFamily: "Poppins, sans-serif",
                }}
                onClick={simulateLoading}
              >
                Generate Invoice
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </LocalizationProvider>
  );
};

export default CreateInvoice;