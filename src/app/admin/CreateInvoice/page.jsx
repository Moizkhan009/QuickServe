import React from 'react'
import BreadcrumbsComponent from "@/components/BreadCrumb"


function page() {

const  paths = ["Service Provider", "Create Invoice"]
  return (
    <>    
     <div>
    <BreadcrumbsComponent 
      title="Create Invoice"
      paths={paths}
    />
  </div>
    <div>page</div></>
 
  )
}

export default page