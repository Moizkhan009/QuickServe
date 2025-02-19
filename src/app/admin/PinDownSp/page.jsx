import React from 'react'
import BreadcrumbsComponent from "@/components/BreadCrumb"


function page() {

const  paths = ["Service Provider", "Pin Service Provider"]
  return (
    <>    
     <div>
    <BreadcrumbsComponent 
      title="Pin Service Provider"
      paths={paths}
    />
  </div>
    <div>page</div></>
 
  )
}

export default page