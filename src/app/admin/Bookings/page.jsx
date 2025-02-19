import React from 'react'
import BreadcrumbsComponent from "@/components/BreadCrumb"


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
    <div>page</div></>
 
  )
}

export default page