import React from 'react'
import BreadcrumbsComponent from "@/components/BreadCrumb"
<<<<<<< HEAD
=======
import RefundReport from '@/components/RefundReport/refundComponent'
>>>>>>> 42f09b9 (in progress)


function page() {

const  paths = ["Service Provider", "Refund Report"]
  return (
    <>    
     <div>
    <BreadcrumbsComponent 
      title="Refund Report"
      paths={paths}
    />
  </div>
<<<<<<< HEAD
    <div>page</div></>
=======
    <div><RefundReport/></div></>
>>>>>>> 42f09b9 (in progress)
 
  )
}

export default page