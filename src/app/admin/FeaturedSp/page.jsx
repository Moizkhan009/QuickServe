import React from 'react'
import BreadcrumbsComponent from "@/components/BreadCrumb"
<<<<<<< HEAD
=======
import ServiceProviderList from '@/components/featuredSp/MainComponenet'
>>>>>>> 42f09b9 (in progress)


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
<<<<<<< HEAD
    <div>page</div></>
=======
    <div><ServiceProviderList/></div></>
>>>>>>> 42f09b9 (in progress)
 
  )
}

export default page