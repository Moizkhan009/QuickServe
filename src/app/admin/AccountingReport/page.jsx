import React from 'react'
import BreadcrumbsComponent from "@/components/BreadCrumb"
<<<<<<< HEAD
=======
import AccountingReport from '@/components/AccountingReport/reportComponent'
>>>>>>> 42f09b9 (in progress)


function page() {

const  paths = ["Service Provider", "Accounting Report"]
  return (
    <>    
     <div>
    <BreadcrumbsComponent 
      title="Accounting Report"
      paths={paths}
    />
  </div>
<<<<<<< HEAD
    <div>page</div></>
=======
    <div><AccountingReport/></div></>
>>>>>>> 42f09b9 (in progress)
 
  )
}

export default page