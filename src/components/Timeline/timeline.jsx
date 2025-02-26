"use client";

import React, { useState } from "react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import dayjs from "dayjs";

const bookingsData = [
  { id: 5, serviceProvider: "John's Clinic", zone: "Zone A", date: dayjs().format("YYYY-MM-DD"), bookingType: "General Checkup" },
  { id: 6, serviceProvider: "Sarah's Health", zone: "Zone B", date: dayjs().add(1, "day").format("YYYY-MM-DD"), bookingType: "Vaccination" },
  { id: 7, serviceProvider: "City Hospital", zone: "Zone C", date: dayjs().subtract(1, "day").format("YYYY-MM-DD"), bookingType: "Emergency" },
  { id: 8, serviceProvider: "John's Clinic", zone: "Zone A", date: dayjs().format("YYYY-MM-DD"), bookingType: "Consultation" },
  { id: 1, serviceProvider: "John's Clinic", zone: "Zone A", date: dayjs().format("YYYY-MM-DD"), bookingType: "General Checkup" },
  { id: 2, serviceProvider: "Sarah's Health", zone: "Zone B", date: dayjs().add(1, "day").format("YYYY-MM-DD"), bookingType: "Vaccination" },
  { id: 3, serviceProvider: "City Hospital", zone: "Zone C", date: dayjs().subtract(1, "day").format("YYYY-MM-DD"), bookingType: "Emergency" },
  { id: 4, serviceProvider: "John's Clinic", zone: "Zone A", date: dayjs().format("YYYY-MM-DD"), bookingType: "Consultation" },
];

const TimelineComponent = () => {
  const [selectedBooking, setSelectedBooking] = useState("");
  const [selectedZone, setSelectedZone] = useState("");
  const [selectedServiceProvider, setSelectedServiceProvider] = useState("");

  const filteredBookings = bookingsData.filter((booking) => {
    return (
      (!selectedBooking || booking.bookingType === selectedBooking) &&
      (!selectedZone || booking.zone === selectedZone) &&
      (!selectedServiceProvider || booking.serviceProvider === selectedServiceProvider)
    );
  });

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
      <h2 style={{ fontSize: "34px" }}>Bookings Timeline</h2>
      <hr style={{ borderTop: '1px solid #e0e0e0', marginBottom: '20px' }} /> {/* Horizontal Line */}

      {/* Filters */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <FormControl style={{ width: "30%" }}>
          <InputLabel>Filter by Booking</InputLabel>
          <Select
            value={selectedBooking}
            onChange={(e) => setSelectedBooking(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="General Checkup">General Checkup</MenuItem>
            <MenuItem value="Vaccination">Vaccination</MenuItem>
            <MenuItem value="Emergency">Emergency</MenuItem>
            <MenuItem value="Consultation">Consultation</MenuItem>
          </Select>
        </FormControl>

        <FormControl style={{ width: "30%" }}>
          <InputLabel>Filter by Zone</InputLabel>
          <Select
            value={selectedZone}
            onChange={(e) => setSelectedZone(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Zone A">Zone A</MenuItem>
            <MenuItem value="Zone B">Zone B</MenuItem>
            <MenuItem value="Zone C">Zone C</MenuItem>
          </Select>
        </FormControl>

        <FormControl style={{ width: "30%" }}>
          <InputLabel>Filter by Service Provider</InputLabel>
          <Select
            value={selectedServiceProvider}
            onChange={(e) => setSelectedServiceProvider(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="John's Clinic">John's Clinic</MenuItem>
            <MenuItem value="Sarah's Health">Sarah's Health</MenuItem>
            <MenuItem value="City Hospital">City Hospital</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Timeline */}
      <Timeline position="alternate">
        {filteredBookings.map((booking, index) => (
          <TimelineItem key={booking.id}>
            <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: "#9ed568" }} />
              {index < filteredBookings.length - 1 && <TimelineConnector style={{ backgroundColor: "#9ed568" }} />}
            </TimelineSeparator>
            <TimelineContent
              style={{
                backgroundColor: "#f5f5f5", // Light gray background
                padding: "20px",
                borderRadius: "8px",
                marginBottom: "10px",
                textAlign: index % 2 === 0 ? "left" : "right", // Alternate alignment

              }}
            >
              <strong>{booking.date}</strong> - {booking.serviceProvider} ({booking.zone}) - <em>{booking.bookingType}</em>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimelineComponent;