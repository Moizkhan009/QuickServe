import React from 'react'
import BreadcrumbsComponent from "@/components/BreadCrumb"


function page() {
  const  paths = ["Service Provider", "Featured Service Provider"]
  return (
    <>    
     <div>
    <BreadcrumbsComponent 
      title="Featured Service Provider"
      paths={paths}
    />
  </div>
    <div>page</div></>
 
  )
}

export default page