import React from 'react'
import BreadcrumbsComponent from "@/components/BreadCrumb"

function page() {
  const paths=["Service Providers"]
  return (
    <>    
     <div>
    <BreadcrumbsComponent 
      title="Service Providers"
      paths={paths}
    />
  </div>
    <div>page</div></>
 
  )
}

export default page