import React from 'react'
import BreadcrumbsComponent from "@/components/BreadCrumb"
<<<<<<< HEAD
=======
import Pincomponent from '@/components/PinDownSp/pinComponent'
>>>>>>> 42f09b9 (in progress)


function page() {

<<<<<<< HEAD
const  paths = ["Service Provider", "Pin Service Provider"]
=======
const  paths = ["Service Provider", "Pin Down Service Providers"]
>>>>>>> 42f09b9 (in progress)
  return (
    <>    
     <div>
    <BreadcrumbsComponent 
<<<<<<< HEAD
      title="Pin Service Provider"
      paths={paths}
    />
  </div>
    <div>page</div></>
=======
      title="Pin Down Service Providers"
      paths={paths}
    />
  </div>
  <div><Pincomponent/></div></>
>>>>>>> 42f09b9 (in progress)
 
  )
}

export default page