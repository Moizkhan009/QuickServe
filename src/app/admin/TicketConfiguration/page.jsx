import React from 'react'
import BreadcrumbsComponent from "@/components/BreadCrumb"


function page() {

const  paths = ["Service Provider", "Ticket Configuration"]
  return (
    <>    
     <div>
    <BreadcrumbsComponent 
      title="Ticket Configuration"
      paths={paths}
    />
  </div>
    <div>page</div></>
 
  )
}

export default page