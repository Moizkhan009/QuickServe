import React from 'react'
import BreadcrumbsComponent from "@/components/BreadCrumb"
<<<<<<< HEAD
=======
import TimelineComponent from '@/components/Timeline/timeline'
>>>>>>> 42f09b9 (in progress)


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
<<<<<<< HEAD
    <div>page</div></>
=======
    <div><TimelineComponent/></div></>
>>>>>>> 42f09b9 (in progress)
 
  )
}

export default page