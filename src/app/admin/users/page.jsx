import React from 'react'
import BreadcrumbsComponent from "@/components/BreadCrumb"
import TabMenu from "@/components/users/MainTab"



function page() {
  const  paths = ["user management", "users"]
  return (
    <>    
     <div>
    <BreadcrumbsComponent 
      title="Users"
      paths={paths}
    />
  </div>
  <div styles={{top:"-30px"}}>
  <TabMenu  />
  </div>
   
   </>
 
  )
}

export default page