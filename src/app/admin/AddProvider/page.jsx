import React from 'react'
import BreadcrumbsComponent from "@/components/BreadCrumb"


function page() {

const  paths = ["Service Provider", "Add Service Provider"]
  return (
    <>    
     <div>
    <BreadcrumbsComponent 
      title="Add Service Provider"
      paths={paths}
    />
  </div>
    <div>page</div></>
 
  )
}

export default page