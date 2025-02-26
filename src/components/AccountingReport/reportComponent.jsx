"use client";
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Skeleton } from '@mui/material';

const AccountingReport = () => {
  const [loading, setLoading] = useState(true); // Simulate loading state
  const [rows, setRows] = useState([]);

  // Simulate fetching data
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const sampleData = [
        { serviceProvider: 'Provider A', commission: 100, creditCard: 50, credits: 200, qsPoints: 300, qsPromo: 150 },
        { serviceProvider: 'Provider B', commission: 200, creditCard: 75, credits: 250, qsPoints: 400, qsPromo: 200 },
        { serviceProvider: 'Provider C', commission: 150, creditCard: 60, credits: 300, qsPoints: 500, qsPromo: 250 },
        { serviceProvider: 'Provider A', commission: 100, creditCard: 50, credits: 200, qsPoints: 300, qsPromo: 150 },
        { serviceProvider: 'Provider B', commission: 200, creditCard: 75, credits: 250, qsPoints: 400, qsPromo: 200 },
        { serviceProvider: 'Provider C', commission: 150, creditCard: 60, credits: 300, qsPoints: 500, qsPromo: 250 },
        { serviceProvider: 'Provider A', commission: 100, creditCard: 50, credits: 200, qsPoints: 300, qsPromo: 150 },
        { serviceProvider: 'Provider B', commission: 200, creditCard: 75, credits: 250, qsPoints: 400, qsPromo: 200 },
        { serviceProvider: 'Provider C', commission: 150, creditCard: 60, credits: 300, qsPoints: 500, qsPromo: 250 },
        { serviceProvider: 'Provider A', commission: 100, creditCard: 50, credits: 200, qsPoints: 300, qsPromo: 150 },
        { serviceProvider: 'Provider B', commission: 200, creditCard: 75, credits: 250, qsPoints: 400, qsPromo: 200 },
        { serviceProvider: 'Provider C', commission: 150, creditCard: 60, credits: 300, qsPoints: 500, qsPromo: 250 },
        
      ];
      setRows(sampleData);
      setLoading(false);
    }, 2000); // Simulate 2 seconds loading time
  }, []); // Fetch data on component mount

  // Calculate totals
  const totals = rows.reduce(
    (acc, row) => ({
      commission: acc.commission + row.commission,
      creditCard: acc.creditCard + row.creditCard,
      credits: acc.credits + row.credits,
      qsPoints: acc.qsPoints + row.qsPoints,
      qsPromo: acc.qsPromo + row.qsPromo,
    }),
    { commission: 0, creditCard: 0, credits: 0, qsPoints: 0, qsPromo: 0 }
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Heading */}
      <div className="flex justify-between items-center mb-4">
        <Typography variant="h4" className="font-bold text-gray-800">
          Accounting Report
        </Typography>
      </div>
      <hr style={{ borderTop: '1px solid #e0e0e0', marginBottom: '20px' }} />

      {/* Table */}
      <div className="overflow-x-auto shadow-sm rounded-lg">
  <TableContainer component={Paper} style={{ maxHeight: "400px", overflowY: "auto" }}>
    <Table stickyHeader>
      <TableHead className="bg-gray-100">
        <TableRow>
          <TableCell className="!font-bold !text-gray-700">Service Provider</TableCell>
          <TableCell className="!font-bold !text-gray-700">Commission</TableCell>
          <TableCell className="!font-bold !text-gray-700">Credit Card</TableCell>
          <TableCell className="!font-bold !text-gray-700">Credits</TableCell>
          <TableCell className="!font-bold !text-gray-700">QS Points</TableCell>
          <TableCell className="!font-bold !text-gray-700">QS Promo</TableCell>
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
          : rows.map((row, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell className="text-gray-700">{row.serviceProvider}</TableCell>
                <TableCell className="text-gray-700">${row.commission}</TableCell>
                <TableCell className="text-gray-700">${row.creditCard}</TableCell>
                <TableCell className="text-gray-700">${row.credits}</TableCell>
                <TableCell className="text-gray-700">{row.qsPoints}</TableCell>
                <TableCell className="text-gray-700">${row.qsPromo}</TableCell>
              </TableRow>
            ))}
      </TableBody>
    </Table>
  </TableContainer>
</div>


      {/* Totals Section */}
      <div className="mt-8 ">
        <Typography variant="h4" className="font-semibold text-gray-800  " style={{marginBottom:'15px'}}>
          Totals
        </Typography>
        <div className="flex gap-4">
          <div className="flex-1 p-4 bg-blue-100 rounded-lg shadow-sm">
            <Typography variant="body1" className="text-blue-800 font-medium">
              Total Commission
            </Typography>
            <Typography variant="h5" className="text-blue-900 font-bold">
              ${totals.commission}
            </Typography>
          </div>
          <div className="flex-1 p-4 bg-green-100 rounded-lg shadow-sm">
            <Typography variant="body1" className="text-green-800 font-medium">
              Total Credit Card
            </Typography>
            <Typography variant="h5" className="text-green-900 font-bold">
              ${totals.creditCard}
            </Typography>
          </div>
          <div className="flex-1 p-4 bg-purple-100 rounded-lg shadow-sm">
            <Typography variant="body1" className="text-purple-800 font-medium">
              Total Credits
            </Typography>
            <Typography variant="h5" className="text-purple-900 font-bold">
              ${totals.credits}
            </Typography>
          </div>
          <div className="flex-1 p-4 bg-yellow-100 rounded-lg shadow-sm">
            <Typography variant="body1" className="text-yellow-800 font-medium">
              Total QS Points
            </Typography>
            <Typography variant="h5" className="text-yellow-900 font-bold">
              {totals.qsPoints}
            </Typography>
          </div>
          <div className="flex-1 p-4 bg-pink-100 rounded-lg shadow-sm">
            <Typography variant="body1" className="text-pink-800 font-medium">
              Total QS Promo
            </Typography>
            <Typography variant="h5" className="text-pink-900 font-bold">
              ${totals.qsPromo}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountingReport;