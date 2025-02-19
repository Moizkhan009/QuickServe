import React from 'react'
import BreadcrumbsComponent from "@/components/BreadCrumb"


function page() {

const  paths = ["Service Provider", "Refund Report"]
  return (
    <>    
     <div>
    <BreadcrumbsComponent 
      title="Refund Report"
      paths={paths}
    />
  </div>
    <div>page</div></>
 
  )
}

export default page