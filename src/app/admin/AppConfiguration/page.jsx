import React from 'react'
import BreadcrumbsComponent from "@/components/BreadCrumb"


function page() {

const  paths = ["Service Provider", " App Configuration"]
  return (
    <>    
     <div>
    <BreadcrumbsComponent 
      title="App Configuration"
      paths={paths}
    />
  </div>
    <div>page</div></>
 
  )
}

export default page