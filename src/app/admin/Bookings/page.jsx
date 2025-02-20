import React from 'react'
import BreadcrumbsComponent from "@/components/BreadCrumb"
import BookingMain from '@/components/Bookings/BookingMain'


function page() {

const  paths = ["Service Provider", "Bookings"]
  return (
    <>    
     <div>
    <BreadcrumbsComponent 
      title="Bookings"
      paths={paths}
    />
  </div>
    <div><BookingMain/></div>
    </>
 
  )
}

export default page