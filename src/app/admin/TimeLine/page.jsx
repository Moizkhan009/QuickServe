import React from 'react'
import BreadcrumbsComponent from "@/components/BreadCrumb"


function page() {

const  paths = ["Service Provider", "TimeLine"]
  return (
    <>    
     <div>
    <BreadcrumbsComponent 
      title="TimeLine"
      paths={paths}
    />
  </div>
    <div>page</div></>
 
  )
}

export default page