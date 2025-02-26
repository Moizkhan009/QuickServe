import React from 'react'
import BreadcrumbsComponent from "@/components/BreadCrumb"
<<<<<<< HEAD
=======
import CreateInvoice from '@/components/Invoice/invoiceComponent'
>>>>>>> 42f09b9 (in progress)


function page() {

const  paths = ["Service Provider", "Create Invoice"]
  return (
    <>    
     <div>
    <BreadcrumbsComponent 
      title="Create Invoice"
      paths={paths}
    />
  </div>
<<<<<<< HEAD
    <div>page</div></>
=======
    <div><CreateInvoice/></div></>
>>>>>>> 42f09b9 (in progress)
 
  )
}

export default page