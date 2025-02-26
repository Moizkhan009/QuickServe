"use client";

import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Skeleton,
} from '@mui/material';

const AddProviderForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyNameAr: '',
    officeNumber: '',
    businessOwnerName: '',
    businessOwnerNameAr: '',
    userName: '',
    email: '',
    companyAddress: '',
    contactPersonName: '',
    secondaryText: '',
    mobileNumber: '',
    displayConsumerContactDetails: false,
    commissionType: '',
    amount: '',
    notes: '',
    services: [],
    cities: [],
  });

  const [loading, setLoading] = useState(true); // Loading state

  // Simulate loading delay
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleServicesChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      services: typeof value === 'string' ? value.split(',') : value,
    }));
  };

  const handleCitiesChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      cities: typeof value === 'string' ? value.split(',') : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Add your form submission logic here
<<<<<<< HEAD
  };

  return (
    <div style={{ padding: '10px', maxWidth: '1200px', margin: '0 auto', backgroundColor: 'white' }}>
=======
  }; 
 
  return (
   
    <div style={{ padding: '10px', maxWidth: '1200px', margin: '0 auto', backgroundColor: 'white' }}>
    
>>>>>>> 42f09b9 (in progress)
      <Container maxWidth="md" style={{ marginTop: '20px', marginBottom: '40px' }}>
        <Typography variant="h4" gutterBottom>
          Account Details
        </Typography>
        <hr style={{ borderTop: '1px solid #e0e0e0', marginBottom: '20px' }} /> {/* Horizontal Line */}
        {loading ? (
          // Skeleton UI for Loading State
          <Grid container spacing={3}>
            {[...Array(12)].map((_, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Skeleton variant="rectangular" height={70} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {/* Company Name */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Company Name"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="اسم الشركة"
                  name="companyNameAr"
                  value={formData.companyNameAr}
                  onChange={handleChange}
                  required
                  size="small"
                />
              </Grid>

              {/* User Name */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="User Name"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  required
                  size="small"
                />
              </Grid>

              {/* Office Number */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Office Number"
                  name="officeNumber"
                  value={formData.officeNumber}
                  onChange={handleChange}
                  required
                  placeholder="(___)___ ____"
                  size="small"
                />
              </Grid>

              {/* Business Owner Name */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Business Owner Name"
                  name="businessOwnerName"
                  value={formData.businessOwnerName}
                  onChange={handleChange}
                  required
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Business Owner Name (ar)"
                  name="businessOwnerNameAr"
                  value={formData.businessOwnerNameAr}
                  onChange={handleChange}
                  required
                  size="small"
                />
              </Grid>

              {/* Email */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                  size="small"
                />
              </Grid>

              {/* Company Address */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Company Address"
                  name="companyAddress"
                  value={formData.companyAddress}
                  onChange={handleChange}
                  required
                  size="small"
                />
              </Grid>

              {/* Contact Person Name */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Contact Person Name"
                  name="contactPersonName"
                  value={formData.contactPersonName}
                  onChange={handleChange}
                  required
                  size="small"
                />
              </Grid>

              {/* Secondary Text */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="نص ثانوي"
                  name="secondaryText"
                  value={formData.secondaryText}
                  onChange={handleChange}
                  required
                  size="small"
                />
              </Grid>

              {/* Mobile Number */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Mobile Number"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                  placeholder="(___)___ ____"
                  size="small"
                />
              </Grid>

              {/* Display Consumer Contact Details */}
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="displayConsumerContactDetails"
                      checked={formData.displayConsumerContactDetails}
                      onChange={handleChange}
                      size="small"
                    />
                  }
                  label="Display Consumer Contact Details"
                />
              </Grid>

              {/* Commission Type */}
              <Grid item xs={12} md={3}>
                <FormControl fullWidth size="small">
                  <InputLabel>Commission Type</InputLabel>
                  <Select
                    name="commissionType"
                    value={formData.commissionType}
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="hourly">Hourly Amount</MenuItem>
                    <MenuItem value="percentage">Percentage</MenuItem>
                    <MenuItem value="fixed">Fixed Amount</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Amount */}
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  label="Amount"
                  name="amount"
                  type="number"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                  size="small"
                />
              </Grid>

            

              {/* Services */}
              <Grid item xs={12} md={3}>
                <FormControl fullWidth size="small">
                  <InputLabel>Services</InputLabel>
                  <Select
                    name="services"
                    multiple
                    value={formData.services}
                    onChange={handleServicesChange}
                    required
                  >
                    <MenuItem value="Cleaning">Cleaning</MenuItem>
                    <MenuItem value="Washing">Washing</MenuItem>
                    <MenuItem value="Ironing">Ironing</MenuItem>
                    <MenuItem value="Babysitting">Babysitting</MenuItem>
                    <MenuItem value="Disinfection">Disinfection</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Cities */}
              <Grid item xs={12} md={3}>
                <FormControl fullWidth size="small">
                  <InputLabel>Cities</InputLabel>
                  <Select
                    name="cities"
                    multiple
                    value={formData.cities}
                    onChange={handleCitiesChange}
                    required
                  >
                    <MenuItem value="Doha">Doha</MenuItem>
                    <MenuItem value="Al Rayyan">Al Rayyan</MenuItem>
                    <MenuItem value="Al Shamal">Al Shamal</MenuItem>
                    <MenuItem value="Al Khor">Al Khor</MenuItem>
                    <MenuItem value="Umm Salal">Umm Salal</MenuItem>
                    <MenuItem value="Al Daayen">Al Daayen</MenuItem>
                    <MenuItem value="Al Shahaniya">Al Shahaniya</MenuItem>
                    <MenuItem value="Al Wakrah">Al Wakrah</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

                {/* Notes */}
                <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  multiline
                  rows={2}
                  size="small"
                />
              </Grid>

<<<<<<< HEAD
              {/* Submit Button */}
              <Grid item xs={12}>
                <Button type="submit" variant="contained"  fullWidth  style={{ backgroundColor: '#9ed568' }}>
                  Add Provider
                </Button>
              </Grid>
=======
                  {/* Submit Button */}
    
     <Grid item xs={12}>
     <Button type="submit" variant="contained"  fullWidth  style={{ backgroundColor: '#9ed568' }}>
       Add Provider
     </Button>
       </Grid>
   

             
>>>>>>> 42f09b9 (in progress)
            </Grid>
          </form>
        )}
      </Container>
    </div>
  );
};

export default AddProviderForm;