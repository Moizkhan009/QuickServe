'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import BreadcrumbsComponent from "@/components/BreadCrumb"

export default function TabsWrappedLabel() {
  const [value, setValue] = React.useState('one');
console.log(value)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <BreadcrumbsComponent/>
      <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <Tab
          value="one"
          label="New Arrivals in the Longest Text of Nonfiction that should appear in the next line"
          wrapped
        />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
      </Tabs>
    </Box>
    {/* <Consumer data={data}/> */}
    

{/* 
    <div>
        {value === "one" && <Consumer />}
    </div> */}
    </>
  
  );
}
