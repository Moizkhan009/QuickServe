import React from 'react'
import BreadcrumbsComponent from "@/components/BreadCrumb"
import AddProviderForm from '@/components/AddProvider/AddProviderForm'



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
    <div>
      <AddProviderForm/>
      </div>


      </>
 
  )
}

export default page