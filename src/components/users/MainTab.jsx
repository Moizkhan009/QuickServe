'use client'
import React, { useState, useEffect } from "react";
import { AppBar, Tabs, Tab, Toolbar, TextField, Box, Typography, Container, Skeleton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import BuildIcon from "@mui/icons-material/Build";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ConsumerComponent from "@/components/users/consumerComponent"



const theme = createTheme({
  palette: {
    primary: {
      main: "#9ed568", // Custom color applied
      contrastText: "#fff", // White text for better visibility
    },
  },
});

const TabMenu = () => {
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulating a loading delay
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Tabs
            value={value}
            onChange={(e, newValue) => setValue(newValue)}
            textColor="inherit"
            indicatorColor="inherit"
          >
            <Tab icon={<PersonIcon />} label="Consumers" />
            <Tab icon={<BusinessIcon />} label="Service Providers" />
            <Tab icon={<BuildIcon />} label="Operations" />
            <Tab icon={<LocalShippingIcon />} label="Drivers" />
          </Tabs>
          <Box flexGrow={1} />
          <TextField 
            variant="outlined" 
            size="small" 
            placeholder="Search..." 
            sx={{ backgroundColor: "#ffffff", borderRadius: 1 }} 
          />
        </Toolbar>
      </AppBar>
      <Container>
        {loading ? (
          <Box mt={2}>
            <Skeleton variant="text" width={210} height={40} />
            <Skeleton variant="rectangular" width="100%" height={200} />
          </Box>
        ) : (
          <Box mt={2}>
            {value === 0 && <ConsumerComponent style={{backgroundColor:"white"}}/>}
            {value === 1 && <Typography variant="h6">Service Providers Section Content</Typography>}
            {value === 2 && <Typography variant="h6">Operations Section Content</Typography>}
            {value === 3 && <Typography variant="h6">Drivers Section Content</Typography>}
          </Box>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default TabMenu;
