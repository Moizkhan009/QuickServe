import React from 'react'
import BreadcrumbsComponent from "@/components/BreadCrumb"


function page() {

const  paths = ["Service Provider", "Accounting Report"]
  return (
    <>    
     <div>
    <BreadcrumbsComponent 
      title="Accounting Report"
      paths={paths}
    />
  </div>
    <div>page</div></>
 
  )
}

export default page