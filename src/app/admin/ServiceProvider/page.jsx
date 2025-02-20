import React from 'react'
import BreadcrumbsComponent from "@/components/BreadCrumb"
import SPcomponent from '@/components/ServiceProviders/ServiceProviderComponent'
 

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
  <div>
  <SPcomponent/>
  </div>
 
    </>
 
  )
}

export default page